*****
# How To Make Thing Work

Hi! This documentation is designed to help you set up the environment needed for the system. Please install everything listen under Installations and follow the step-by-step guide to get the program running. It's a bit long, we didn't manage to write a script for it - sorry. Best of luck!

*****

## Installations

### Frontend Requirements

First, cd to ./frontend. 
Then install the following:

- Install Node.js via `sudo apt install nodejs`
- Install React via `sudo apt install npm`
- Install React Typescript via `npm install -g typescript`

If React is missing libraries, type in the following: 

- `npm install --save react-scripts  jquery react-router-dom react-select react-big-calendar date-fns moment`
- `npm install --save typescript @types/node @types/react @types/react-dom @types/jest @types/react-router-dom @types/jquery @types/react-select @types/react-big-calendar @types/date-fns @types/moment`

### Backend Requirements

First, cd to ./backend. 
Then install the following:

- Install Python via `python manage.py runserver`
- Install Pip via `apt install python3-pip`
- Install Django via `python -m pip install Django`
- Install Django REST via `pip install djangorestframework`
- Install django-cors-headers via `python -m pip install django-cors-headers`

*****

## How to Run

1. Wipe tears off face.
2. cd to `./backend`.
3. run `python manage.py runserver`.
4. cd to `./frontend`.
5. run `npm start`.
6. Server should now be running on localhost 3000.

*****