# your code goes here

# orig_dir=$(pwd)
# mkdir -p project/src/main project/src/tests/unit/integration project/configs/development project/configs/production project/logs/archive

# chmod 755 project/src
# chmod 755 project/logs
# chmod 700 project/configs

# touch project/src/main/app.py project/src/main/config.json project/src/main/README.md
# echo "This is the main application." > project/src/main/README.md

# touch project/logs/archive/error.log project/logs/archive/access.log project/logs/archive/debug.log
# chmod 640 project/logs/archive/*.log

# cd "$orig_dir"







mkdir -p project/src/main project/src/tests/unit/integration
mkdir -p project/configs/development project/configs/production
mkdir -p project/logs/archive

chmod 755 project/src 
chmod 755 project/logs

chmod 700 project/configs

touch project/src/main/app.py project/src/main/config.json project/src/main/README.md
echo "This is the main application." > project/src/main/README.md

touch project/logs/archive/error.log project/logs/archive/access.log project/logs/archive/debug.log

chmod 640 project/logs/archive/*.log