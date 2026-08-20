--  Write your code above
CREATE TABLE users (
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    account_balance INT NOT NULL CHECK (account_balance >= 0),
    transaction_history VARCHAR(100) NOT NULL,
    wallet_address VARCHAR(100) NOT NULL
);

desc users;