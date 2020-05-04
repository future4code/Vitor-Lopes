# Aula 50-Sagan  -   Vitor Soares Lopes

#### Exercício 1

a)
- **CREATE TABLE** é utilizada para criar uma nova tabela
- a palavra reservada **VARCHAR(n)** é utilizada para declarar uma variável com a quantidade de caractéres expecificadas em ***n***.
-  **DATE** é utilizada para guardarmos uma data.
-  **PRIMARY KEY** é utilizada como chave primária e, portanto, deve ser única.

b) **SHOW DATABASES** nos mostra as bases de dados que temos dentro dos schemas. **SHOW TABLES** nos mostra as tabelas que existem dentro de uma DB.

c) **SHOW Actor** retorna um erro de sintaxe 1064

#### Exercício 2

a) 
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) 
```sql
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
```
Esse problema ocorreu pois ja havia uma entrada duplicada('002') como key primária.

c) **error 1136** = O valor da quantidade de colunas não coincide com o esperado. Arrumei adicionando o ***birth_date***
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) **error 1364** = o campo nome dão possui um valor padrão.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  'Nome Padrão',
  400000,
  "1949-04-18", 
  "male"
);
```

e) **error 1292** = no campo data ele faz uma operação de subtração(1979-03-26 = 1950). O formato deveria ser em string.

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  '1979-03-26', 
  "female"
);
```

f) 
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Rogério Cardoso",
  4500000,
  "1922-03-21", 
  "male"
);
```

#### Exercício 3

a) 

```sql
SELECT id, name from Actor WHERE gender = "female"
```

b) 
```sql
SELECT id, salary from Actor WHERE name = 'Tony Ramos'
```

c) Não apareceu nenhum resultado.
```sql
SELECT id, name from Actor WHERE gender = "invalid"
```

d) 
SELECT id, name, salary from Actor WHERE salary <= 500000
```

e) Estava escrito 'nome' onde o esperado seria 'name'
```sql
SELECT id, name from Actor WHERE id = "002"

```

#### Exercício 4

a) A query permite priorizar primeiro o que há dentro dos parênteses. Após realizar a lógica, aí sim parte para a próxima operação

b)
```sql
SELECT * from Actor WHERE name NOT LIKE 'A%' AND salary > 350000
```

c) 
```sql
SELECT * from Actor WHERE name LIKE '%g%'
```
d) 
```sql
SELECT * from Actor WHERE (name LIKE '%a%' OR '%g%') AND salary BETWEEN 350000 AND 900000
```

#### Exercício 5

a) 
```sql
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis VARCHAR (255) NOT NULL,
    release_date DATE NOT NULL,
    rating decimal NOT NULL
);
```

b) 
```sql
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
'001',
'Se Eu Fosse Você',
'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
'2006-01-06',
7
)
```

c)
```sql
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
'002',
'Doce Mãe',
'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela',
'2012-12-27',
10
)
```

d)
```sql
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
'003',
'Dona Flor e Seus Dois Maridos',
'Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.',
'2017-11-02',
8
)
```

e) 
```sql
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
'004',
'O Auto da Compadecida',
'O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.',
'2000-09-10',
10
)
```

#### Exercício 6

a)
```sql
SELECT id, name, rating from Movies WHERE id LIKE '002'
```

b)
```sql
SELECT * from Movies WHERE name LIKE 'O Auto da Compadecida'
```

c)
```sql
SELECT id, name, synopsis from Movies WHERE rating >= 7
```

#### Exercício 7

a)
```sql
SELECT * from Movies WHERE name LIKE '%vida%'
```

b) Não entendi muito bem o enunciado mas tentei fazer:
```sql
SELECT * from Movies WHERE name LIKE '%vida%' or synopsis LIKE '%vida%'
```

c) 
```sql
SELECT * from Movies WHERE release_date <= '2020-05-04'
```

d)
```sql
SELECT * from Movies WHERE release_date <= '2020-05-04' AND name LIKE '%Auto%' AND rating >= 7
```

