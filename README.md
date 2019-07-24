# React-Node-Webpack4 App Skeleton

- SSR.
- MaterialUI (Material UI styles included when SSR)
- [pug](https://pugjs.org/) for templates.
- Ready to use **Mysql** database api. (optional)

## Getting started

- Create .env file with the following variables:

```
  BASE_URL=
  HOST=
  NODE_ENV=
  PORT=
```

## Install, build and run:

- Install dependencies:

```
$ yarn
```

- Build:

```
$ yarn build:dev
$ yarn build
```

- Start server:

```
$ yarn dev
$ yarn start
```

## Include Mysql

- Add to .env file:

```
MYSQL_DB=
MYSQL_USER=
MYSQL_PASS=
MYSQL_HOST=
MYSQL_PORT=
```

- Create .my.cnf in the user home dir or in mysql config dir if possible. Add the following, complete with mysql user and pass:

```
  [mysql]
  user =
  password =

  [mysqlimport]
  user =
  password =
```

**IMPORTANT:** MYSQL_USER and MYSQL_PASS values in .env file must be the same as user and password in .my.cnf file.
