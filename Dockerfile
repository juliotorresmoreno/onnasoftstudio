# Utiliza la imagen de Node.js 18
FROM node:18

# Crea un usuario y un grupo no privilegiados con UID y GID específicos
RUN groupadd -r appuser && useradd -r -g appuser appuser

# Establece el directorio de trabajo en /app
WORKDIR /app

# Set the HOME environment variable to /app
ENV HOME /app

# Copia los archivos de configuración de npm
COPY package*.json ./
COPY . .

# Instala npm globalmente y las dependencias del proyecto
RUN npm install -g npm@latest
RUN npm install

# Cambia la propiedad de los archivos al usuario y grupo no privilegiados
RUN chown -R appuser:appuser /app

# Expone el puerto 3000
EXPOSE 3000

# Cambia al usuario no privilegiado
USER appuser

# Comando para iniciar la aplicación
CMD ["npm", "start"]
