# MERN APP WITH KUBERNETES

Simple TODO List app with MongoDB + React + Express + NodeJS

## Installation

In both /client and /server directories:

```bash
npm install
```

In /client directory: 
```bash
docker build . -t client-container:1.0.0
```

In /server directory:
```bash
docker build . -t server-container:1.0.0
```

In main directory:
```bash
kubectl apply -f ./
```

Now app is accessable through
```bash
localhost
```