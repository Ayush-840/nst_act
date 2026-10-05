SELECT 
    account_holder, 
    branch, 
    balance
FROM 
    accounts a
WHERE 
    account_status = 'Active'
    AND EXISTS (
        SELECT 1
        FROM transactions t1
        WHERE t1.account_id = a.account_id
          AND t1.txn_amount > (
              SELECT AVG(t2.txn_amount)
              FROM transactions t2
              WHERE t2.account_id = a.account_id
          )
    );