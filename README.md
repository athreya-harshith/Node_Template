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
  
------
## Setting-Up the Project Repository

* To setup a Node.js Backend Project clone this repository and run the following commands.
* Open the project folder inside the terminal.
* Go to the root directory of the cloned repo and execute the following command.
```
npm install
```
* The above commands installs all the packages mentioned in the `package.json` and the versions of the packages will be according to the ones mentioned in `package-lock.json`.
* In the root directory create a __.env__ file and add the environment variable **__PORT__**.
```
PORT=<some-free-port-available>
```
* Change the current directory to `src`  and run the following command.
```
npx sequelize init --force
```
* The `--force` option is to re-install the `config.json` in config folder , `migrations` , `models` and `seeders`.
* This finishes the initial setup.
* To run the server, execute the following command in the root directory of the project.
```
node --watch src/index.js
```
* This commands starts the server and the port number in which the server is up will be displayed in the terminal.
<hr>

## Connecting the DataBase.
* The `config.json` looks like this initially without any setup.
```json
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
* In order to connect to the database , in `development` environment, make the corresponding changes to the `development` section of `config.json`
* Fill __username__ , __password__ , __database__ in the first three fields respectively.
* Provide __host__ IP address or else use __127.0.0.1__ (localhost) if the database is in the local system.
* __dialect__ is the name of database ex : mariadb, mysql,oracledb etc..
* After setting up the required fields in the `development` environment , config.json show look similar to this.
```json
{
  "development": {
    "username": "root",
    "password": "someDbPassword",
    "database": "exampleDatabase",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
* This `config.json` contains some sensitive information regarding the project such as __database password__ , __database name__ , __database host address__ , hence this is not pushed into the **github** to hide those information.
* After setting-up the `config.json` , open the `src` directory of the project and run the following command.
```
npx sequelize db:create
```
* This command creates a new database with the name mentioned in the `development` environment of the `config.json`.
  
## Testing Server Status
* To know whether the server is working well , open the postman and send a **__GET__** request to the following route.
```route
localhost:<PORT_NUMBER>/api/v1/info
```
* This will send a response object .
```json
{
    "success": true,
    "message": "API is live",
    "error": {},
    "data": {}
}
```
* This indicates the server is up and ready to accept the requests.


![ScreenShots](https://github.com/athreya-harshith/Node_Template/blob/master/images/info_api.png)
