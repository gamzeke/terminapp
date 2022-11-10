# Termin-App

## Setup & Run the Springboot Backend

1. Install Java Version 18
2. Start IntelliJ
3. Open only backend folder as project
4. Click the run button

## Setup & Run the ReactJS Frontend

1. Open the frontend folder with VSCode
2. Run `npm install` to install all dependencies
3. Then, run `npm start` to run the frontend

## Setup the PostgreSQL Database

```bash
# Move to the docker folder and execute following command
docker compose up -d
```

## Build the Docker image for the Frontend

```bash
cd frontend
docker build . -t terminapp-frontend:latest
```

## Build the Docker image for the Backend

```bash
cd backend
docker build . -t terminapp-backend:latest
```

## Important

Please disable the CORS flag in the browser
