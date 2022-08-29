const sequelize = require("../config/connection");
const { faker } = require('@faker-js/faker');
const { User, Stuff, Comment } = require('../models');


async function seedUser(number = 10){

    const models = [];

    const admin = await User.create({
        email: 'demo@beta.com',
        name: "Karen Smith",
        city: "Perth",
        password: "qwerty12345",
    });
    models.push(admin);

    // SEED USER
    for (let index = 0; index < number; index++) {

        const created = await User.create({
           email: faker.internet.email(),
           name: faker.name.fullName(),
           city: faker.address.city(),
           password: "qwertyuiop",
        });

       models.push(created);
    }
    return models;
}

async function seedStuff(userPools, number = 10){

    const models = [];

    // SEED 
    for (let index = 0; index < number; index++) {

        const created = await Stuff.create({
           user_id: faker.helpers.arrayElement(userPools).id,
           // @ts-ignore
           title: faker.music.songName(),
           // 1024 (height), 1024(width), true(randomized)
           photo_url: "https://res.cloudinary.com/judge-mystuff101/image/upload/v1661167244/Test/vhsbwm9b0w3n4gamkz6c.jpg",

           // -- Added this Part (May)
           description: faker.lorem.paragraph(),
       });

       models.push(created);
    }
    return models;
}

async function seedComment(userPools, stuffPools, number = 10){

    const models = [ User, Stuff, Comment ];

    const seedComment = [
        'Wow that is a masterpiece',
        'Comment2',
        'comments3',
    ];
    
    //seed
    for (let index = 0; index < number; index++) {

        const created = await Comment.create({
            // @ts-ignore
            user_id: faker.helpers.arrayElement(userPools).id,
            // @ts-ignore
            stuff_id: faker.helpers.arrayElement(stuffPools).id,   
            content: faker.lorem.paragraph(),
        });
        models.push(created);
        seedComment.push(created);
    }

    return models;
}

async function seed(){

    const users = await seedUser();

    const stuffs = await seedStuff(users);

    const comments = await seedComment(users, stuffs);

}

// TODO : Need to limit the character for description!!!

sequelize.sync({force: true})
    .then(seed)
    .then(() => process.exit(0));
