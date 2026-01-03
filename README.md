# Vanilla Nodejs RestFul CRUD API Project | No Framework or Library
> This is vanilla Node.js CRUD API movie project.

## Routes
```bash
GET      /api/movies
POST     /api/movies
GET      /api/movies/:id
PUT      /api/movies/:id
DELETE   /api/movies/:id

```
## Installation

```bash
# Install dependencies
npm install

# Run in develpment
npm run dev

# Run in production
npm start
```
# nodejs-crud-api
## 🚀 API Endpoints (Localhost)


=> By using the Thunder Client:

Base URL:
http://localhost:5001

### 🔵 GET – Fetch movies
- Get all movies  
  GET http://localhost:5001/api/movies

- Get movie by ID  
  GET http://localhost:5001/api/movies/{id}

Example:
GET http://localhost:5001/api/movies/213976be-9157-4daa-992b-5b93f68540a6


### 🟢 POST – Create a movie
POST http://localhost:5001/api/movies

Request Body (JSON):
{
  "title": "Interstellar",
  "year": "2014",
  "genre": "Sci-Fi",
  "rating": "8.6"
}


### 🟡 PUT – Update a movie
PUT http://localhost:5001/api/movies/{id}

Example:
PUT http://localhost:5001/api/movies/213976be-9157-4daa-992b-5b93f68540a6

Request Body (JSON):
{
  "title": "Interstellar",
  "year": "2014",
  "genre": "Sci-Fi",
  "rating": "9.0"
}


### 🔴 DELETE – Delete a movie
DELETE http://localhost:5001/api/movies/{id}

Example:
DELETE http://localhost:5001/api/movies/213976be-9157-4daa-992b-5b93f68540a6
