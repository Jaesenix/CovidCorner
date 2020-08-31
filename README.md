# Covid Corner

## Description


### User Story
```
AS A United States resident
I WANT to easily access Covid-19 data at the state and county level, see news updates, find resources relevant to my circumstances, check my symptoms, and find a testing center nearby
SO THAT I can prevent the spread of the virus
```

## Table of Contents
[Technologies](#technologies)

[Installation](#installation)

[Usage](#usage)

[Collaborators](#collaborators)

# Technologies
The front-end of the application uses React and API's from 

The back-end of the application utilizes node.js powered by express and uses sequelize to interact with a mySQL database. The application also uses a passport middleware for authenticating users.

# Installation
## For local installation
1. Run `db/schema.sql` to create your database
2. Make sure to create a `.env` file and copy the contents of `.env.example` into it.
3. In the `.env` file replace the ???? for SESSION_SECRET and set your db credentials in LOCALDB_URL
it should look something like this
```
SESSION_SECRET=SomethingBesidesKeyboardCat
LOCALDB_URL=mysql://root:dbpassword@localhost:3306/Project2Dev
```

# Usage

# Collaborators
@jacquelineadean
@jwhityoung
@jaesenix
@brownjessa

