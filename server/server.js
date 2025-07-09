import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'

// App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()
// Middleware
app.use(express.json())        
app.use(cors())                

// Test Route
app.get('/', (req, res) => {
  res.send("API Working for bgRemoval")
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
})
