# express-mongodb-middleware

![npm](https://img.shields.io/npm/v/express-mongodb-middleware) [![GitHub license](https://img.shields.io/github/license/unlimitedcoder2/express-mongodb.svg)](https://github.com/unlimitedcoder2/express-mongodb/blob/master/LICENSE.md) [![GitHub stars](https://img.shields.io/github/stars/unlimitedcoder2/express-mongodb.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/unlimitedcoder2/express-mongodb/stargazers/)


```bash
npm install express-mongodb-middleware
```

## Example

```js
import express from "express";
import mongodb from "mongodb";
import expressMongo from "express-mongodb-middleware";

const app = express();

const db = new mongodb.MongoClient();

app.use(expressMongo(db));

app.get("/", (req, res) => {
    const database = req.db;
    // Use the connected MongoClient here.
});

app.listen(3000, () => console.log("Listening!"));


```
