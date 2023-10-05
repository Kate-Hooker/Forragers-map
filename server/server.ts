import cors from 'cors'
import * as Path from 'node:path'
import * as db from './db/db.ts'

import express from 'express'

const server = express()
server.use(express.json())

server.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173']
  }))

server.use(express.static(Path.resolve('public')))
if (process.env.NODE_ENV === 'production') {
  
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

server.get('/', async (req, res) => {
  try {
    const markers = await db.getAllMarkers()
    res.json(markers)
  } catch (e) {
    console.error(e)
    res.status(500).send('Server failure')
  }
})

server.post('/', async (req, res) => {
  const newMarkerData = req.body
  try {
    const addedMarker = await db.addNewMarker(newMarkerData)
    res.status(200).send(addedMarker)
  } catch (e) {
    console.error(e)
    res.status(500).send('Server failure')
  }
})

export default server
