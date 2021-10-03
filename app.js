const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
//const logger = require("./config/logsConfig");
const swaggerJsDoc = require("swagger-jsdoc");
const db = require("./infrastructure/postgresDB");
const dotenv = require("dotenv");
//routes
const employeesRoute = require("./routes/employeeRoutes");



if (process.env.NODE_ENV !== "production") {
    dotenv.config();
};

const app = express();
db.initPoolDB();
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});


//app.use(logger.middleware);
app.get("/", (request, response) => {
    response.json({ info: "Develop Module service is running..." });
});

//cofig Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Desarrollo de modulo de servicios de prueba BdB',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


/* Routes middleware */
app.use(employeesRoute);


app.use(function (req, res, next) {
    res.status(404).send("Sorry, can't find that!");
});

/* Start the server */
var server = app.listen(process.env.PORT || 8080, () => {
    console.log(`The serve starts at  http://localhost:${process.env.PORT}`);
});

process.on("SIGTERM", () => {
    db.endPoolDB();
    console.info("SIGTERM signal received.");
    server.close();
});

process.on("SIGINT", () => {
    db.endPoolDB();
    console.info("SIGINT signal received.");
    server.close();
});