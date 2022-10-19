const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();
const useRoutes = require("./routes/user")


const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api', useRoutes);

// Routes
app.get('/',(req, res)=>{
    res.send('<div style="margin-top: 100px; margin-left:50px; margin-right:50px; border: groove 3px; padding:10px; border-radius:30px; box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);"><h1 style="text-align: center; font-family: Arial; color:#EB6969">BIENVENIDO</h1> <h4 style="font-family: Arial; text-align: center;">Acabas de acceder al CRUD desarrollado con node.js</h4> <p style="font-weight: bold;">Rutas disponibles:</p> <p>- POST , GET (api/users)</p> <p>-PUT , DELETE (api/users/:id)</p></div>')
})

// conection to mongodb
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log(' Usted A Ingresado A La Base De Datos Exitosamente '))
.catch((e)=>console.log(' Ha Surgido Un Error En La Coneccion Con La Base De Datos ' + e))


app.listen(port,() => console.log(' El Servidor Inicio Correctamente Y Esta Alojado En El Puerto',port));