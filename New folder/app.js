const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
coinRoutes = require('./expressRoutes/coinRoutes');
invoiceitemRoutes = require('./expressRoutes/invoiceitemRoutes');
invoiceNumRoutes = require('./expressRoutes/invoiceNumRoutes');
invoiceSumRoutes = require('./expressRoutes/invoiceSumRoutes');
invoiceCompRoutes = require('./expressRoutes/invoiceCompRoutes');

invoiceitemMod = require('./models/InvoiceItem');
// invoiceitemMod = require('./models/NextInvoiceNumber');


// Connect To Database (NEW) But not working!!!!!!!!!! (because of secret in db.js!!!!!)
//const db = require('./config/database');
// Map global promise - get rid of warning
//mongoose.Promise = global.Promise;
// Connect to mongoose
//mongoose.connect(db.mongoURI, {
    //useMongoClient: true
//})
//.then(() => console.log('MongoDB Connected...'))
//.catch(err => console.log(err));


// Connect To Database (OLD CODE)
mongoose.connect(config.database, { useMongoClient: true});
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

const app = express();

const users = require('./routes/users');

// Port Number
// const port = process.env.PORT || 8080;
const port = process.env.PORT || 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/coins', coinRoutes);
app.use('/invoiceitems', invoiceitemRoutes);
app.use('/NextInvoiceNum', invoiceNumRoutes);
app.use('/Invoicesummary', invoiceSumRoutes);
app.use('/Invoicecompany', invoiceCompRoutes);

// app.use('/coins', coins);

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});