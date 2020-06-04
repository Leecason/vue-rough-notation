#!/usr/bin/env sh

set -e

yarn run demo:build

cd demo/dist

git init
git add -A
git commit -m '🚀deploy demo'

git push -f git@github.com:Leecason/vue-rough-notation.git master:gh-pages

cd -
