# Auth w/ React

- Using both server-side & client-side routing

## JWT

- Used to encrypt information
- We use it to encrypt the user's information that is being sent to our React App
- JWT.encode(payload, secret, algorithm)
- JWT.decode(token, secret, algorithm)

## LocalStorage

- A way to store and access information from our browser
- Does not expire
- Not very secure
  - Anybody can access local storage for a domain
- setItem(key,value)
  - adds a key-value to localStorage
- getItem(key)
  - retrievs a value, using it's key, from localStorage
- removeItem(key)
  - remove a key from localStorage
- clear()
  - clears all of localStorage

## Creating a new Rails API

- rails new name_of_app --api --database=postgresql

## User Sign Up

- A form for the User to fill out
- Send the information from that form to our back-end to create our User
- Our backend then sends the User's information to our front-end
- Our front-end stores that information and distributes it to any component that needs the User's information
