## Judge My Stuff

![CC BY 4.0-license](https://img.shields.io/badge/license-CC%20BY%204.0-yellowgreen) ![Project-2](https://img.shields.io/badge/Project-2-red)

### Description
---------------------

***Judge My Stuff*** (Concept by: ![contribution](https://img.shields.io/badge/Contributed-Mark%20Edwards-green) ) is an application to allow you to share images and have your friends roast your handy work. We made this app as anti-social media advocates giving users the chance to be creative and encourage sharing disappointments. 

- We were motivated to create a fun social media app away from opintions, news articles, and general showing off of lifestyle. Allowing users to have fun and let their dark sarcastic humour out.
- We build this project to work in a agile software development team, work with github to merge conflicts, design, build and depoloy a full-stack web application.
- As a team we solved many problems. We worked on github conflicts, agile software development, using handlebars, working with a new npm package (***cloudinary*** by: ![contribution](https://img.shields.io/badge/Contributed-Sara%20Monintja-green) ), get and post routes, and deploying to Heroku.
- We learnt about how to work with agile software development, and the need to break down tasks into smaller tasks to work as a team. How cloundinary works by saving data to a cloud and allowing us to make a api request from there. Furthering our understanding of express, javascript, mysql workbench, and pushing and pulling from repositories branches.

### Table of Contents
---------------------
1. [Usage](#usage)
2. [Demo](#demo)
3. [Deployment](#deployment)
4. [Contributors](#contributors)
5. [Credits](#credits)


### Usage
```
/
└── __config__                    //--connection database
    ├── cloudinary.js
    ├── cloudinary.js
└── __controllers__               //--additional routes (optional)
    ├── upload-routes.js
└── __db__                        //--database schema name
    ├── schema.sql
└── models                        //--sequelize configuration to create tables in database
    ├── Comment.js                
    ├── index.js                  //--define database relationship 
    ├── Stuff.js               
    ├── User.js              
├── public                        //--Client-side config & to fetch data from client and converts to json    
    ├── css / images / js
├── seeders                       //--create fake data using @faker-js/faker (npm)  
    ├── seed.js       
├── utils                         //--for authentication & helpers (optional) 
    ├── auth.js    
    ├── helpers.js      
├── views                         //--for generated html using handlebar.js 
└── .eslintrc.json                //--(optional) extension for syntax beautifier
└── .gitignore                    //--ignores the certain files to push in public repo
└── package.json
└── app.js                        //--MAIN
└── README.md                     //--Cover
```

### Demo
---------------------
![Walkthrough](/public/images/judge-mystuff-walkthrough.gif)

### Deployment
---------------------
[www.judgemystuff.app](https://judgemystuff.herokuapp.com/judgemystuff/login)

### Contributors
---------------------

- ![contributor1](https://img.shields.io/badge/Contributed-Mark%20Edwards-green) https://github.com/markedwards1
- ![contributor2](https://img.shields.io/badge/Contributed-Sara%20Monintja-green) https://github.com/Sara-Monintja
- ![contributor3](https://img.shields.io/badge/Contributed-May%20Carandang-green) https://github.com/maytiara

### Credits
---------------------
To our tutors who helped us during the process of this group project.

