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

require plugin_dir_path( __FILE__ ) . 'build/mag-blocks/cta-block/cta.php';