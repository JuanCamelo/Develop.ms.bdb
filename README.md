## develop.MS.DDB
Para poder ejecutar el servicio en un ambiente local debe recrearse la DB cuyos scripts se encuentran en el repositorio

El archivo .env debe incluir la siguientes variables locales para poder ejecutar el servicio. Si en sus desarrollos incluye variable adicionales, debe documentarlas en este archivo.
  - PORT= número del puerto el que se va a ejecutar. Se recomienda usar el 8080
  - HOST_DB= Host donde se encuentra la DB
  - USER_DB= usuario de la base de datos (backuser)
  - PASS_DB= contraseña base de datos /usuario
  - NAME_DB= nombre de la base de datos (BDB)
  - PORT_DB= puerto de la base de datos (5432)