# your code goes here

# mkdir -p configs
# touch configs/config1.txt configs/config2.txt

# echo "# Configuration for Service A" > configs/config1.txt
# echo "SERVICE_A_PORT=8080" >> configs/config1.txt
# echo "SERVICE_A_LOG_LEVEL=INFO" >> configs/config1.txt

# echo "# Configuration for Service B" > configs/config2.txt
# echo "SERVICE_B_PORT=9090" >> configs/config2.txt
# echo "SERVICE_B_LOG_LEVEL=DEBUG" >> configs/config2.txt

# cat configs/config1.txt configs/config2.txt > configs/merged_config.txt







mkdir -p configs
touch configs/config1.txt configs/config2.txt

echo "# Configuration for Service A" > configs/config1.txt
echo "SERVICE_A_PORT=8080" >> configs/config1.txt
echo "SERVICE_A_LOG_LEVEL=INFO" >> configs/config1.txt

echo "# Configuration for Service B" > configs/config2.txt
echo "SERVICE_B_PORT=9090">> configs/config2.txt
echo "SERVICE_B_LOG_LEVEL=DEBUG">> configs/config2.txt

cat configs/config1.txt configs/config2.txt  > configs/merged_config.txt
# cat configs/config2.txt > configs/merged_config.txt