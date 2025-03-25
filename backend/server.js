import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'

config()

const PORT = process.env.SERVER_PORT

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.send('Server started.')
})

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
