#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ yumaway@72.14.185.252:/var/www/yumaway.com/
echo "Deployment complete"