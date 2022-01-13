// Super Agent
// oldest Node.js request packages, released in April 2011.
// robust HTTP library for Node.js, SuperAgent brands itself as a “small, progressive, client-side HTTP request library and Node.js module with the same API, supporting many high-level HTTP client features.”
// offers both callback- and promise-based APIs. With a promise-based API, using async/await is syntactic sugar

import superagent from "superagent";
//const superagent = require("superagent");

(async () => {
  try {
    const res = await superagent.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const headerDate =
      res.headers && res.headers.date ? res.headers.date : "no response date";
    console.log("Status Code:", res.statusCode);
    console.log("Date in Response header:", headerDate);

    const users = res.body;
    for (const user of users) {
      console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    }
  } catch (err) {
    console.log(err.message); //can be console.error
  }
})();
