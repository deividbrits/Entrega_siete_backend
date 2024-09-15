
# Backend de Aplicación Fullstack para e-commerce de Venta de Mangas

Este proyecto es parte de el sistema de evaluacion del Bootcamp de Desarrollo Fullstack de la Universidad del Desarrollo .



## Authors

- [@deividbrits](https://www.github.com/deividbrits)


## Tech Stack

Server:** Node, Express , MongoDB. 


## Variables de Entorno

Para correr este proyecto necesitaras las siguientes variables de entorno en .env file

PORT=3000

MONGODB_URI=mongodb+srv://deividbrits:090797.@mangas.edzkv.mongodb.net/ 

* esta variable debe usarse exclusivamente para fines de educación, ya que se encuentra una base de datos con los mangas disponibles para ser visualizados en el frontend. 

SECRET= <cualquiera>


## API Reference

#### Products

```http
  GET /api/products/readall
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|           | `string` |  Trae todos los mangas disponibles

#### Get Product By Id

```http
  GET /api/products/readone/:{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id del item para fetch |



#### Post item

```http
  Post /api/products/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre` `autor` `precio` `editorial` `foto`      | `string` `number` | crea un manga |

#### Edit item

```http
  Put /api/products/update/:{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre` `autor` `precio` `editorial` `foto`    | `string` | **Requerido**. Id del item para fetch |

#### Delete Item

```http
  delete /api/products/delete/:{id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|    `id`      | `string` |  Borra un manga según su ID


## Usuario 

#### Registro 

```http
  POST /api/users/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|       `username` `email` `password`    | `string` |  Registra un usuario



#### LogIn

```http
  POST /api/users/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|   `email` `password`    | `string` |  Inicia Sesión de un usuario

#### Verificación 

```http
  POST /api/users/verify
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|            | autenticación |  verifica un usuario logeado.

 

#### Editar

```http
  PUT /api/users/update/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|       `username` `email` `password`    | `string` |  edita el usuario según su ID . 




