### Project includes:

-> CRUD application
-> Tools: Django & Pyhton as backend, React as Frontend
-> Including URLs and Migrating our databases

### inside backend:

-> install python,pip,Nodejs

init:
-> create virtual environment: python -m pip install virtualenv
-> python -m virtualenv venv
-> venv\scripts\activate
-> python -m pip install django
-> npm install -g npm
-> pip install djangorestframework
-> Create django project: django-admin startproject crud  (crud is the project name)
-> django-admin startapp api
-> settings.py add apps
-> change urls.py accroding to need
-> python manage.py makemigrations
-> python manage.py migrate
-> python manage.py runserver
-> deactivate virtual environment: venv\Scripts\deactivate


### Inside Frontend
init:
-> npx create-react-app my-app (my-app=frontend (small letters))
-> cd frontend
-> npm start

### hookup
need to install django cors headers (to make backend receive calls from different domains)

in backend:
->pip install django-cors-headers
in setting.py:
->add it to installed apps : 'corsheaders',
->add middlewares:  "corsheaders.middleware.CorsMiddleware" before"django.middleware.common.CommonMiddleware",
-> add: 
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000/', //frontend is listed in backend
]

-> install router: npm i react-router-dom

Material UI:
templates/boilerplates:
https://mui.com/material-ui/material-icons/?query=Home&selected=Home
-> npm install @mui/material @emotion/react @emotion/styled
icons:
-> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

Make migrations and create super user:
-> python manage.py makemigrations
->python manage.py migrate
-> python manage.py createsuperuser

name: AdminUser
email: sefayetalam14@gmail.com
pass: 12345


### Frontend forms:
-> use react hook forms
-> npm install react-hook-form
-> date and time picker:
npm install @mui/x-date-pickers

// Install date library (if not already installed)
npm install dayjs

AXIOS install:
->npm install axios

Material React table:
-> npm install material-react-table

React Hook form:
-> npm install @hookform/resolvers yup

### migration to vite
 