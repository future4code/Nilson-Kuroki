### EXERCICIO 1

a) outras usadas são, varchar que serve para identificar uma string com uma quantidade de caracteres,
DATE que identifica datas 

b) SHOW DATABASES ele volta os dataBase que tenho acesso,
e com o SHOW TABLES ele volta a tabela que tem dentro do meu DATABASE

c) ele retorna os parametros de cada coluna e seu tipo, alem do que permite e quem é a PK da tabela

### EXERCICIO 2

a) implementando atriz Gloria Pires na tabela
```
INSERT INTO atores (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Gloria Pires",
    1200000,
    "1963-08-23",
    "female"
)
```
b)basicamente fala que existe uma primary key duplicada e ele não pode fazer isso
pois a primary key é um identificador daquela linha e serve para separar ela de outras,
acarretando neste erro:
```
ErrorCode: 1062. Duplicate entry '002' for key 'PRIMARY'
```

c) este problema acontece por passar o que queria colocar na tabela, porém, não foi colocado
os parametros que seriam inseridos nessa tabela:
```
Error Code: 1136. Column count doesn't match value count at row 1
```

d) neste erro ocorre que não é passado o valor name e nem seu valor, sendo que ele tem que
ser diferente de null, no qual foi declarado na criação da tabela:
```
Error Code: 1364. Field 'name' doesn't have a default value
```

e) neste erro, ele reclama pelo fato que a column 'birth_date', deveria ter sido passado
o valor dele dentro de "" para identificar que ele é do tipo DATE
```
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
```

f) criado

```
INSERT INTO atores (id, name, salary, birth_date, gender)
VALUES(
	"006",
    "Rodrigo Santoro",
    8794654.50,
    "1975-08-22",
    "male"
),(
	"007",
    "Cauã Reimond",
    123546789.20,
    "1980-05-20",
    "male"
);
```

### EXERCICIO 3

a) 
```
SELECT * FROM atores WHERE gender = "female"
```

b) 
```
SELECT salary FROM atores WHERE name = "Tony Ramos"
```

c) ele retorna todos os valores encontrados, que no caso nenhum, mostrando apenas uma tabela com null

d) Ele retorna uma tabela com as colunas do id, name, salary, porem, vazias, já que todos recebem mais que 500

e) o erro é dado devido a column 'nome' não existir nesta tabela:
```
Error Code: 1054. Unknown column 'nome' in 'field list'
```

### EXERCICIO 4

a) Ele retorna todos os atores que começam com A e J e que tem um salário maior que 300000

b) 
```
SELECT * FROM atores WHERE name LIKE "A%" AND salary > 350000;
```
c) 
```
SELECT * FROM atores WHERE name LIKE "G%" OR name LIKE "g%"
```
d) 
```
SELECT * FROM atores WHERE (name LIKE "G%" OR name LIKE "g%" OR name LIKE "a%" ORname LIKE "A%") AND salary BETWEEN 350000 and 900000;
```

### EXERCICIO 5

a) foi criada uma tabela para filmes com id, name, synopsis, release_Date, rating, usando os tipos VARCHAR, TEXT(usado para colocar textos grandes), DATE para data do filme e INT para a avaliação.

```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

### EXERCICIO 6 
a) 
```
SELECT id, title, rating FROM Movie WHERE id = "004";
```
b) 
```
SELECT * FROM Movie WHERE name = "Deus é Brasileiro"
```
c) 
```
SELECT id, name, synopsis FROM Movie WHERE rating > 7;
```

### EXERCICIO 7

a) 
```
SELECT * FROM Movie WHERE name LIKE "%vida%";
```
b) 
```
SELECT * FROM Movie WHERE name LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
```
c) 
```
SELECT * FROM MOVIE WHERE release_date < "2020-05-04";
```
d) 
```
SELECT * FROM MOVIE WHERE release_date < "2020-05-04" AND (name LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;
```




