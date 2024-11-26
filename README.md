### Project Description:

<img src="https://github.com/Sefayet-Alam/Web_development_Course_Manager/blob/main/view1.png" alt="">
<img src="https://github.com/Sefayet-Alam/Web_development_Course_Manager/blob/main/view2.png" alt="">
<img src="https://github.com/Sefayet-Alam/Web_development_Course_Manager/blob/main/view3.png" alt="">
<img src="https://github.com/Sefayet-Alam/Web_development_Course_Manager/blob/main/view4.png" alt="">
<img src="https://github.com/Sefayet-Alam/Web_development_Course_Manager/blob/main/view5.png" alt="">
<img src="https://github.com/Sefayet-Alam/Web_development_Course_Manager/blob/main/view6.png" alt="">

# Web development Course Manager

**Web development Course Manager** is a web application built with React for the front end and Python with Django for the back end. This application allows teachers to manage their students' projects efficiently by providing features to create, update, delete, and search for projects. Each project can have a start date, an end date, a status, and comments. This project also includes authentication. Therefore,only teachers can access and make operations on the records..</br>

## Features

- **Authentication** : Login and Sign Up features are added to make the app secure.
- **Create Projects**: Add new projects for a student with title, Student name, Student ID, student contact, start date, end date, status, and comments. 
- **Update Projects**: Modify existing project records to keep them up to date.
- **Delete Projects**: Remove projects that are no longer needed.
- **Search Projects**: Easily find projects using the search functionality on the home page.


## Technologies Used

- **Frontend**: React, HTML, CSS, Bootstrap
- **Backend**: Python, Django
- **Database**: SQLite
- **Other Tools**: VS Code, Axios

## Installation

### Prerequisites

- Node.js
- Python 3.x
- Django


### How to initialize:
 Clone the repository:
    ```bash
    git clone https://github.com/Sefayet-Alam/Competitive-Programming-Resources.git
    cd Project_Manager
    ```
->> BACKEND: </br>
  ```bash
    cd  BACKEND
    python -m pip install django
    venv\Scripts\activate 
    pip install djangorestframework
    pip install django-cors-headers
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver
  ```

    name: AdminUser : </br>
    email: sefayetalam14@gmail.com : </br>
    pass: 12345 : </br>

->> in another terminal: : </br>
```bash
    cd frontend 
    npm install -g npm

    npm i react-router-dom
    npm install @mui/material @emotion/react @emotion/styled
    npm install @mui/material @emotion/react @emotion/styled
    npm install react-hook-form
    npm install @mui/x-date-pickers
    npm install dayjs
    npm install axios
    npm install material-react-table
    npm install @hookform/resolvers yup
    npm start
```

    - CTRL+C to exit/stop server
The application should now be running locally. You can access it by navigating to `http://localhost:3000` in your web browser.

## Usage

- To create a project, navigate to the "Create Project" page and fill in the required fields.
- To update or delete a project, click on the respective project from the project list on the home page.
- Use the search bar on the home page to find specific projects.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.


## Contact

For any inquiries or feedback, feel free to contact:
email: sefayetalam14@gmail.com

---

Happy Project Managing!</br>
