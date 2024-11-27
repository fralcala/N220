### Project Name

Final Project

### Github Link

https://fralcala.github.io/N220/final-project

### Major Features

**Login Form**

- DOM references: password and username inputs
- Logic:
  - username is empty => tell user to fill in username
  - Tell user to enter valid password
    - password is empty
    - password is less than 8 characters
    - password contains no capital letters
    - password contains no numbers
- Events:
  - on login button click check login

**Dashboard**

- DOM references: username and tasks
- Logic:
  - user is logged in => show log out button
- Events
  - on log out button click log user out
  - on task click mark if task is completed

**Task Form**

- DOM references: User tasks
- Events
  - on add task button click allow user to add new task
  - on remove button click remove users task
  - on change text button click change text of user task
  - on catagory button click allow user to catagorize tasks

### Additional Features

- Tie tasks to the user signed in
- Allow users to see only tasks that they have created
