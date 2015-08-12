#!/bin/bash

cd /home/ec2-user/kreggel && npm install
forever start -c "npm start" /home/ec2-user/kreggel/