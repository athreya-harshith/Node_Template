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
  