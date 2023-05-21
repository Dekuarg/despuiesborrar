import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import router from './routes/routes.js';
import { PORT } from './config.js';


const app = express();
app.use(cors())
app.use(express.json())
app.use('/stock',router)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB!!!')
} catch (error) {
    console.log('El error es: ,${error}')
}
 app.get('/',(req,res) => {res.send('HOLA MUNDO')})

app.listen(PORT,()=>{console.log('server up running in http://localhost:8000/')} )