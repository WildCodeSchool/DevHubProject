# API DevHub Project

​

## Description

​
Welcome in our API REST documentation for a management project database. This API will let you create, read, update and delete users, projects and tasks informations. It was build using REST rules and joinable by basics HTTP requests. Data are send back on JSON format for easier using in whatever Website or Applications. In next section we will show in details all API's features and roads, also some requests and responses exemples.
​

## Endpoints :

​
**user :**
​

- Get all users : **_GET /user_**
- Get user by user ID : **_GET /user/:id_**
- Create user : **_POST /user_**
- Update user by user ID: **_PUT /user/:id_**
- Delete user by user ID: **_DELETE /user/:id_**
  ​
  **note:**
  ​
- Get all notes : **_GET /note_**
- Get note by ID : **_GET /note/:id_**
- Create note : **_POST /note_**
- Update note : **_PUT /note/:id_**
- Delete note : **_DELETE /note/:id_**
  ​
  **note_user:**
  ​
- Get notes by user ID : **_GET /note_user/:id_**
  ​
  **message :**
  ​
- Get all messages : **_GET /message_**
- Create new message: **_POST /message_**
- Delete message : **_DELETE /message/:id_**
  ​
  **message_user :**
- Get all messages by user ID : **\_GET /message_user/:id**
  ​
  **message_project :**
  ​
- Get all messages by project ID : **_GET /message_project/:id_**
  ​
  **project :**
  ​
- Get all projects : **\_GET /project**
- Get project by ID : **_GET /project/:id_**
- Create project : **_POST /project_**
- Update project : **_PUT /project/:id_**
- Delete project : **_DELETE /project/:id_**
  ​
  **user_project :**
  ​
- Get all users from all projects : **_GET /user_project_**
- Get users by project ID : **_GET /user_project/:id_**
- Add user in user*project list : \*\*\_POST /user_project*\*\*
- Add user in project by project ID : **_POST /user_project/:id_**
- Delete user in user*project list : \*\*\_DELETE /user_project*\*\*
- Delete user in user*project list by project ID : \*\*\_DELETE /user_project/:id***
  ​
  **task :\*\*
  ​
- Get all tasks : **_GET /task_**
- Get task by ID : **_GET /task/:id_**
- Create new task: **_POST /task_**
- Update task : **_PUT /task/:id_**
- Delete task : **_DELETE /task/:id_**
  ​
  **task_user :**
  ​
- Get task by user ID : **_GET /task_user/:id_**
  ​
  **task_project :**
  ​
- Get all tasks by project ID: **_GET /task_project/:id_**
  ​

## Users exemple

​

### Get all users

​
Request :
​

```
GET /user
```

​
Response :
​

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

​

### GET User by ID

​
Request :
​

```
GET /user/:id
```

​
Response :
​

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

### Add user

​
Request :
​

```
POST /user
```

​
With body request :
​

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

### Update user

​
Request :
​

```
PUT https://example.com/api/user/42
​
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

​
With body request :
​

```
HTTP/1.1 200 OK
​
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

​

### Delete user

​
Request :
​

```
DELETE https://api.example.com/user/42
```

​
With body request :
​

```
HTTP/1.1 200 OK
```

## Projects exemple

​

### Get project by ID

​
Request :
​

```
GET /project/:id
```

​
Response :
​

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
            "progress" : 50
        }
    ]
}
```

## Task exemple

​

### Get task by ID

​
Request :
​

```
GET /task/:id
```

​
Response :
​

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
            "progress" : 50,
            "type" : "modelisation bdd",
            "user_id" : 3
        }
    ]
}
```

## Errors management

​
For errors management, API must return the most usefull informations with the aim of helping developer well understand error not only to fix them but also to get enough informations to return systems problems to the final user.
In case of API REST, it s really usefull to explain all the differents error cases :
​

```
400 - BadRequest: The request is malformed.
404 - NotFound: The resource backup can't be found
401 - Unauthorized: The user is not authentified.
403 - Forbidden: The user is not authorized to access to the resource backup.
```
