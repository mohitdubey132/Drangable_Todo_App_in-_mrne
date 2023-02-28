const net = require('net')
const app = require('./app')
const { createDatabase } = require('./config/database');
createDatabase();
const server = app.listen(process.env.PORT, () => {
    console.log(`web site is listening on PORT ${process.env.PORT}`)
});