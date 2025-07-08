#!/bin/bash

### check path version if not changed!!
echo "fixing path"
export PATH=$PATH:/root/.nvm/versions/node/v22.17.0/bin
cd /opt/Clouds-final-project/album-BE/ && . /root/envs.sh && nohup npm start &
cd /opt/Clouds-final-project/album-FE/ && nohup npm start &
