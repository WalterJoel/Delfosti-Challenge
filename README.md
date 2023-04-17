# Backend-Delfosti-Challenge
Reto de la empresa Delfosti para el puesto de Desarrollador Backend


# Antes que nada se debe tener instalado y ejecutar redis ejecutando el siguiente comando
```bash 
docker run -p 6379:6379 -it redis/redis-stack-server:latest
```

## Primero se debe instalar dependencias
```bash 
npm install
```
## Luego iniciar el proyecto
```bash 
npm run dev
```
## Acceder mediante una petición GET al siguiente EndPoint, se puede utilizar Insomnia Postman, etc
``` 
http://localhost:5000/getAll
```


