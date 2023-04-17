# Backend-Delfosti-Challenge
Reto de la empresa Delfosti para el puesto de Desarrollador Backend


# Video Demostrativo 
```bash 
  https://drive.google.com/drive/folders/1f0qli4RWRt_2m3TdnvqWztBOmR7ZoZwG?usp=share_link
```



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

## Como un punto aparte, se puede visualizar los datos que contiene Redis ejecutando el siguiente comando siempre y cuando estemos dentro de la carpeta de nuestro proyecto, ya que este tiene instalado la libreria redis comander
``` 
reddis-commander
```


