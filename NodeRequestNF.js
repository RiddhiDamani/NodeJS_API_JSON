// node-fetch is another hugely popular HTTP request library for Node.js
// node-fetch is a lightweight module that brings the Fetch API (window.fetch) to Node.js.” Its features include consistency with the browser-based window.fetch and native promise and async functions.


const fetch = require("node-fetch");

//import fetch from "node-fetch";

(async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const headerDate =
      res.headers && res.headers.get("date")
        ? res.headers.get("date")
        : "no response date";
    console.log("Status Code:", res.status);
    console.log("Date in Response header:", headerDate);

    const users = await res.json();
    for (const user of users) {
      console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    }
  } catch (err) {
    console.log(err.message); //can be console.error
  }
})();
