# Covid Corner

![Demo](assets/demo.gif)

## Description
Given the rapid spread of the highly contagious coronavirus, awareness has never been more important. Many sources of information available are polluted with rumors and bias. We designed Covid Corner to provide an accurate source for Covid-19 related resources rooted in facts and statistics. Through the application, users are able to view statistics, engage with data visualized through an interactive Google GeoChart, scrape the most current NYT articles related to coronavirus, and create a user account to store customized information and gain access to user-specific resources and local testing centers. 

The application incorporates a React front-end and a Node/Express back-end with a MySQL database. The application utilizes the following APIs: Google Charts, Covid Tracking Project, New York Times Article Search, and Covid Testing. The application also incorporates a self-assessment widget from Infermedica to evaluate symptoms in relation to the virus.

### User Story
```
AS A United States resident
I WANT to easily access Covid-19 data at the state and country level, see news updates, find resources relevant to my circumstances, check my symptoms, and find a testing center nearby
SO THAT I can prevent the spread of the virus
```

## Table of Contents
[Technologies](#technologies)

[Installation](#installation)

[Usage](#usage)

[Collaborators](#collaborators)

# Technologies
The front-end of the application uses React and the Material UI/ React Bootstrap libraries for styling.

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

