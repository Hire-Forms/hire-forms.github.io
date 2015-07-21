#!/bin/sh

node_modules/.bin/browserify src/index.jsx \
	--detect-globals false \
	--extension=.jsx \
	--external classnames \
	--external immutable \
	--external react \
	--external react-router \
	--outfile build/js/main.js \
	--transform [ babelify --plugins object-assign ] \
	--verbose

./node_modules/.bin/stylus \
	--compress \
	--out build/css/main.css \
	src/main.stylus