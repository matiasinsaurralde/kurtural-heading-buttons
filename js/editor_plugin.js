(function() {

	tinymce.PluginManager.requireLangPack('wpheadingbuttons');

	tinymce.create('tinymce.plugins.WPHeadingButtons', {
		init : function(ed, url) {
			ed.addButton('heading1', {
				title : 'wpheadingbuttons.heading1',
				image : url+'/../images/btn_h1.png',
				onclick : function() {
					ed.execCommand('FormatBlock', false, 'h1');
				}
			});
			ed.addButton('heading2', {
				title : 'wpheadingbuttons.heading2',
				image : url+'/../images/btn_h2.png',
				onclick : function() {
					ed.execCommand('FormatBlock', false, 'h2');
				}
			});
			ed.addButton('heading3', {
				title : 'wpheadingbuttons.heading3',
				image : url+'/../images/btn_h3.png',
				onclick : function() {
					ed.execCommand('FormatBlock', false, 'h3');
				}
			});
			ed.addButton('heading4', {
				title : 'wpheadingbuttons.heading4',
				image : url+'/../images/btn_h4.png',
				onclick : function() {
					ed.execCommand('FormatBlock', false, 'h4');
				}
			});
			ed.addButton('heading5', {
				title : 'wpheadingbuttons.heading5',
				image : url+'/../images/btn_h5.png',
				onclick : function() {
					ed.execCommand('FormatBlock', false, 'h5');
				}
			});
			ed.addButton('heading6', {
				title : 'wpheadingbuttons.heading6',
				image : url+'/../images/btn_h6.png',
				onclick : function() {
					ed.execCommand('FormatBlock', false, 'h6');
				}
			});

		},

		getInfo : function() {
			return {
				longname : 'WP Heading Buttons',
				author : 'tercan',
				authorurl : 'http://tercan.net/',
				infourl : 'http://tercan.net/',
				version : "0.2"
			};
		}

	});
	tinymce.PluginManager.add('wpheadingbuttons', tinymce.plugins.WPHeadingButtons);
})();