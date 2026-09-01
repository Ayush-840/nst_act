# your code goes here

# mkdir -p SoftwareLogs/Application
# mkdir -p SoftwareLogs/Database
# mkdir -p SoftwareLogs/User

# echo "Application started" >> SoftwareLogs/Application/app.log
# echo "Application running" >> SoftwareLogs/Application/app.log

# echo "Database connected" >> SoftwareLogs/Database/db.log
# echo "Database query executed" >> SoftwareLogs/Database/db.log

# echo "User login" >> SoftwareLogs/User/user.log
# echo "User logout" >> SoftwareLogs/User/user.log

mkdir -p SoftwareLogs/Application SoftwareLogs/Database SoftwareLogs/User

echo "Application started">> SoftwareLogs/Application/app.log 
echo "Application running">> SoftwareLogs/Application/app.log

echo "Database connected">> SoftwareLogs/Database/db.log
echo "Database query executed">> SoftwareLogs/Database/db.log

echo "User login" >> SoftwareLogs/User/user.log
echo "User logout">> SoftwareLogs/User/user.log