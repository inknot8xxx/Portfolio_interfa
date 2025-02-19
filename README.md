Estructura de Componentes y Rutas
El proyecto está organizado en varios componentes dentro del directorio src/app/pages/, cada uno representando una sección del portfolio.

Componentes Principales
app.component.ts: Componente raíz que contiene la estructura base de la aplicación.
header.component.ts: Componente de la barra de navegación con enlaces a las distintas secciones.

Páginas
Cada sección del portfolio está representada por un componente:

home.component.ts: Página de inicio con una introducción.
sobre-mi.component.ts: Sección con información personal, experiencia y trayectoria.
habilidades.component.ts: Página con las habilidades en desarrollo web y ciberseguridad.
contacto.component.ts: Sección con formulario y datos de contacto.

La navegación entre estas secciones se maneja a través del módulo de enrutamiento de Angular, definiendo las rutas en app-routing.module.ts.

Personalización de Bootstrap
El proyecto utiliza Bootstrap para mejorar la apariencia y responsividad. Se han aplicado personalizaciones en styles.scss, como la modificación de colores, fuentes y espaciados, asegurando una identidad visual acorde al propósito del portfolio.

Además, se han agregado clases personalizadas para mejorar la estética de componentes como la barra de navegación, las tarjetas de presentación y los botones de acción.

Uso de Servicios y Formularios
Se ha implementado un formulario en la página de contacto que permite a los usuarios enviar mensajes. Este formulario utiliza el módulo FormsModule de Angular para la gestión de datos y validaciones básicas.

El formulario contiene campos como nombre, correo electrónico y mensaje, con validaciones para asegurar que los datos sean introducidos correctamente antes de su envío.

Para futuras mejoras, se puede integrar un servicio en Angular que gestione el envío de datos a un servidor o API externa para procesar los mensajes de contacto.