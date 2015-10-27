<?php
/*
Plugin Name: WP Heading Buttons
Plugin URI: http://tercan.net/wp-heading-buttons/
Description: Adding heading buttons (H1, H2, H3, H4, H5, H6) to TinyMCE editor.
Version: 0.2
Author: Tercan Keskin
Author URI: http://tercan.net/
License: GPLv3
*/

define('WPHB_VERSION', '0.2');
define('WPHB_PLUGIN_URL', plugin_dir_url( __FILE__ ));


function add_heading_button() {
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
		return;

	if ( get_user_option('rich_editing') == 'true') {
		add_filter('mce_external_plugins', 'add_heading_tinymce');
		add_filter('mce_buttons', 'register_heading_buttons');
	}
}

function register_heading_buttons($buttons) {
	array_push($buttons, '|', 'heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6');
	return $buttons;
}

function add_heading_tinymce($plugin_array) {
	$plugin_array['wpheadingbuttons'] = WPHB_PLUGIN_URL . '/js/editor_plugin.js';
	return $plugin_array;
}

function wphb_admin_css() {
	echo '<style type="text/css" media="all">.wp_themeSkin .mceButton { margin: 0 !important; padding: 0 !important; }</style>';
}

add_action('admin_head', 'wphb_admin_css');
add_action('init', 'add_heading_button');
