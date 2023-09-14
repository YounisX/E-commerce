import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import initApp from './src/index.router.js'
import chalk from 'chalk'


//set directory dirname 
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, './config/.env') })

const app = express()
// setup port and the baseUrl
const port =  3000||process.env.PORT 
initApp(app ,express)
app.use(cors({})) //allow access from any



app.listen(process.env.PORT,()=>{
 console.log(chalk.ansi256(0).bgAnsi256(112)(`Example app listening on port  ${port} `));
}) 


