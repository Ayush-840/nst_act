begin;
Delete from accounts;
ROLLBACK;
select acc_id, holder, balance from accounts