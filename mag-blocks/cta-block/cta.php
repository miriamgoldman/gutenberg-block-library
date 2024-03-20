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

function create_cta_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_cta_block_init' );
