import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import GridFsStorage from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import dotenv from 'dotenv'

dotenv.config()
const { DB_URL, PORT } = process.env

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(DB_URL, (err, res) => {
   if(err) console.log(err.message)
   if(!err) console.log('MongoDB connected successfully')
})

app.listen(PORT, (err) => {
   if(err) console.log(err)
   else
      console.log(`Server connected on PORT:${PORT}`)
})