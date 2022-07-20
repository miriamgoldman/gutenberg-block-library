<?php
/**
 * Plugin Name: Kanopi Custom Gutenberg Blocks
 * Plugin URI: https://www.kanopi.com
 * Description: Plugin to load custom Gutenberg blocks, that do not rely on ACF fields.
 * Version: 1.1.0
 * Author: Kanopi Studios
 *
 * @package kanopi-blocks
 */

function kanopi_create_cta_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'kanopi_create_cta_block_init' );
