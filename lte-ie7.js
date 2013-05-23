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
			'icon-remen' : '&#x34;',
			'icon-refresh' : '&#x35;',
			'icon-record' : '&#x36;',
			'icon-racegame' : '&#x37;',
			'icon-qestion' : '&#x38;',
			'icon-praise' : '&#x39;',
			'icon-portsgames' : '&#x3a;',
			'icon-pokergame' : '&#x3b;',
			'icon-pitchon' : '&#x3c;',
			'icon-picture' : '&#x3d;',
			'icon-personal' : '&#x3e;',
			'icon-musicoff' : '&#x3f;',
			'icon-musicgame' : '&#x40;',
			'icon-music' : '&#x41;',
			'icon-motiongame' : '&#x42;',
			'icon-medal' : '&#x43;',
			'icon-list' : '&#x44;',
			'icon-like' : '&#x45;',
			'icon-largegame' : '&#x46;',
			'icon-iphonegame' : '&#x47;',
			'icon-index' : '&#x48;',
			'icon-hot' : '&#x49;',
			'icon-help' : '&#x4a;',
			'icon-group' : '&#x4b;',
			'icon-goods' : '&#x4c;',
			'icon-gift' : '&#x4d;',
			'icon-game' : '&#x4e;',
			'icon-fit' : '&#x4f;',
			'icon-feedback' : '&#x50;',
			'icon-favorite' : '&#x51;',
			'icon-familygame' : '&#x52;',
			'icon-enjoy' : '&#x53;',
			'icon-download2' : '&#x54;',
			'icon-download' : '&#x55;',
			'icon-dm' : '&#x56;',
			'icon-dice' : '&#x57;',
			'icon-deskgame' : '&#x58;',
			'icon-delete' : '&#x59;',
			'icon-consumer' : '&#x5a;',
			'icon-communitygame' : '&#x5b;',
			'icon-childrengames' : '&#x5c;',
			'icon-charactergame' : '&#x5d;',
			'icon-casinogame' : '&#x5e;',
			'icon-back' : '&#x5f;',
			'icon-analogygame' : '&#x60;',
			'icon-adventuregame' : '&#x61;',
			'icon-address' : '&#x62;',
			'icon-add' : '&#x63;',
			'icon-game-2' : '&#x64;'
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