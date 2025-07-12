import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import userRouter from './routes/userRouter.js'

// App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()
// Middleware
app.use(express.json())        
app.use(cors())                

// API Route
app.get('/', (req, res) => {
  res.send("API Working for bgRemoval")
  app.use('/api/user',userRouter)
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
})
