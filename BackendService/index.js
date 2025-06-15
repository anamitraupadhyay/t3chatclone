require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectdb = require('./config/db');
const chatRoutes = require('./routes/chatRoutes');

const PORT=process.env.PORT||8080
const App=express()

App.use(express.json())
App.use(cors({origin:"http://localhost:5173"}))

connectdb()

App.use('/api/chat', chatRoutes);

App.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

App.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})