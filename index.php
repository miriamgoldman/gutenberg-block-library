<?php
/**
 * Plugin Name: Custom Gutenberg Blocks
 * Plugin URI: https://www.miriamgoldman.ca
 * Description: Plugin to load custom Gutenberg blocks, that do not rely on ACF fields.
 * Version: 1.1.0
 * Author: Miriam Goldman
 *
 * @package mag-blocks
 */

defined( 'ABSPATH' ) || exit;

function wpdocs_register_multiple_blocks() {
	$build_dir = __DIR__ . '/build/blocks';

	foreach ( scandir( $build_dir ) as $result ) {
		$block_location = $build_dir . '/' . $result;

		if ( ! is_dir( $block_location ) || '.' === $result || '..' === $result ) {
			continue;
		}

		register_block_type( $block_location );
	}
}

add_action( 'init', 'wpdocs_register_multiple_blocks' );