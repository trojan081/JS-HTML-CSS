-- CREATE TABLE DEPARTMENTS (
-- 	ID_DEPARTMENT serial primary key,
-- 	V_NAME varchar(255)	
-- )
-- create table CONTRACTS (
-- 	ID_CONTRACT_INST serial primary key,
-- 	ID_DEPARTMENT int references DEPARTMENTS (ID_DEPARTMENT)
-- )
-- update contracts
-- CREATE TABLE DEPARTMENTS (
-- 	ID_DEPARTMENT serial primary key,
-- 	V_NAME varchar(255)	
-- )
-- create table CONTRACTS (
-- 	ID_CONTRACT_INST serial primary key,
-- 	ID_DEPARTMENT int references DEPARTMENTS (ID_DEPARTMENT)
-- )

-- SELECT dt_reg AS "Дата регистрации", COUNT (dt_reg) AS "Количество контрактов"
-- FROM contracts
-- WHERE dt_reg > (NOW() - INTERVAL '5 DAYS')
-- GROUP BY dt_reg

-- SELECT V_STATUS AS "Статус контракта",
-- CASE
-- WHEN V_STATUS = 'A' THEN 'Активен'
-- WHEN V_STATUS = 'B' THEN 'Заблокирован'
-- WHEN V_STATUS = 'C' THEN 'Расторгнут'
-- END
-- AS "Расшифровка",
-- COUNT (V_STATUS) AS "Количество контрактов"
-- FROM contracts
-- GROUP BY V_STATUS
-- select v_name from departments
-- inner join contracts on (V_EXT_IDENT is null)
-- where 

-- SELECT v_name AS "Филиалы без контракта" FROM departments
-- WHERE id_department NOT IN (SELECT id_department FROM contracts WHERE v_status = 'A')

-- select sum(cast (f_sum as int)) from bills

-- CREATE OR REPLACE FUNCTION debt (pDate date)
-- RETURNS bigint AS $$
-- SELECT SUM(CAST (f_sum AS int)) FROM bills WHERE (dt_event >= pDate);
-- $$ LANGUAGE sql;

-- SELECT v_name AS "Уникальные услуги" FROM service 
-- WHERE id_service in (SELECT id_service FROM services
-- WHERE id_contract_inst in (select distinct id_contracts_inst from contracts where id_department  )
-- SELECT v_name AS "Уникальные услуги" FROM service 
-- WHERE id_service in
select id_service, from services
join 
(select id_service, count (id_department) from services join 
	  contracts on contracts.id_contract_inst = services.id_contract_inst
group by id_service)
