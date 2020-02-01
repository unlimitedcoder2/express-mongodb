#Example

![npm](https://img.shields.io/npm/v/express-mongodb-middleware)

```bash
$ npm install express-mongodb-middleware
```

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