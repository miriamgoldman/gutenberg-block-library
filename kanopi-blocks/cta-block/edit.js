import { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, Button, ResponsiveWrapper, SelectControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';



export function Edit( { attributes, setAttributes, bgImage } ) {
	const blockProps = useBlockProps();
	let styles = {};
	
	if ( bgImage && bgImage.source_url ) {
		styles = { backgroundImage: `url(${ bgImage.source_url })` };
	}




	const CTA_TEMPLATE = [ 
		[ 'core/heading', { placeholder: 'Heading for CTA goes here' } ],
		[ 'core/paragraph', { placeholder: 'Lorem ipsum CTA introduction' } ],
		[ 'core/button', {} ]
	];

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
				title='Add Background Image'
				initialOpen={ true }
				>
					<div className="editor-post-featured-image">
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={['image']}
								value={attributes.mediaId}
								onSelect={(media) => {
									setAttributes({
									  downloadFile: {
										mediaTitle: media.title,
										mediaFilename: media.filename,
										mediaUrl: media.url,
										mediaId: media.id,
									  },
									});
								  }}
								render={({open}) => (
									<Button 
										className="editor-post-featured-image__toggle"
										onClick={open}
									>
										{attributes.downloadFile === null
										? 'Upload'
										: 'Upload new file'}
									
									{ !! attributes.downloadFile && bgImage &&
									<ResponsiveWrapper
										naturalWidth={ bgImage.media_details.width }
										naturalHeight={ bgImage.media_details.height }
									>
										<img src={ attributes.downloadFile.mediaUrl } alt='Background Image'  />
									</ResponsiveWrapper>
								}
						
									</Button>
								)}
							/>
						</MediaUploadCheck>
						{ !! attributes.downloadFile &&
                                <MediaUploadCheck>
                                    <Button 
								onClick={() => {
									setAttributes({
									  downloadFile: {
										mediaTitle: undefined,
										mediaFilename: undefined,
										mediaUrl: undefined,
										mediaId: undefined,
									  },
									});
								  }}
									isLink 
									isDestructive>
                                        Remove background image
                                    </Button>
                                </MediaUploadCheck>
                        }
					</div>
				</PanelBody>
				<PanelBody
				title='Additional Style Options'
				>
				<SelectControl
				label="Div Styles"
				value= { attributes.extraStyles }
				options={[
					{ 
						'label': 'No Extra Styles',
						'value': '' 
					},
					{
						'label': 'Border Radius',
						'value': 'radius'
					},
					{
						'label': 'Box Shadow',
						'value': 'shadow'
					}
				]}
				onChange={ (value) => setAttributes({ extraStyles: value }) }
				/>
				</PanelBody>
			</InspectorControls>
		<div 
		{ ...blockProps }
		style= { styles }
		>
			<InnerBlocks 
			template={CTA_TEMPLATE}
			templateLock="all" />
		</div>
		</Fragment>
	);
}


export default compose(
	withSelect( ( select, props ) => {
		return { bgImage: props.attributes.downloadFile.mediaId ? select('core').getMedia(props.attributes.downloadFile.mediaId) : undefined };
	}),
)(Edit);

