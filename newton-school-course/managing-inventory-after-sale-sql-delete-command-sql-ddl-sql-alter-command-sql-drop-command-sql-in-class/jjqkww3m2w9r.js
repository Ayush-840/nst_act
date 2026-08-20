-- 1. Insert a new medicine
INSERT INTO Medicines (medicine_id, medicine_name, price, quantity, supplier_id)
VALUES (101, 'Paracetamol', 5.00, 200, 1);

-- 2. Update quantity for medicine_id = 101
UPDATE Medicines
SET quantity = 250
WHERE medicine_id = 101;

-- 3. Delete medicine with medicine_id = 100
DELETE FROM Medicines
WHERE medicine_id = 100;