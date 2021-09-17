const express = require("express");
const cors = require('cors');
const port = 8000;
const db_name = "articles";
const app = express();
require("./config/mongoose.config")(db_name);
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/articles.routes')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`));