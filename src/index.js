const express           = require('express');
const bodyParser        = require('body-parser');
const cors              = require('cors');

const connectDB         = require('./config/db');

const userRoutes        = require('./routes/userRoutes');
const runBirthdayCron   = require('./services/cronJob');

const app               = express();
require('dotenv').config();

//Connect to database
connectDB();


const PORT = process.env.PORT || 5000

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  methods: ['GET', 'POST'],
  credentials: true,
}));


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/users', userRoutes);

// Start cron job
runBirthdayCron();

app.listen(PORT, ()=>{
    console.log(`B-Day Server running on port ${PORT}`)
});