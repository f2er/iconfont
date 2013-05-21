/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ks\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-upload' : '&#x21;',
			'icon-youxi' : '&#x22;',
			'icon-user' : '&#x23;',
			'icon-shezhi' : '&#x24;',
			'icon-share' : '&#x25;',
			'icon-setting' : '&#x26;',
			'icon-refresh' : '&#x27;',
			'icon-qestion' : '&#x28;',
			'icon-picture' : '&#x29;',
			'icon-musicoff' : '&#x2a;',
			'icon-music' : '&#x2b;',
			'icon-media' : '&#x2c;',
			'icon-list' : '&#x2d;',
			'icon-like' : '&#x2e;',
			'icon-help' : '&#x2f;',
			'icon-goods' : '&#x30;',
			'icon-gift' : '&#x31;',
			'icon-game' : '&#x32;',
			'icon-feedback' : '&#x33;',
			'icon-favorite' : '&#x34;',
			'icon-download' : '&#x35;',
			'icon-delete' : '&#x36;',
			'icon-bookmarket' : '&#x37;',
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