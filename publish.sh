#!/bin/sh
npm run build && ./node_modules/.bin/push-dir --dir=dist --branch=gh-pages --cleanup
