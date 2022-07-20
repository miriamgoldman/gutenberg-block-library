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

defined( 'ABSPATH' ) || exit;

require plugin_dir_path( __FILE__ ) . 'build/kanopi-blocks/cta-block/cta.php';