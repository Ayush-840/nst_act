# echo "# Dev Configuration" > merged_config.txt
# cat configs/dev_config.txt >> merged_config.txt

# echo "" >> merged_config.txt
# echo "# Test Configuration" >> merged_config.txt
# cat configs/test_config.txt >> merged_config.txt

# echo "" >> merged_config.txt
# echo "# Prod Configuration" >> merged_config.txt
# cat configs/prod_config.txt >> merged_config.txt



echo "# Dev Configuration" >> merged_config.txt
cat configs/dev_config.txt >> merged_config.txt
echo "" >> merged_config.txt

echo "# Test Configuration" >> merged_config.txt
cat configs/test_config.txt >> merged_config.txt
echo "" >> merged_config.txt

echo "# Prod Configuration" >> merged_config.txt
cat configs/prod_config.txt >> merged_config.txt



# cat configs/dev_config.txt configs/test_config.txt configs/prod_config.txt >> merged_config.txt