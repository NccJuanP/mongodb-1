
db.trabajo1.insertOne({
    "nombre" : "Juan Pablo",
    "apellido" : "Londoño Calle",
    "correo" : "juanpablolc414@gmail.com",
    "ciudad" : "Medellín",
    "país" : "Colombia",
    "salario" : 5000,
    "edad" : 21,
    "altura" : 175,
    "peso"  : 136
});

db.trabajo1.insertMany([
    {
        "nombre": "Santiago",
        "apellido": "Gutiérrez",
        "correo": "santiago.gutierrez@example.com",
        "ciudad": "Medellín",
        "país": "Colombia",
        "salario": 4800,
        "edad": 29,
        "altura": 178,
        "peso": 70
      },
      {
        "nombre": "Ana María",
        "apellido": "Ramírez",
        "correo": "anamaria.ramirez@example.com",
        "ciudad": "Bogotá",
        "país": "Colombia",
        "salario": 5200,
        "edad": 26,
        "altura": 165,
        "peso": 58
      },
      {
        "nombre": "Carlos",
        "apellido": "Hernández",
        "correo": "carlos.hernandez@example.com",
        "ciudad": "Cali",
        "país": "Colombia",
        "salario": 5100,
        "edad": 33,
        "altura": 175,
        "peso": 75
      },
      {
        "nombre": "Camila",
        "apellido": "García",
        "correo": "camila.garcia@example.com",
        "ciudad": "Cartagena",
        "país": "Colombia",
        "salario": 4900,
        "edad": 28,
        "altura": 170,
        "peso": 62
      },              
      {
        "nombre": "Mateo",
        "apellido": "Martínez",
        "correo": "mateo.martinez@example.com",
        "ciudad": "Barranquilla",
        "país": "Colombia",
        "salario": 4700,
        "edad": 30,
        "altura": 180,
        "peso": 80
      },
      {
        "nombre": "Valentina",
        "apellido": "López",
        "correo": "valentina.lopez@example.com",
        "ciudad": "Medellín",
        "país": "Colombia",
        "salario": 5400,
        "edad": 25,
        "altura": 160,
        "peso": 55
      },
      {
        "nombre": "Juan",
        "apellido": "Torres",
        "correo": "juan.torres@example.com",
        "ciudad": "Bogotá",
        "país": "Colombia",
        "salario": 5300,
        "edad": 31,
        "altura": 175,
        "peso": 72
      },      
      {
        "nombre": "Daniela",
        "apellido": "Díaz",
        "correo": "daniela.diaz@example.com",
        "ciudad": "Cali",
        "país": "Colombia",
        "salario": 5000,
        "edad": 27,
        "altura": 168,
        "peso": 60
      },
      {
        "nombre": "Sebastián",
        "apellido": "Muñoz",
        "correo": "sebastian.munoz@example.com",
        "ciudad": "Barranquilla",
        "país": "Colombia",
        "salario": 5200,
        "edad": 29,
        "altura": 172,
        "peso": 68
      },
      {
        "nombre": "Paula",
        "apellido": "Sánchez",
        "correo": "paula.sanchez@example.com",
        "ciudad": "Bucaramanga",
        "país": "Colombia",
        "salario": 4800,
        "edad": 28,
        "altura": 163,
        "peso": 57
      }     
]);

// 1. Obtener todos los usuarios que sean mayores de 18 años.
db.trabajo1.find({edad : {$gt : 18}})

// 2. Obtener todos los usuarios que sean de Londres o de París.
db.trabajo1.find({ciudad : {$in : ["París", "Londres"]}})

//3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

db.trabajo1.find({$and : [
    {salario : {$gt : 2000}},
    {edad : {$lt : 30}}
]});

//4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.

db.trabajo1.find({$and : [
    {ciudad : "España"},
    {salario : {$gt : 3000}}
]});

//5. Obtener todos los usuarios que tengan entre 25 y 35 años.

db.trabajo1.find({$and : [
    {edad : {$gte : 25}},
    {edad : {$lte : 35}}
]});

//6. Obtener a todos los usuarios que no sean de Estados Unidos.

db.trabajo1.find({país : {$ne : "Estados Unidos"}});

//7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.

db.trabajo1.find({$and : [
    {ciudad : "Medellín"},
    {$or : [
        {salario : {$gt : 2500}},
        {edad : {$gt : 30}}
    ]}
]});

//8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.trabajo1.find({$and : [
    {país : "Australia"},
    {peso : {$gt : 140}}
]});

//9. Obtener a todos los usuarios que no sean de Londres ni de París.

db.trabajo1.find({país : {$nin: ["Australia", "Paris"]}});

//10.  Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

db.trabajo1.find({$or : [
    {salario : {$lt : 2000}},
    {edad : {$gt : 40}}
]});

//11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.trabajo1.find({$and : [
    {país : "Canadá"},
    {$or : [
        {salario : {$gt : 4000}},
        {altura : {$gt : 180}}
    ]}
]});

//12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

db.trabajo1.find({$and : [
    {país : "Italia"},
    {edad : {$gte : 20}},
    {edad : {$lte : 30}}
]});

//13. Obtener todos los usuarios que no tengan un correo electrónico registrado.

db.trabajo1.find({correo : {$exists : false}});

//14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.trabajo1.find({$and : [
    {país : "Francia"},
    {salario : {$gte : 3000}},
    {salario : {$lte : 5000}}
]});

//15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.trabajo1.find({$and : [
    {país : "Brasil"},
    {$or : [
        {peso : {$lt : 120}},
        {peso : {$gt : 140}}
    ]}
]});

//16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.

db.trabajo1.find({$and : [
    {país : {$in : ["Argentina", "Chile"]}},
    {edad : {$lt : 25}}
]});

//17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.

db.trabajo1.find({$and: [
    {país : {$nin : ["España", "Mexico"]}},
    {salario : {$lt : 3000}}
]});

//18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.

db.trabajo1.find({$and : [
    {país : "Alemania"},
    {$or : [
        {salario : {$lt : 4000}},
        {edad : {$gt : 35}}
    ]}
]});

//19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.

db.trabajo1.find({$and : [
    {país : "Colombia"},
    {altura : {$lt : 170}}
]});

//20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

db.trabajo1.find({$and : [
    {país : "India"},
    {salario : {$exists : false}}
]});