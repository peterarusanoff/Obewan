<img width="50%" alt="01" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1920px-Star_Wars_Logo.svg.png" />

## CLI app search for Star Wars characters ##
Returns

* count / resultCount

* name

* filmography

* errors



## Install ##
Please run the following in bash at the root folder

It will be necessary for you to pull and run a prepared Docker image to bring up the Socket.io backend
* You will also need a recent version of Docker installed

```bash
    docker run -p 3000:3000 clonardo/socketio-backend -d
    git clone https://github.com/peterarusanoff/Obewan.git
    cd Obewan
    npm i
```
## Run ##
Please run the following in bash at the root folder

```bash
    npm run start
```
