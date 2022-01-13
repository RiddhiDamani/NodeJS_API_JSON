// Got - Popular http request library for node.js
// Human friendly and powerful http request
// features promise based api
// currently most popular http client for nodejs with over 19 million downloads per week.

//import got from "got";
const got = require("got");

got
  .get("https://jsonplaceholder.typicode.com/users", { json: true })
  .then((res) => {
    const headerDate =
      res.headers && res.headers.date ? res.headers.date : "no response date";
    console.log("Status Code:", res.statusCode);
    console.log("Date in Response header:", headerDate);

    const users = res.body;
    for (let user of users) {
      console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    }
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });
