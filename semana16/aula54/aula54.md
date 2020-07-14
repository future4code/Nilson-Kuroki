## Aula 54 - FOREIGN KEY

### EXERCICIO 1
a) Uma chave estrangeira é responsável por fazer conexão entre duas ou mais tabelas fazendo referência baseado em sua primary key

b) 
```
INSERT INTO Rating 
VALUES ("001","FILME MUITO BOM MESMO!", 9, "002");

INSERT INTO Rating
VALUES ("002", "Filme legalzin", 5, "003");

INSERT INTO Rating
VALUES ("003", "daora", 7, "004");
```

c) Ele retorna um erro devido a ausência de referência na outra tabela, não sendo possível criar.

d) 
```
ALTER TABLE Movie 
DROP COLUMN rating;
```

### EXERCICIO 2
a) O objetivo dessa tabela é a junção dos atores e dos filmes para referenciar em qual filme cada um deles participou.

b) 
```
INSERT INTO MovieCast 
VALUES ("002","001"), ("002", "003"), ("004","002"), ("003","004"), ("004","003"),("003","003");
```
c) Ele gera erro, já que não existe como se referenciar com nenhum dos dois.
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`julian_nilson_kuroki_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
d)Ele não permite ja que o ator/atriz esta sendo usada em outra tabela.
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`julian_nilson_kuroki_db`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `atores` (`id`))
```
### EXERCICIO 3

a) Ao meu ver, o operador ON é usado para fazer comparação entre dados das duas tabelas e dizer se o id de uma é igual a outra, a ideia é que pedimos para que ele traga tudo que tem na tabela Movie e da Rating baseado se o movie.id é igual ao rating.movie_id, que no caso seria o mesmo id.

b)
```
SELECT Movie.id, Movie.name, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
### EXERCICIO 4
a) 
```
SELECT Movie.id, Movie.name, rate, comment FROM Movie
LEFT JOIN Rating on Movie.id = Rating.movie_id;
```
b) 
```
SELECT m.id, m.name, mc.actor_id FROM Movie m 
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```
c) 
```
SELECT AVG(r.rate), m.id, m.name FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
````
### EXERCICIO 5
a) 
é necessário ter relação entre elas para fazer a junção delas, por isso é usada uma independente antes, que junte com outra que faça conexão com ela, logo em seguida faz um novo JOIN para conexão de um terceira conexão independente, porém, que tenha conexão com a segunda conexão feita, para que possa referenciar entre elas.

b) 
```
SELECT m.id, m.name, a.id, a.name FROM Movie m 
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN atores a ON a.id = mc.actor_id;
```
c) Ele não roda devido o fato que tem uma , em um lugar que deveria ser um ponto, gerando o erro: 
```
Error Code: 1146. Table 'julian_nilson_kuroki_db.Atores' doesn't exist
```

### EXERCICIO 6
a)a relação é M:N
b) 
```
CREATE TABLE Oscars (
	movie_id VARCHAR(255),
    category VARCHAR(255),
    year YEAR,
    FOREIGN KEY(movie_id) REFERENCES Movie(id)
);
```
c) 
```
INSERT INTO Oscars 
VALUES 	("002", "Melhor mãe", "2012"),
        ("002", "Melhor Filme", "2012"),
		("003", "Melhor Mulher", "2017"),
		("003", "Melhores maridos", "2017"),
        ("004","Melhor balas perdidas", "2002"),
        ("004","Melhor história", "2002");
```
d) 
```
SELECT m.id, m.name, category, year FROM Movie m
LEFT JOIN Oscars o ON m.id = o.movie_id;
```
