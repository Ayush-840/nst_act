// ─── 1 ───
begin;
update accounts set balance=balance-500 where acc_id=1;
update accounts set balance=balance+500 where acc_id=2;
commit;
select acc_id, holder, balance from accounts; 

// ─── 2 ───
BEGIN
UPDATE 1
UPDATE 1
COMMIT
 acc_id | holder | balance 
--------+--------+---------
      1 | Aarav  |    2500
      2 | Priya  |    1500
(2 rows)