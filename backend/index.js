const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
require("dotenv").config();

const flatController = require("./controllers/flat.controller");
const ownerController = require("./controllers/owner.controller");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", flatController);
app.use("/", ownerController);

app.listen(PORT, async function () {
  try {
    await connect();
    console.log("listening on port 8000");
  } catch (e) {
    console.log(e.message);
  }
});

// console.log("server at running on port 7000")


// const express = require("express");
// const cors = require("cors");
// const flatController = require('./controllers/flat.controller');
// const residentController = require('./controllers/residents.controller');


// const app = express();

// app.use(cors())
// app.use(express.json());


// app.use("/flat",flatController);
// app.use("/resident",residentController);
 
// module.exports = app