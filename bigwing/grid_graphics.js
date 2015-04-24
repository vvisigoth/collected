inlets = 1;
outlets = 2;

var beat_bkg_16 = [
 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3,
 5, 4, 3, 2, 5, 4, 3, 2, 5, 4, 3, 2, 5, 4, 3, 2,
 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1,
 3, 2, 1, 1, 3, 2, 1, 1, 3, 2, 1, 1, 3, 2, 1, 1,
 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3,
 5, 4, 3, 2, 5, 4, 3, 2, 5, 4, 3, 2, 5, 4, 3, 2,
 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1,
 3, 2, 1, 1, 3, 2, 1, 1, 3, 2, 1, 1, 3, 2, 1, 1,
 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3,
 5, 4, 3, 2, 5, 4, 3, 2, 5, 4, 3, 2, 5, 4, 3, 2,
 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1,
 3, 2, 1, 1, 3, 2, 1, 1, 3, 2, 1, 1, 3, 2, 1, 1,
 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3,
 5, 4, 3, 2, 5, 4, 3, 2, 5, 4, 3, 2, 5, 4, 3, 2,
 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1,
 3, 2, 1, 1, 3, 2, 1, 1, 3, 2, 1, 1, 3, 2, 1, 1,
 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3, 6, 5, 4, 3,
 5, 4, 3, 2, 5, 4, 3, 2, 5, 4, 3, 2, 5, 4, 3, 2,
 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1, 4, 3, 2, 1,
 3, 2, 1, 1, 3, 2, 1, 1, 3, 2, 1, 1, 3, 2, 1, 1,
];

var beat_bkg_8 = [
 6, 5, 4, 3, 6, 5, 4, 3, 
 5, 4, 3, 2, 5, 4, 3, 2, 
 4, 3, 2, 1, 4, 3, 2, 1, 
 3, 2, 1, 1, 3, 2, 1, 1, 
 6, 5, 4, 3, 6, 5, 4, 3, 
 5, 4, 3, 2, 5, 4, 3, 2, 
 4, 3, 2, 1, 4, 3, 2, 1, 
 3, 2, 1, 1, 3, 2, 1, 1, 
 6, 5, 4, 3, 6, 5, 4, 3, 
 5, 4, 3, 2, 5, 4, 3, 2, 
 4, 3, 2, 1, 4, 3, 2, 1, 
 3, 2, 1, 1, 3, 2, 1, 1, 
 6, 5, 4, 3, 6, 5, 4, 3, 
 5, 4, 3, 2, 5, 4, 3, 2, 
 4, 3, 2, 1, 4, 3, 2, 1, 
 3, 2, 1, 1, 3, 2, 1, 1, 
 6, 5, 4, 3, 6, 5, 4, 3, 
 5, 4, 3, 2, 5, 4, 3, 2, 
 4, 3, 2, 1, 4, 3, 2, 1, 
 3, 2, 1, 1, 3, 2, 1, 1,
 6, 5, 4, 3, 6, 5, 4, 3, 
 5, 4, 3, 2, 5, 4, 3, 2, 
 4, 3, 2, 1, 4, 3, 2, 1, 
 3, 2, 1, 1, 3, 2, 1, 1, 
 6, 5, 4, 3, 6, 5, 4, 3, 
 5, 4, 3, 2, 5, 4, 3, 2, 
 4, 3, 2, 1, 4, 3, 2, 1, 
 3, 2, 1, 1, 3, 2, 1, 1, 
 6, 5, 4, 3, 6, 5, 4, 3, 
 5, 4, 3, 2, 5, 4, 3, 2, 
 4, 3, 2, 1, 4, 3, 2, 1, 
 3, 2, 1, 1, 3, 2, 1, 1, 
 6, 5, 4, 3, 6, 5, 4, 3, 
 5, 4, 3, 2, 5, 4, 3, 2, 
 4, 3, 2, 1, 4, 3, 2, 1, 
 3, 2, 1, 1, 3, 2, 1, 1, 
 6, 5, 4, 3, 6, 5, 4, 3, 
 5, 4, 3, 2, 5, 4, 3, 2, 
 4, 3, 2, 1, 4, 3, 2, 1, 
 3, 2, 1, 1, 3, 2, 1, 1,  
];

var seg_bkg = [
 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4,
 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1,
 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5,
 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2,
 2, 2, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 5, 5, 
 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3,
 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 
 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3,
 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1,
 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4,
 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1,
 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5,
 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2,
 2, 2, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 5, 5, 
 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3,
 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 
 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3,
 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1,
 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4,
 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1,
 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5,
 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2,
 2, 2, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 5, 5, 
 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3,
 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 
 6, 6, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 3, 3,
 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1,
];

var grid_size = 256;
var grid_width = 16;

var map64 = [
 1, 2, 3, 4, 5, 6, 7, 8,
 9,10,11,12,13,14,15,16,
17,18,19,20,21,22,23,24,
25,26,27,28,29,30,31,32,
33,34,35,36,37,38,39,40,
41,42,43,44,45,46,47,48,
49,50,51,52,53,54,55,56,
57,58,59,60,61,62,63,64,
];

var map128h = [
 1, 2, 3, 4, 5, 6, 7, 8,65,66,67,68,69,70,71,72,
 9,10,11,12,13,14,15,16,73,74,75,76,77,78,79,80,
17,18,19,20,21,22,23,24,81,82,83,84,85,86,87,88,
25,26,27,28,29,30,31,32,89,90,91,92,93,94,95,96,
33,34,35,36,37,38,39,40,97,98,99,100,101,102,103,104,
41,42,43,44,45,46,47,48,105,106,107,108,109,110,111,112,
49,50,51,52,53,54,55,56,113,114,115,116,117,118,119,120,
57,58,59,60,61,62,63,64,121,122,123,124,125,126,127,128,
];

var map128v = map64.slice(0);
for(i=64; i<128; i++) {
	map128v[i] = map128v[i-64]+64;
}

var map256 = map128h.slice(0);
for (i=128; i<256; i++) {
	map256[i] = map256[i-128]+128;
}

var map = map256;

var empty = [];
for (i=0; i<256; i++) {
	empty[i] = 0;
}

var slice_mode = "beat";
var play_indicator = 0;
var offset_rows = 0;

function msg_int(v) {
	if (play_indicator != v) {
    	play_indicator = v;
		bang();
	}
}

function stop() {
	play_indicator = -1;
	bang();
}

function clear() {
	outlet(0, empty);
}

function offset(v) {
	var r = Math.floor(v/grid_width);
	if (offset_rows != r) {
		offset_rows = r;
		bang();
	}
}

function mode(v) {
	slice_mode = v;
}

function set_grid_size(w, h) {
	grid_size = w*h;
    grid_width = w;
    if (grid_size == 64) {
		map = map64;
	} else if (grid_size == 128 && grid_width == 8) {
		map = map128v;
	} else if (grid_size == 128 && grid_width == 16) {
		map = map128h;
	} else if (grid_size == 256) {
		map = map256;
	} else {
		post("unknown grid size!");
	}
}	

function bang() {
	var grid = [];
	if (slice_mode == "beat" && grid_width == 16) {
		var start = (offset_rows%4)*grid_width;
		grid = beat_bkg_16.slice(start, start + grid_size);
	} else if (slice_mode == "beat" && grid_width == 8) {
		var start = (offset_rows%4)*grid_width;
		grid = beat_bkg_8.slice(start, start + grid_size);
	} else if (slice_mode == "segment") {
		var start = (offset_rows%9)*grid_width;
		grid = seg_bkg.slice(start, start + grid_size);
	}
	
	if (play_indicator >= 0) {
		grid[play_indicator-offset_rows*grid_width] = 15;
	}
	
	var pixels = [];
	for(i=0; i<grid_size; i++) {
		pixels[map[i]-1] = grid[i];
	}

	outlet(0, pixels);
	outlet(1, offset_rows*grid_width);
}