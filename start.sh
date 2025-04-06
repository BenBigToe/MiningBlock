#!/bin/sh
while ! nc -z bitcoin-knox 18332; do sleep 5; done
DATA_DIR="/data/miningblock"
mkdir -p "$DATA_DIR"
if [ ! -f "$DATA_DIR/db_initialized" ]; then
  node database.js init
  touch "$DATA_DIR/db_initialized"
  echo "----------------------------------------"
  echo "Admin credentials: umbrel / lerbmu"
  echo "----------------------------------------"
fi
export ADMIN_USERNAME="umbrel"
export ADMIN_PASSWORD="lerbmu"
pm2 start app.js --name miningblock
pm2 save
pm2 logs