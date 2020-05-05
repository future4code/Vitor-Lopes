# Aula 50-Sagan  -   Vitor Soares Lopes

#### Exercício 1

a) Deleta uma coluna que nesse caso é a ***salary***

b) Substitui ***gender*** por ***sex***

c) substitui a quantidade de caracteres de ***gender*** de 6 para 255

d) 
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```


#### Exercício 2

a) 
```sql
UPDATE Actor SET name = 'Chico Anísio' WHERE id = '003';
```
b)
```sql
UPDATE Actor SET name = 'JULIANA PÃES' WHERE id = '005';
UPDATE Actor SET name = 'Juliana Paes' WHERE id = '005';
```
c)
```sql
UPDATE Actor SET name = 'JULIANA PÃES', salary = 450000, birth_date = '1975-01-10', gender = 'male'  WHERE id = '005';

```
d) operação concluída porém nenhuma linha foi afetada pois não existe a id 500. 
```sql
UPDATE Actor SET name = 'JULIANA PÃEaaS', salary = 450000, birth_date = '1975-01-10', gender = 'male'  WHERE id = '500';
```

#### Exercício 3

a) Obs: eu tive que  deletar o ator ***Nome Padrão*** pois em outro exercício já havia excluído a ***Fernanda Montenegro***.
```sql
DELETE FROM Actor WHERE name = "Nome Padrão"
```
b)
```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```
#### Exercício 4

a)
```sql
SELECT MAX(salary) FROM Actor;
```
b)
```sql
SELECT MIN(salary) FROM Actor WHERE gender = 'female'
```
c)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```
d)
```sql
SELECT SUM(salary) FROM Actor;
```
##### Exercício 5
a) Ela pega a lista de todos os atores, os agrupa por gênero e nos mostra a quantidade de cada ***male/female*** que tem nela

b) 
```sql
SELECT name, id FROM Actor ORDER BY name DESC;
```
c) 
```sql
SELECT name, salary FROM Actor ORDER BY salary ASC;
```
d)
```sql
SELECT name, salary FROM Actor ORDER BY salary DESC LIMIT 3;
```
e) 
```sql
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```
#### Exercício 6
a)
```sql
ALTER TABLE Movies ADD playing_limit_date DATE;
```
b)Já havia colocado em ***decimal*** no exercício de ontem.

c)
```sql
UPDATE Movies SET playing_limit_date = '2020-05-04' WHERE id = '004';
```
```sql
UPDATE Movies SET playing_limit_date = '2021-05-04' WHERE id = '003';
```
d) operação concluída porém nenhuma linha foi afetada pois não existe mais a id 002. 

#### Exercício 7

a)
```sql
SELECT COUNT(*) FROM Movies WHERE rating > 7.5;
```
b) 
```sql
SELECT AVG(rating) FROM Movies;
```
c)
```sql
SELECT COUNT(*) FROM Movies WHERE playing_limit_date >= '2020-05-05';
```
d)
```sql
SELECT COUNT(*) FROM Movies WHERE release_date > '2020-05-05';
```
e)
```sql
SELECT MAX(rating) FROM Movies;
```
f)
```sql
SELECT MIN(rating) FROM Movies;
```

#### Exercício 8

a)
```sql
SELECT * FROM Movies ORDER BY name ASC;
```
b)
```sql
SELECT * FROM Movies ORDER BY name DESC LIMIT 5;
```
c)
```sql
SELECT * FROM Movies WHERE playing_limit_date > CURDATE() ORDER BY release_date DESC LIMIT 3;
```
d)Só tenho 3 filmes, não achei necessário utilizar o limite de 3.
```sql
SELECT name, rating FROM Movies ORDER BY rating DESC; 
```
