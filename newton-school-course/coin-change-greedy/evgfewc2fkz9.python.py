def coinChange(amount):
    val = [2000,500,200,100,50,20,10,5,2,1]
    count = 0
    for coin in (val):
        if amount == 0:
            break
        if amount >= coin:
            count += amount // coin
            amount = amount%coin
    return count