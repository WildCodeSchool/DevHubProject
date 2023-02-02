# API DevHub Project

## Description

Bienvenue dans la documentation de notre API RESTful pour notre base de données de gestion de projets. Cette API vous permet de créer, lire, mettre à jour et supprimer des informations relatives aux utilisateurs, aux projets et aux tâches. Elle est construite en utilisant les normes REST et est accessible via des requêtes HTTP standard. Les données sont retournées au format JSON pour une utilisation facile dans n'importe quelle application ou site web. Dans les sections suivantes, nous allons détailler les différentes fonctionnalités et routes de l'API ainsi que les exemples de requêtes et de réponses.

## Endpoints :

**user :**

- Get all users : **_GET /user_**
- Get user by user ID : **_GET /user/:id_**
- Create user : **_POST /user_**
- Update user by user ID: **_PUT /user/:id_**
- Delete user by user ID: **_DELETE /user/:id_**

**note:**

- Get all notes : **_GET /note_**
- Get note by ID : **_GET /note/:id_**
- Create note : **_POST /note_**
- Update note : **_PUT /note/:id_**
- Delete note : **_DELETE /note/:id_**

**note_user:**

- Get notes by user ID : **_GET /note_user/:id_**

**message :**

- Récupérer tous les messages : **_GET /message_**
- Récupérer tous les messages par ID user: **\_GET /message/:id**
- Créer un nouveau message : **_POST /message_**
- Supprimer un message : **_DELETE /message/:id_**

**message_project :**

- Récupérer les messages par ID projet : **_GET /message_project/:id_**

**project :**

- Récupérer tous les projets : **\_GET /project**
- Récupérer un projet par ID : **_GET /project/:id_**
- Créer un projet : **_POST /project_**
- Mettre à jour un projet : **_PUT /project/:id_**
- Supprimer un projet : **_DELETE /project/:id_**

**user_project :**

- Récupérer tous les user de tous les projets : **_GET /user_project_**
- Récupérer les user par ID project : **_GET /user_project/:id_**
- Créer un user dans liste user*project: \*\*\_POST /user_project*\*\*
- Créer un user dans project par ID projet : **_POST /user_project/:id_**
- Supprimer un user dans liste user*project : \*\*\_DELETE /user_project*\*\*
- Supprimer un user dans liste user*project par ID project : \*\*\_DELETE /user_project/:id*\*\*

**task :**

- Récupérer toutes les tâches : **_GET /task_**
- Récupérer une tâche par ID : **_GET /task/:id_**
- Créer une tâche : **_POST /task_**
- Mettre à jour une tâche : **_PUT /task/:id_**
- Supprimer une tâche : **_DELETE /task/:id_**

**task_user :**

- Récupérer une tâche par user ID : **_GET /task_user/:id_**

**task_project :**

- Récupérer toutes les tâches par ID project: **_GET /task_project/:id_**

## Exemple Utilisateurs

### Récupérer tous les utilisateurs

Requête :

```
GET /user
```

Réponse :

```
{
    "user": [
        {
            "id": 1,
            "firstname": "Adrien",
            "lastname": "Sergent",
            "email": "as@example.com",
            "phone":  "0602003252",
            "user_image": "https://example.com/images/1.jpg",
            "biography": "Je suis développeur web",
            "hashed_password": "password",
            "github_page": "https://github.com/johndoe",
            "location": "Marseille"
        },
        {
            "id": 2,
            "firstname": "Jane",
            "lastname": "Smith",
            "email": "janesmith@example.com",
            "phone":  "0602003562",
            "user_image": "https://example.com/images/2.jpg",
            "biography": "Je suis développeur mobile",
            "hashed_password": "password",
            "github_page": "https://github.com/janesmith",
            "location": "New york"
        }
    ]
}
```

### Récupérer un utilisateur par son ID

Requête :

```
GET /user/:id
```

Réponse :

```
{
    "id": 1,
            "firstname": "Adrien",
            "lastname": "Sergent",
            "email": "as@example.com",
            "phone":  "0602003252",
            "user_image": "https://example.com/images/1.jpg",
            "biography": "Je suis développeur web",
            "hashed_password": "password",
            "github_page": "https://github.com/johndoe",
            "location": "Marseille"
}
```

### Ajouter un utilisateur

Requête :

```
POST /user
```

Avec un corps de requête :

```
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@email.com",
  "phone":  "0602003252",
  "biography": "A software developer with 5 years of experience.",
  "user_image": "image_data_as_a_blob",
  "hashed_password": "password_hash",
  "github_page": "https://github.com/johndoe",
  "location": "Nantes"
}
```

### Mise à jour d'un utilisateur

Requête :

```
PUT https://example.com/api/user/42

Body :
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "phone":  "0603563252",
    "biography": "A software developer with 10 years of experience.",
    "user_image": "https://example.com/images/johndoe.jpg",
    "hashed_password": "mysecretpassword",
    "github_page": "https://github.com/johndoe",
    "location": "Lyon"
}
```

Avec un corps de requête :

```
HTTP/1.1 200 OK

Body :
{
    "id": 42,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "phone":  "0602003252",
    "biography": "A software developer with 10 years of experience.",
    "user_image": "https://example.com/images/johndoe.jpg",
    "hashed_password": "mysecretpassword",
    "github_page": "https://github.com/johndoe",
    "location": "Lyon"
}
```

### Effacer un utilisateur

Requête :

```
DELETE https://api.example.com/user/42
```

Avec un corps de requête :

```
HTTP/1.1 200 OK
```

## Exemple Projects

### Récupérer un project by ID

Requête :

```
GET /project/:id
```

Réponse :

```
{
    "project": [
        {
            "id": 1,
            "project_name": "DevHub Project",
            "state" : "in progress",
            "description" :"application de gestion de projet",
            "project_start_date": "12/05/2013",
            "project_end_date": "31/07/2013",
            "project_manager" : "Coco Asticot",
            "progress" : 50"%"
    ]
}
```

## Exemple Task

### Récupérer une tâche by ID

Requête :

```
GET /task/:id
```

Réponse :

```
{
    "task": [
        {
            "id": 1,
            "name": "Conception BDD",
            "task_start_date": "12/05/2013",
            "task_end_date": "31/07/2013",
            "description" :"creation du bulle",
            "state" : "in progress",
            "progress" : 50"%",
            "type" : "modelisation bdd",
            "user_id" : 3
    ]
}
```

## Gestion des erreurs

Pour la gestion des erreurs, l'API doit retourner le maximum d'informations pour que le développeur puisse comprendre l'erreur et effectuer une correction mais également suffisament d'informations pour que le développeur puisse les utiliser dans son programme pour retourner les problèmes fonctionnels à l'utilisateur final.

Par exemple dans une API Rest, il est important que les différents cas d'erreur soit explicités:

```
400 - BadRequest: The request is malformed.
404 - NotFound: The resource backup can't be found
401 - Unauthorized: The user is not authentified.
403 - Forbidden: The user is not authorized to access to the resource backup.
```

## Gestion des filtres par URL

à faire

## Typage

à faire
