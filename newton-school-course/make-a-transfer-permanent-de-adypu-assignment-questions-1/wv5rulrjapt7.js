begin;
update accounts set balance=balance-500 where acc_id=1;
update accounts set balance=balance+500 where acc_id=2;
commit;
select acc_id, holder, balance from accounts;