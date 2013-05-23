/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ks\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-youxi' : '&#x21;',
			'icon-webgame' : '&#x22;',
			'icon-user' : '&#x23;',
			'icon-upload' : '&#x24;',
			'icon-type' : '&#x25;',
			'icon-timelimit' : '&#x26;',
			'icon-teachgame' : '&#x27;',
			'icon-tag' : '&#x28;',
			'icon-tacticsgame' : '&#x29;',
			'icon-standalonegame' : '&#x2a;',
			'icon-smallgame' : '&#x2b;',
			'icon-shezhi' : '&#x2c;',
			'icon-share' : '&#x2d;',
			'icon-setting' : '&#x2e;',
			'icon-search1' : '&#x2f;',
			'icon-search' : '&#x30;',
			'icon-rss' : '&#x31;',
			'icon-rolegame' : '&#x32;',
			'icon-riddlegame' : '&#x33;',
			'icon-refresh' : '&#x34;',
			'icon-record' : '&#x35;',
			'icon-racegame' : '&#x36;',
			'icon-qestion' : '&#x37;',
			'icon-praise' : '&#x38;',
			'icon-portsgames' : '&#x39;',
			'icon-pokergame' : '&#x3a;',
			'icon-pitchon' : '&#x3b;',
			'icon-picture' : '&#x3c;',
			'icon-personal' : '&#x3d;',
			'icon-musicoff' : '&#x3e;',
			'icon-music' : '&#x3f;',
			'icon-motiongame' : '&#x40;',
			'icon-medal' : '&#x41;',
			'icon-list' : '&#x42;',
			'icon-like' : '&#x43;',
			'icon-largegame' : '&#x44;',
			'icon-iphonegame' : '&#x45;',
			'icon-index' : '&#x46;',
			'icon-help' : '&#x47;',
			'icon-group' : '&#x48;',
			'icon-goods' : '&#x49;',
			'icon-gift' : '&#x4a;',
			'icon-game' : '&#x4b;',
			'icon-fit' : '&#x4c;',
			'icon-feedback' : '&#x4d;',
			'icon-favorite' : '&#x4e;',
			'icon-familygame' : '&#x4f;',
			'icon-enjoy' : '&#x50;',
			'icon-download2' : '&#x51;',
			'icon-download' : '&#x52;',
			'icon-dm' : '&#x53;',
			'icon-dice' : '&#x54;',
			'icon-deskgame' : '&#x55;',
			'icon-delete' : '&#x56;',
			'icon-consumer' : '&#x57;',
			'icon-communitygame' : '&#x58;',
			'icon-childrengames' : '&#x59;',
			'icon-charactergame' : '&#x5a;',
			'icon-casinogame' : '&#x5b;',
			'icon-back' : '&#x5c;',
			'icon-analogygame' : '&#x5d;',
			'icon-adventuregame' : '&#x5e;',
			'icon-address' : '&#x5f;',
			'icon-add' : '&#x60;',
			'icon-game-2' : '&#x61;'
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