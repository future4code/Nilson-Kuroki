# AULA 52
## EXERCICIOS 
### Exercicio 1
a) Ao rodar esta linha de comando, a column salary será apagada da tabela.
```
ALTER TABLE Actor DROP COLUMN salary;
```
b) Ao rodar esta linha de comando, a column gender, será trocada para sex.
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
c) Ao rodar esta linha de comando, a column gender, poderá receber até 255 caracteres.
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
d) 
```
ALTER TABLE atores CHANGE gender gender VARCHAR(100);
```
### EXERCICIO 2
a) 
```
UPDATE atores 
SET name = "Fernanda Montenegro Atualizada", 
	birth_date = "1923-10-20"
WHERE id = "003"
```
b) código para mudança do nome de Juliana Paes para JULIANA PÃES: 
```
UPDATE atores 
SET name= UPPER("juliana pães")
WHERE id = "005";
```
codigo para reverter: 
```
UPDATE atores 
SET name = "Juliana Paes"
WHERE id="005";
```
c) Atualização de todos os dados do ator com o id= "005":
```
UPDATE atores
SET name = "Juliana Pães", 
	salary = 800000, 
	birth_date = "1985-05-29", 
    gender = "woman",
    favorite_ice_cream_flavor = "chocolate",
    type="Director"
WHERE id ="005";
```
d) Ao tentar fazer uma mudança em um id que não existe, não gera nenhum erro, porém, executa o código sem fazer nenhuma alteração, já que ele não encontra nada no id correspondente.
```
UPDATE atores 
SET name = "Juliana Paes"
WHERE id="025";
```
mensage: 
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```
### EXERCICIO 3 
a) Para apagar a Fernanda Montenegro que já havia sido modificada, foi usado o LIKE, codigo:
```
DELETE FROM atores WHERE name LIKE "Fernanda Montenegro%";
```
b) 
```
DELETE FROM atores WHERE gender = "male" AND salary > 100000;
```
### EXERCICIO 4
a) Para mostrar o menor salário: 
```
SELECT MIN(salary) FROM atores;
```
b) Para mostrar o menor salário das atrizes: 
```
SELECT MIN(salary) FROM atores WHERE gender = "female";
```
c) Para mostrar a quantidade de mulheres: 
```
SELECT COUNT(gender="female") FROM atores;
```
d) Soma dos salários dos atores: 
```
SELECT SUM(salary) FROM atores;
```
### EXERCICIO 5

a) Seu retorno é a quantidade de atores e atrizes dividido por genero.
```
SELECT COUNT(*), gender
FROM atores
GROUP BY gender;
```
b) 
```
SELECT id, name 
FROM atores
ORDER BY name DESC;
```
c) 
```
SELECT name
FROM atores
ORDER BY salary;
```
d) 
```
SELECT * 
FROM atores
ORDER BY salary
LIMIT 3
```
e) 
```
SELECT AVG(salary), gender 
FROM atores 
GROUP BY gender;
```
### EXERCICIO 6
a) 
```
ALTER TABLE Movie 
ADD playing_limit_date DATE;
```
b) 
```
ALTER TABLE Movie 
CHANGE rating rating FLOAT;
```
c) 
```
UPDATE Movie
SET playing_limit_date = "2020-12-31"
WHERE id ="001";

UPDATE Movie 
SET playing_limit_date = "2020-12-31"
WHERE id = "002";
```
d) o comando não gera erros, porém, ele não consegue fazer alteração em algo que não existe, gerando esta saida: 
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```
### EXERCICIO 7
a) 
```
SELECT COUNT(*)
FROM Movie
WHERE rating > 7.5;
```
b)
```
SELECT AVG(rating)
FROM Movie;
```
c)
```
SELECT COUNT(*)
FROM Movie
WHERE playing_limit_date > CURDATE();
```
d)
```
SELECT COUNT(*)
FROM Movie
WHERE release_Date > CURDATE();
```
e) 
```
SELECT MAX(rating)
FROM Movie;
```
f) 
```
SELECT MIN(rating)
FROM Movie;
```
### EXERCICIO 8 
a) 
```
SELECT * 
FROM Movie
ORDER BY name;
```
b) 
```
SELECT * 
FROM Movie
ORDER BY name DESC
LIMIT 5;
```
c) 
```
SELECT * 
FROM Movie
WHERE release_Date < CURDATE()
ORDER BY release_Date DESC
LIMIT 3; 
```
d) 
```
SELECT * 
FROM Movie
ORDER BY rating DESC
LIMIT 3;
```



