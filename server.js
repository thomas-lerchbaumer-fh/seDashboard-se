const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors');

//connect DB
connectDB();

const app = express();

app.use(cors());
// Init MIddelware
app.use(express.json({extended: false,}));

app.get('/', (req,res) => res.json({msg:"Welcome to our Keeper API"}));

//allow OPTIONS on all resources


//Define Routes

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/dashboard', require('./routes/dashboard'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));