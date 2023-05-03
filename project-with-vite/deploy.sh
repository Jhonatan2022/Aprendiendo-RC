# Este archivo nos ayudara a hacer deploy de nuestro proyecto en github pages
# Para intalar las dependencias del proyecto ejecutamos el siguiente comando
# npm install package.json


# Set -e nos ayuda a que si hay un error en el script se detenga
set -e


# Construimos nuestro proyecto con vite y lo guardamos en la carpeta dist
npm run build


# Nos movemos a la carpeta dist
cd dist


# Inicializamos git y hacemos commit de nuestro proyecto
git init

# Agregamos el remote de nuestro repositorio
git checkout -b main

# Agregamos solo los archivos necesarios (Los que se encuentran en dist)
git add -A

# Hacemos commit de nuestro proyecto con un mensaje
git commit -m "deploy"


# Hacemos push de nuestro proyecto a la rama gh-pages
git push -f git@github.Jhonatan2022/Aprendiendo-React main:gh-pages

# Nos movemos a la carpeta anterior
cd -