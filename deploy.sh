#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ yumawaydev@23.239.30.66:/var/www/yumaway.com/
echo "Deployment complete"