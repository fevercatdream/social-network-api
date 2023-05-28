# Social Network API

## Description

Build an API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list using express.js and mongoose.

### User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

A step-by-step description of how to get the development environment running.

Use the following command to install the necessary packages

```
npm install (package_name@version)
```

This application uses the following:

[Express](https://www.npmjs.com/package/express/v/4.16.4) as a node js web application framework.

[Mongoose](https://www.npmjs.com/package/mongoose) Mongoose is an Object Data Modeling (ODM) library for MongoDB, supports Node.js.

To seed the application, run the following command:

```
npm run seed
```

The application will be invoked by using the following command:

```
npm start
```


## Usage

Use as a social network api to share thoughts, have a friends list, and react to friends thoughts.

### Screencastify Demo
https://drive.google.com/file/d/1h44DcTlLrRSPobondBwmIJmCHSU9WCC8/view?usp=sharing


## Credits

Tutor: Doug Kumagai:
<br />
https://www.linkedin.com/in/doug-kumagai/
<br />
https://github.com/ndesmic
<br />

mdn web docs: https://developer.mozilla.org/en-US/

Markdown License badges: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

shields.io: https://shields.io/

Insomnia: https://insomnia.rest/

Express: https://www.npmjs.com/package/express/v/4.16.4

MongoDB docs: https://www.mongodb.com/docs/manual/

Mongoose: https://www.npmjs.com/package/mongoose

Mongoose docs: https://mongoosejs.com/docs/guide.html


## License

Please refer to the LICENSE in the repo.

---

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



