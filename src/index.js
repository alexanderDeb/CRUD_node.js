const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();
const useRoutes = require("./routes/user")


const app = express();
const port =process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use('/api', useRoutes);

// Routes
app.get('/',(req, res)=>{
    res.send('Bienvenido al API')
})

// conection to mongodb
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log(' Usted A Ingresado A La Base De Datos Exitosamente '))
.catch((e)=>console.log(' Ha Surgido Un Error En La Coneccion Con La Base De Datos ' + e))


app.listen(port,() => console.log(' El Servidor Inicio Correctamente Y Esta Alojado En El Puerto',port));