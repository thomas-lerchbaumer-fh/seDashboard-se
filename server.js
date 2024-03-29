const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');


//connect DB
connectDB();

const app = express();


app.use(cors());
// Init MIddelware
app.use(express.json({extended: false,}));

app.use(require('body-parser').json()); 
app.use(require('body-parser').urlencoded({ extended: true }));

app.get('/', (req,res) => res.json({msg:"Welcome to our API"}));

//allow OPTIONS on all resources


//Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/notes', require('./routes/notes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));