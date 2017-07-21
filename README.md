# Lab: Chirper with AngularJS

##### I Am Bham

###### Frontend: Summer 2017

## Objectives

* Home Page
- A nice looking welcome screen that has buttons that take you to the add page and the list page

* Add Page
- Input boxes for user and message (don't need one for id, that will be generated for you on the backend)
- When you create a chirp it will make a POST request with the data, which will update the server side data.json

* List Page
- Makes a GET request for all the chirps
- Links each chirp to the single page
- Hint: pass the id of the chirp as a route parameter
- Should be able to delete each chirp and it should update on the screen

* Single Page
- Makes a GET request for a single chirp
- Has a button that allows you to delete the single chirp

## Project Structure
- client
    - app
        - app.js
        - styles.css
    - views
        - e.g. home.html
    - index.html
- package.json
- server
    - data.json
    - index.js
- .gitignore

## API Docs

GET
- /api/chirps (get all chirps)
- /api/chirps/:id (get one chirp)

POST
- /api/chirps (insert one chirp)

DELETE
- /api/chirps/:id (delete one chirp)


### Extra Credit Requirements

* If you finish early and want a challenge, find out how to make an Angular service, and make one that will handle all your requests (GET, POST, & DELETE).

* Essentially it will mean instead of having to do '$http...', you can do something like:
ChirpService.get(...) and ChirpService.delete(...), etc.

# Lab: Chirper with AngularJS Part 2

##### I Am Bham

###### Frontend: Summer 2017

## Objectives

* Style it! The whole thing needs to look clean af.

* Must have a sidebar and a navbar (they must be in your index.html)

* Must make use of all routes provided by the API

* Make it good. 

## API Docs

GET
- /api/chirps (get all chirps)
- /api/chirps/one/:id (get one chirp)
- /api/users (get all users)
- /api/chirps/user/:user (get all chirps from one user)

POST
- /api/chirps (insert one chirp)

DELETE
- /api/chirps/:id (delete one chirp)
- /api/chirps/user/:user (delete all chirps from one user)


### Extra Credit

* Make an Angular service that will handle all your requests (GET, POST, & DELETE).

* Use the Angular $resource object