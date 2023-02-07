const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const config = require('config')
const cors = require("cors")


const app = express();
app.use(express.urlencoded({ extended: true }))
// Bodyparser Middlewre
app.use(cors())
app.use(express.json());

// DB Config
const db = require('./Config/keys').mongoURI;

// Connect to mongo
mongoose
   .connect(db, {useNewUrlParser: true}) //Adding new mongo url parser
   .then(() => console.log('MongoDB Connected Successfully...'))
   .catch(err => console.log(err))

//Use Routes

app.use((req,_,___)=>{console.log(req.body);___()})
app.use('/api/cars', require('./Routes/api/cars'))

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
   //Set static folder
   app.use(express.static('client/build'));

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))
