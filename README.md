# typescript-backend
Typescript seed project for developing a REST API. This project includes the base configuration for developing and running Typescript apps running over HapiJS server.

## Prerequisites
### Install Docker
* [Mac OS X](https://store.docker.com/editions/community/docker-ce-desktop-mac).
* [Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows).

## 1. Clone the project.
After installing the Docker CLI tool, now you're ready to start working with *typescript-backend* app.

### 1.1 Clone the repository.
  ```
  git clone https://github.com/sandovaledwin/typescript-backend
  ```

### 1.2 Go into the directory.
  ```
  cd typescript-backend
  ```

## 2. Creating the Docker Image.
Now, you're ready for creating the new typescript-backend Docker Image in your computer.
  ```
  docker build -t typescript-backend:8.9.1 .
  ```

## 3. Installing dependencies.
Before to run the project you must install all the node modules dependencies.
```
docker run -it --rm --name backend  -w /app -v $(pwd):/app -p 3000:3000 typescript-backend:8.9.1 npm install
```

## 4. Running the project.
```
docker run -it --rm --name backend  -w /app -v $(pwd):/app -p 3000:3000 typescript-backend:8.9.1 ts-node app.ts
```

## 5. Testing the project.
In order to test that the project is running ok, you'll need to open the next url in the browser.

### 5.1 Open in the Browser the next url.
```
http://localhost:3000
```  

## 6. Documentation.
If you want to create the documentation for all the project code, please just type the next command.
```
docker run -it --rm --name backend  -w /app -v $(pwd):/app -p 3000:3000 typescript-backend:8.9.1 typedoc --out doc/ src/ --module commonjs
```