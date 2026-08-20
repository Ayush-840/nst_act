CREATE TABLE Payments (
    payment_id INT PRIMARY KEY,
    car_id INT,
    payment_date DATE,
    amount DECIMAL(10, 2),
    FOREIGN KEY (car_id) REFERENCES Cars(car_id)
);


INSERT INTO Payments (payment_id, car_id, payment_date, amount)
VALUES 
    (401, 103, '2024-05-25', 375.00),
    (402, 102, '2024-05-26', 425.00);


ALTER TABLE Payments
ADD COLUMN payment_time VARCHAR(40);

UPDATE Payments
SET amount = 500.00
WHERE payment_id = 402;

DELETE FROM Payments
WHERE payment_id = 401;