import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

// to start the server type in terminal npm run dev

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

const PORT = process.env.PORT || 9000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
