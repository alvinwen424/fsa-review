const User = require("./models/user")
const Page = require("./models/page")

const userInstances = [
  {
    name: "jonathan",
    email: 'jonathan@gmail.com',
  }, {
    name: "jonathan 2",
    email: 'jonathan2@gmail.com',
  }
]

const pageInstances = [
  {
    title: "first post",
    content: "hello world",
    authorId: 1,
    urlTitle:'first_post'
  }, {
    title: "second post",
    content: "hello world",
    authorId: 2,
    urlTitle:'second_post'
  },
]


User.bulkCreate(userInstances)
  .then(results => console.log(results))
  .catch(error => console.error(error));


Page.bulkCreate(pageInstances)
  .then(results => {
    console.log(results)
})
  .catch(error => console.error(error));
