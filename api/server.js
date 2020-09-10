const express = require('express');
const path = require('path');
const app = express();


// Visualize front on the page

/*
app.use(express.static(__dirname + '/dist/ISU-NGTU-front'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/ISU-NGTU-front/index.html'));});
app.listen(process.env.PORT || 8080);
*/

// MongoDB requests
const db = express();

const { mongoose } = require('./db/mongoose')

const bodyParser = require('body-parser');

// Load mongoose models
const { User, News } = require('./db/models')


// CORS HEADERS
db.use(bodyParser.json());

db.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

  res.header(
    'Access-Control-Expose-Headers',
    'x-access-token, x-refresh-token'
  );

  next();
});


///////////////////////
//// DB Routes
///////////////////////


//////
// User requests
//////

// Add user
db.post('/users', (req, res) => {

  let body = req.body;
  let newUser = new User(body);
  console.log(body);

  newUser.save().then(() => {
    console.log("new person saved")
  }).catch((e) => {
    res.send(e);
    console.log(e)
  });

});

// Get user by email + pass
db.get('/users/:email/:pass', (req, res) => {
  User.find({
    userEmail: req.params.email,
    password: req.params.pass
  }).then((user) => {
    res.send(user)
  })
});

// Get user by email
db.get('/users/:email', (req, res) => {
  User.find({
    userEmail: req.params.email
  }).then((user) => {
    res.send(user)
  })
});

// Get list of users
db.get('/users', (req, res) => {
  User.find({}).then((user) => {
    res.send(user)
  })
});

// Delete user
db.delete('/users/:id', (req, res) => {
  User.findOneAndRemove({
    _id: req.params.id
  }).then((removedUser) => {
    res.send(removedUser);
  });
});


//////
// News requests
//////

// Add News
db.post('/news', (req, res) => {

  let body = req.body;
  let newNews = new News(body);
  console.log(body);

  newNews.save().then(() => {
    console.log("new News saved")
  }).catch((e) => {
    res.send(e);
    console.log(e)
  });

});

// Get list of news
db.get('/news', (req, res) => {
  News.find({}).then((news) => {
    res.send(news);
  }).catch((e) => {
    res.send(e);
    console.log(e)
  });
});

// Update same news
db.patch('/news', (req, res) => {
  News.findOneAndUpdate({_id: req.body._id}, {
    $set: req.body
  }).then(() => {
    console.log(req.body);
    console.log('updated successfully');
  }).catch((e) => {
    res.send(e);
    console.log(e)
  });
});


// Delete news
db.delete('/news/:id', (req, res) => {
  News.findOneAndRemove({
    _id: req.params.id
  }).then((removedNews) => {
    res.send(removedNews);
  });
});


db.listen(3000, () => {
  console.log("Server MongoDB is listening on port 3000");
})
