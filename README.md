TaskSphere 🌀
TaskSphere es una aplicación web colaborativa para la gestión de tareas, diseñada para que los equipos puedan organizar, 
asignar y realizar seguimiento de sus proyectos de manera eficiente. Construida con tecnologías modernas
como Node.js, Express, NestJS, y GraphQL, TaskSphere ofrece una experiencia de usuario segura y flexible.

Características principales ✨
📋 Gestión de tareas: Crear, actualizar, y eliminar tareas.
👥 Colaboración en equipo: Permite que múltiples usuarios trabajen juntos en proyectos.
🔒 Autenticación y autorización: Sistema de inicio de sesión seguro utilizando JWT.
⚙️ Actualización de perfiles: Cada usuario puede editar su información personal.
🚀 API GraphQL: Proporciona un backend potente y flexible para las consultas y mutaciones.

Tecnologías utilizadas 🛠️
Backend:
Node.js: Entorno de ejecución para construir aplicaciones rápidas y escalables.
Express: Framework minimalista para el desarrollo del servidor.
NestJS: Framework progresivo para construir aplicaciones modulares y organizadas.
GraphQL: Lenguaje de consulta para interactuar con los datos de manera flexible.
MongoDB: Base de datos NoSQL para el almacenamiento de información.
Mongoose: Librería para la modelación de datos en MongoDB.
Herramientas adicionales:
JWT (JSON Web Token): Manejo de autenticación segura.
dotenv: Para manejar variables de entorno.
Bcrypt.js: Para cifrado seguro de contraseñas.

Requisitos previos ⚙️
Asegúrate de tener las siguientes herramientas instaladas antes de comenzar:
Node.js (versión 16 o superior recomendada)
MongoDB (puedes usar una instancia local o en la nube como Atlas)
Git

Estructura del proyecto 📂
plaintext
Copy code
/project
  ├── /controllers     # Lógica de negocio (auth y perfil)
  ├── /middleware      # Middlewares como la autenticación JWT
  ├── /models          # Modelos de MongoDB (User, Task)
  ├── /routes          # Rutas para manejar las API REST y GraphQL
  ├── app.js           # Punto de entrada principal
  └── .env             # Configuración de variables de entorno

Endpoints principales 🌐
GraphQL
/graphql: Punto de entrada para las consultas y mutaciones.
Autenticación
POST /api/auth/register: Registrar un nuevo usuario.
POST /api/auth/login: Iniciar sesión y obtener un token JWT.
Perfil
GET /api/profile: Obtener información del perfil del usuario autenticado.
PUT /api/profile: Actualizar la información del perfil.

Próximas mejoras 🚀
📊 Estadísticas del proyecto: Panel de estadísticas para visualizar el progreso del equipo.
🔔 Notificaciones: Alertas para asignaciones de tareas y fechas de vencimiento.
🌍 Soporte multilingüe: Adición de idiomas para una experiencia global.

Contribuciones 🤝
Las contribuciones son bienvenidas. Si deseas contribuir, sigue estos pasos:
Haz un fork del proyecto.
Crea una nueva rama para tu funcionalidad o corrección:
bash
Copy code
git checkout -b feature/nueva-funcionalidad
Realiza tus cambios y envíalos:
bash
Copy code
git commit -m "Agregada nueva funcionalidad"
git push origin feature/nueva-funcionalidad
Abre un Pull Request en este repositorio.

Licencia 📜
Este proyecto está licenciado bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo como desees.
Consulta el archivo LICENSE para más detalles.

Contacto 📬
Autor: Elias Higuera Acosta
contactame
