
'use strict';

const app = require('./lib/server.js');
require('dotenv').config();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));