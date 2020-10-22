
'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(data => console.log(data));
const app = require('./lib/server.js');
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));