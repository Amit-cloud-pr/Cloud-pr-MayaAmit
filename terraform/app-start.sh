#!/bin/bash
echo "=== STARTING APP ===" >> /var/log/my_app.log
### check path version if not changed!!
echo "fixing path"
export PATH=$PATH:/root/.nvm/versions/node/v22.17.0/bin
cd /opt/Cloud-pr-MayaAmit/backend/ && . /root/envs.sh && npm start &
cd /opt/Cloud-pr-MayaAmit/frontend/ && npm start &
