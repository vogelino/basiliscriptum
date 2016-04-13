#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";

var FONT_NAMES = [
	'Open Sans',
	'Helvetica',
	'Source Sans Pro',
	'Boton',
	'Arno Pro',
	'Cambria',
	'St Ryde',
	'Brandon Grotesque',
	'Corbel',
	'Delta Jaeger'
];
var ELLIPSE_AMOUNT = 25;
var PAGE_WIDTH = 500;
var PAGE_HEIGHT = 300;
var TEXT_SIZE = 100;

function createDocument() {
	// In this function, I clear and define the
	// document's size or rulers origin
	var doc = b.doc();
	b.clear();
	doc.documentPreferences.properties = {
		pageWidth: PAGE_WIDTH,
		pageHeight: PAGE_HEIGHT
	};
	doc.viewPreferences.rulerOrigin = RulerOrigin.SPREAD_ORIGIN;

	return doc;
}

function drawText(doc, font) {
	b.textFont(font);
	b.textSize(TEXT_SIZE);
	b.textAlign(
		Justification.CENTER_JUSTIFIED,
		VerticalJustification.CENTER_ALIGN
	);

	var word = b.text('hello!', 0, 0, PAGE_WIDTH, PAGE_HEIGHT);
	word.transparencySettings.blendingSettings.properties = {
		opacity: 5
	};
}

function save(doc, filename) {
	var fname = File($.fileName).parent.fsName + '/' +
		($.fileName.split('/')[$.fileName.split('/').length - 1])
			.split('.')[0] + '.indd';
	doc.save(fname, false, 'basil', true);
	b.savePNG(filename);
}

function draw() {
	var doc = createDocument();

	for (var i = 0; i < FONT_NAMES.length; i++) {
		drawText(doc, FONT_NAMES[i]);
	}
	// save(doc, 'out.png');
};

b.go();
