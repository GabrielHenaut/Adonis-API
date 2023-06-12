# Adonis API

This is a basic implematation of a Rest API with AdonisJS.The API has CRUD functionality for Users and products, autentication with API tokens, private routes for logged in users, and a Postgres DB.

It was my first time working with AdonisJS, but i realy enjoied the workflow and easy of use of it. 

I was moving during the weekend, so I didn't have much time to work on this. I know its a very simple implamentation with no automataed tests and very limited error handling, but I hope it's enough to show my skills.

# Usage

The test the API, just clone the repo, cd into it, and run docker-compose up. 

```console
$ git clone https://github.com/GabrielHenaut/Adonis-API.git 
$ cd Adonis-API
```

The API will be running on localhost:3333. After that you need the /api. for example: 


```
localhost:3333/api/users
```

# Routes

You can use the postman collection (Sesa-challenge.postman_collection.json) to test the routes.

## Users

---
### GET /users (private route)

Returns all users in the database.

---
### GET /users/:id (private route)

Returns a single user with the given id.

---
### POST /users/register

Creates a new user. The body must contain the following fields:

```json
{
	"username": "username",
	"email": "email",
	"password": "password",
	"password_confirmation": "password_confirmation"
}
```

---
### POST /users/login

Logs in a user. The body must contain the following fields:

```json
{
	"email": "email",
	"password": "password"
}
```

---
### PUT /users/:id (private route)

Updates a user with the given id. The body must contain the following fields:

```json
{
	"username": "username",
	"email": "email",
	"password": "password"
}
```

---
### DELETE /users/:id (private route)

Deletes a user with the given id.

## Products

---
### GET /products

Returns all products in the database.

---
### GET /products/:id

Returns a single product with the given id.

---
### POST /products (private route)

Creates a new product. The body must contain the following fields:

```json
{
	"product_name": "name",
	"product_price": "price"
}
```

---
### PUT /products/:id (private route)

Updates a product with the given id. The body must contain the following fields:

```json
{
	"product_name": "name",
	"product_price": "price"
}
```

---
### DELETE /products/:id (private route)

Deletes a product with the given id.



