import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

// to start the server type in terminal npm run dev

dotenv.config()

connectDB()

const app = express()

// Allowed JSON Data in the request body
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Done Deals API is running...')
})

app.use('/api/users', userRoutes)

app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 9000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
