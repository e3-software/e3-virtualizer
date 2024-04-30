# Getting Started
## Code
Download the repo.

Install dependencies
```bash
npm install
```

You'll need a .env file which will not be committed to the repo since it contains secrets. Get that from a coworker.

## Database
[Here is a great article] (https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)
install postgres for development
```bash
brew install postgresql
```

Ensure it runs on startup (if you want)
```bash
brew services start postgresql@14
```

create the development user and database
```bash
createuser local_dev --createdb
createdb e3_virtualizer -U local_dev
```

push the schema to your database
```bash
npx prisma db push
```

run the seeder
```bash
node seed.mjs
```

view the data in app OR 
```bash 
npx prisma studio
```

## Creating and running migrations.
Migrations will be automatically run in production environment.
To Create a new migration, change schema.prisma then run
```bash
npx prisma migrate dev --name {some name for the migration}
```
View the migration at prisma/migrations/...

##Creating a User
You'll need a clerk user so lets create  on of those first. 
After a clerk user is created. Copy the user id.
Navigate to seed.mjs and add the new user with the user id.