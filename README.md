## Node.js Project Template 

This Repository contains Template for developing backend applications using Node.js with Express.js Framework

In the Root Directory it contains src folder and other files such as package.json and package-lock.json .

package.json and package-lock.json consists of the packages thats used and versions of those packages respectively

In the root directory `src` directory consists various other directories required to implement the logic of the backend 

Below list shows the structure of the `src` directory

* `src`
    * `config`
    * `controllers`
    * `middlewares`
    * `migrations`
    * `models`
    * `repositories`
    * `routes`
    * `seeders`
    * `services`
    * `utils`
    * index.js
---
> The above directory structure follows ** _M V C_ (Model View Controller)** Architecture and it's helpful in maintaining more cleaner and segregated code
--
## 1. config

* This directory consists all the configuration files . Configuration files are used for configuration of some modules that have been used or to configure some libraries.
* `server-config.js` consists code to configure the **_dotenv_** package to efficienty make use of the environment variables.
* `logger-config.js` consists code to configure the logger using **_winston_** package.
  
## 2. controllers
* Controllers are the repository layers that communicates to `services` by calling the required functions that are present in `services` . 
* Controllers recieve the results after processing some task by `services` and structure the response and return them
  
## 3. middlewares
* Middlewares are the ones that are used to validate the incoming request.
* Middlewares can be used to check if all the requested fields are present in the request body or not.
* Middlewares are helpful in authentication 

## 4. migrations
* Migrations are used maintain the versions of the databases
* These are very helpful in maintaining different versions of the databases if the project is shared among a team
* The below command is used to apply the migrations to database.
```
npx sequelize db:migrate
```
* This command migrates all the migrations that are generated
* The cecks applied in the migrations file provides __DataBase__ level constraints.

## 5. models
* Models represents the tables in database
* Models repository contains the fields that are present in a particular table
* Moreover , some checks in the models provides __JavaScript__ level constraints
* The below command is used to generate a model.
   ```
   npx sequelize model:generate --name <name-of-model> --attributes <attribute-name>:<data-type>,.....
   ```

## 6. repositories
* Repositories contains the functions to perform database operations
* As **__SEQUELIZE__** __ORM__ is used , usually the instructions to perform database operations will be in __JavaScript__
* One can also create functions and have raw queries within them.

## 7. routes
* This directory contains all the versions of the routes 
* All the **__version 1__** routes will be under `v1`  directory
* If any updation required `v2` directory can be made use of.
* Routes are nothing but these provides the **__URL'S__** that are used to access the funtions hosted by the server
* These functions are called as **__API's__** and can be accessed using a client with various `http` methods.
  
## 8. seeders
* This directory is used to feed some initial data to a table inside the database.
* The below command is used to generate a seed file.
```
npx sequelize seed:generate --name <name-of-seed>
```
* This commands creats a seed file under `seeders` directory and to apply those seeded data into the corresponding table use the following command
```
  npx sequelize db:seed --seed <name-of-seedfile-generated> 
```

## 9. services
* This directory contains all the logical part of the server .
* This layer communicates with `repositories` to perform the database level tasks.
* All the logical part will be included in this directory.
  
## 10. utils
* The common functions that are frequently used will be placed  under `utils` directory and it's required wherever needed

## 11. index.js
* This is the starting file for the server.
* It contains codes required to setup a server.