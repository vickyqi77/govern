#!/usr/bin/env bash

# Go to govern server package and start dev server
cd ../govern-server/
nohup yarn dev >>/dev/null 2>>/dev/null &

# Go to govern package and start e2e tests
cd ../govern
yarn build
jest -c ./jest.config.e2e.js
