//objetivo: crar una API 

//1. crear un objeto express

const express=require('express');



//2. crar un objeto que represente nuestra aplicacion

const app= express();

app.use(express.json());


app.use( function (req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-type");
    next();
}
)

//3. crear un servicio para escuchar peticiones

//Definir los entry point de la API
// definir la ruta (la url) en donde va responder nuestra API
//http://localhost:3000/ruta

app.post(
    '/sumar',
    (req, res) =>{

        // To Do: Aqui va el procesesamiento de la petición a esta ruta
        console.log("Alguien  está conectandose a esta ruta!!");
        const {numero_1, numero_2}= req.body;
        const resultado=parseFloat(numero_1)+parseFloat(numero_2);
        res.json(resultado);
        res.json(req.body);

    }

);

app.post(
    '/restar',
    (req, res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=numero_1-numero_2;
        res.json(resultado);

    }
);

app.post(
    '/api/dividir',
    (req, res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=numero_1/numero_2;
        res.json(resultado);
    }
)

app.post(
    '/api/multiplicar',
    (req, res)=>{

        const {numero_1, numero_2}= req.body;
        const resultado=numero_1*numero_2;
        res.json(resultado)
    }



)



app.listen(
    3025,
    ()=>{
        console.log("Servidor ejecutandose en el puerto 3009");
    }
); 

