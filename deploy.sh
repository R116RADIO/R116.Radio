#!/usr/bin/env bash
rm -rf .radioBundle
meteor --directory build .radioBundle
cd ./.radioBundle/bundle/programs/server
npm install
cd ../../
forever stop radio_app
ROOT_URL=http://54.148.52.34:3000 MONGO_URL=mongodb://localhost:27017/radio_app PORT=3000 forever --uid 'radio_app' --append start main.js
