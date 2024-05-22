import express from 'express'
import cors from 'cors'
import {addClient, getClient } from './supabase.js'
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
// app.use(cors({ origin: "http://localhost:3001"}))

// app.get('/v1/auth/', async (req, res) => {
//   const {data , error} = await getUser(req.body)
//   res.json(data)
// })




  app.get('/v2/auth/', async (req, res) => {
    const {data , error} = await getClient(req.body)
    res.json(data)
  })
  
  app.post('/v2/auth/', async(req, res) => {
      const {data, error} = await addClient(req.body) 
     // insert into table 
      res.json(data)
  
    })

 









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})