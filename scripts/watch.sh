#!/bin/sh

./node_modules/.bin/stylus \
	--compress \
	--out build/css/main.css \
	--watch \
	src/main.stylus &

node_modules/.bin/watchify src/index.jsx \
	--detect-globals false \
	--extension=.jsx \
	--external classnames \
	--external immutable \
	--external react \
	--external react-router \
	--outfile build/js/main.js \
	--transform [ babelify --plugins object-assign ] \
	--verbose