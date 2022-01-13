// 5 ways to make HTTP requests in Node.js //
// Method 1: Standard Node.js HTTP(S) module
// As HTTPS is a standard Node.js module, there’s been no need for a package.json
const https = require("https");

https.get("https://jsonplaceholder.typicode.com/users", (res) => {
  let data = [];
  const headerDate =
    res.headers && res.headers.date ? res.headers.date : "no response date";

  console.log("Status Code:", res.statusCode);
  console.log("Date in Response header:", headerDate);

  res.on("data", (chunk) => {
    data.push(chunk);
  });

  res
    .on("end", () => {
      console.log("Response ended:");
      const users = JSON.parse(Buffer.concat(data).toString());

      //console.log(users);

      for (user of users) {
        console.log(`Got user with id: ${user.id}, name: ${user.name}`);
      }
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
});
