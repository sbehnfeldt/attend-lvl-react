# Developer Notes

## Scaffolding

Created project and scaffolding by:

```shell
composer create-project laravel/laravel attend-lvl
cd attend-lvl
composer require laravel/breeze
php artisan breeze:install react
npm i
git init .
```

## Cloning
To clone to a new dev environment:
```shell
git clone https://github.com/sbehnfeldt/attend-lvl-react.git
cd attend-lvl-react
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate:fresh --seed
```

Seeding creates, among other things, the "users" table and a single user with a username of "test@example.com"
and a password of "password".

## Styling

Let's start getting rid of Tailwind:

```shell
npm i node-sass
mkdir resources/sass
```

Add npm scripts to package.json for compiling SASS

```json
{
    "sass:compile": "node-sass resources/sass/main.scss public/style.css",
    "sass:watch": "node-sass resources/sass/main.scss public/style.css -w"
}
```

Generate the Classroom model and all other associated classes:

```php
php artisan make:model -a Classroom
```

- Edit the migration
- Run the migration `php artisan migrate`
- Define the Classroom seeding in `ClassroomFactory::definition()`
- Update `DatabaseSeeder::run()` to include the Classroom seeding

Import Material Design components

```shell
npm install @mui/material @emotion/react @emotion/styled
```
