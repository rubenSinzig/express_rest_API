# Rest API

Rest API example to practice

Create a Express server that handles:

- A `GET` request endpoint at `/` as a landing page for your API. <!-- finish -->
- A `GET` request endpoint at `/user` to display all users in DB. <!-- finish -->
- A `POST` request endpoint at `/user` to add new user to DB. <!-- finish -->
- A `PUT` request endpoint at `/user/:name` to update user from DB upon their name. <!-- finish -->
- A `PATCH` request endpoint at `/user/:name` to update some user data from DB upon their name. <!-- finish -->
- A `GET` request endpoint at `/display/:name` to display one user from DB upon their name. <!-- finish -->

New user endpoint should be able to accept a JSON object like the following:

```json
{
  "userName": "steel",
  "userPass": "123pass",
  "age": "32",
  "fbw": "48",
  "toolStack": ["Js", "Html5", "Css3", "Sass"],
  "email": "contact@steel.eu"
}
```

## For the endpoint `/user` that adds new user

- Create a middleware method that will make sure the object received contains `userName`, `userPass`, `age`, `fbw` and `email`. <!-- finish -->
- Create a middleware method that will check if the user is above 18 years old <!-- NOT finish -->
- Create a middleware method that will check if the user belongs to our FBW <!-- NOT finish -->
- If all the above is true, then you should send a response with a success message <!-- NOT finish -->
- If any of the middleware fails, you should send a response with an error message that says why the user is not valid. <!-- NOT finish -->

#### EXAMPLE RESPONSES

```json
// Success case
{
  "message" : "This user is valid!"
}


// Failure
{
  "message": "We can not validate your user. They are not a member of FBW48"
}


// Other case of Failure
{
  "message": "We can not validate your user. we don't accept pp that are below 18 years of age"
}

```

## For the `/display/:name` endpoint:

- Create a middleware that makes the `firstName` starts with a capital letter. <!-- NOT finish -->
- Create a middleware that sorts the `toolStack` array alphabetically. <!-- NOT finish -->
- Create a middleware that will turn `age` and `fbw` to numbers. <!-- NOT finish -->

#### EXAMPLE RESPONSES

```json
{
  "userName": "Steel",
  "userPass": "123pass",
  "age": 32,
  "fbw": 48,
  "toolStack": ["Css3", "Html5", "Js", "Sass"],
  "email": "contact@steel.eu"
}
```

Make sure that you Organize (route, controller and module)
Ps: new our new Rest API needs new DB 😉 <!-- finish -->

Happy codding ☘️
