// ─── 1 ───
begin;
Delete from accounts;
ROLLBACK;
select acc_id, holder, balance from accounts

// ─── 7 ───
BEGIN
DELETE 2
ROLLBACK
 acc_id | holder | balance 
--------+--------+---------
      1 | Aarav  |    3000
      2 | Priya  |    1000
(2 rows)