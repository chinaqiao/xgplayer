#!/usr/bin/env bash

SRC_DIR=$(pwd)
TAG_ARG=$1

echo ${TAG_ARG}

#lerna exec --scope xgplayer-livevideo -- npm publish ${TAG_ARG} --registry https://registry.npmjs.org
#lerna exec --scope xgplayer-raw264 -- npm publish ${TAG_ARG} --registry https://registry.npmjs.org
#lerna exec --scope xgplayer-flv-vod -- npm publish ${TAG_ARG} --registry https://registry.npmjs.org
lerna exec --scope xgplayer-flv-live -- npm publish ${TAG_ARG} --registry https://registry.npmjs.org
lerna exec --scope xgplayer-hls-vod -- npm publish ${TAG_ARG} --registry https://registry.npmjs.org
lerna exec --scope xgplayer-hls-live -- npm publish ${TAG_ARG} --registry https://registry.npmjs.org