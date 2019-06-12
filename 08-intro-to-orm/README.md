## Object Relational Mapper (ORM)
+ Definition:


# CRUD REVIEW
What are the four ways we can interact with data?
* Create
SQL:
Ruby:

* Read
SQL:
Ruby:

SQL:
Ruby:

* Update
SQL:
Ruby:

* Destroy
SQL:
Ruby:



## Domain Modeling and SQL Review

Draw out what your schema (structure of your tables and columns) would be for the following domains. Consider what tables are needed, what columns belong on which tables, and where the foreign keys belong.

1. Books and Authors where each book has a single author. Books should have a title and authors should have a name

author has many books
book belongs to an author

user = User.new('coffee_dad')
Tweet.new('having coffee', user)

books    
| id | title |                    | author_id
10      (POODR)                         1
11      Secrets of the JS Ninja         2
12      99 Bottles of OOP               1


authors
|id | name         
1     Sandi Metz             
2     John Resig                 



Q: Write the SQL to find all books written by a certain author given the author's id.
Q: Write the SQL to find all books written by a certain author given the author's name.



2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name


Restuarant
has many reviews
has many customers through reviews

Customer
has many reviews
has many restaurants through reviews

Review.new("food was terrible", customer, restaurant)
belongs to Restaurant
belongs to Customer

JOIN

books    
| id | title |                   
10      (POODR)                        
11      Secrets of the JS Ninja        
12      99 Bottles of OOP
13      JS + RUBY     

book_authors
id |  author_id | book_id
1       1           10
2       2           11
3       1           12   
4       1           13
5       2           13


authors
|id | name         
1     Sandi Metz             
2     John Resig   


Authors Books

author              



Q: Write the SQL to find all books written by a certain author given their name


3. Twitter where Tweets can have Tags (i.e. '#fun', '#hottake', '#tbt'). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.


Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?

It must live on the belongs to



## Lecture Notes
