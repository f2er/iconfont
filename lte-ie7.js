/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ks\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-youxi' : '&#x21;',
			'icon-user' : '&#x22;',
			'icon-upload' : '&#x23;',
			'icon-tag' : '&#x24;',
			'icon-shezhi' : '&#x25;',
			'icon-share' : '&#x26;',
			'icon-setting' : '&#x27;',
			'icon-refresh' : '&#x28;',
			'icon-qestion' : '&#x29;',
			'icon-picture' : '&#x2a;',
			'icon-musicoff' : '&#x2b;',
			'icon-music' : '&#x2c;',
			'icon-media' : '&#x2d;',
			'icon-list' : '&#x2e;',
			'icon-like' : '&#x2f;',
			'icon-help' : '&#x30;',
			'icon-goods' : '&#x31;',
			'icon-gift' : '&#x32;',
			'icon-game' : '&#x33;',
			'icon-feedback' : '&#x34;',
			'icon-favorite' : '&#x35;',
			'icon-download' : '&#x36;',
			'icon-delete' : '&#x37;',
			'icon-add' : '&#x38;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};