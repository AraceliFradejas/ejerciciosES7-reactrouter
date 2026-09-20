# React Router · Práctica

Versión en castellano · [English version](#english-version)

Práctica de React Router del módulo FRONTEND [REACT] del máster **Rock The Code** de [The Power Tech School](https://thepower.education/thepowermba/tech). En este ejercicio he practicado la navegación entre componentes, la creación de rutas, el uso de parámetros dinámicos y el control de las rutas que no existen.

Lo que más me ha costado entender ha sido la relación entre las rutas y los componentes: cada `Route` decide qué componente se muestra, mientras que el `Header` permite moverme entre las páginas sin recargar la aplicación. También he utilizado una ruta dinámica para comprobar cómo puedo recibir un valor de la URL y utilizarlo dentro del componente.

## Versión en castellano

### Qué hace

- `Home`, `About` y `Contact` funcionan como componentes independientes.
- `Header` contiene la navegación principal con `Link` y `NavLink`.
- La ruta `/about/:name` recibe un parámetro y lo pinta en un `h1` con `useParams`.
- `NotFound` muestra un mensaje sencillo cuando se visita una ruta que no está declarada.
- Cada página tiene su propio estilo y cambia de color para que la navegación resulte fácil de comprobar.

### Estructura

```text
src/
  App.jsx
  App.css
  components/
    Header/
      Header.jsx
      Header.css
    Home/
      Home.jsx
      Home.css
    About/
      About.jsx
      About.css
    Contact/
      Contact.jsx
      Contact.css
    NotFound/
      NotFound.jsx
      NotFound.css
  main.jsx
  index.css
```

### Tecnologías

React 19, Vite y [React Router DOM](https://reactrouter.com/).

### Instalación local

```bash
git clone https://github.com/AraceliFradejas/ejerciciosES7-reactrouter.git
cd ejerciciosES7-reactrouter
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

### Memoria del proyecto

El detalle de los requisitos cumplidos y las capturas de la app funcionando están en la [memoria del proyecto](MEMORIA.md).

### Redes sociales

[GitHub](https://github.com/AraceliFradejas) · [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/) · [X](https://x.com/AraceliFradejas) · [Medium](https://medium.com/@araceli.fradejas) · [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

### Autora

**Araceli Fradejas Muñoz** · Proyecto académico del máster Rock The Code de [The Power Tech School](https://thepower.education/thepowermba/tech).

---

## English version

[Volver a la versión en castellano](#versión-en-castellano)

React Router practice from the FRONTEND [REACT] module of the **Rock The Code** master's programme at [The Power Tech School](https://thepower.education/thepowermba/tech). In this exercise I practised navigating between components, creating routes, using dynamic parameters and handling routes that do not exist.

The part that took me the most thinking was understanding the relationship between routes and components: each `Route` decides which component is rendered, while the `Header` lets me move between pages without reloading the application. I also used a dynamic route to check how I can receive a value from the URL and use it inside the component.

### What it does

- `Home`, `About` and `Contact` work as independent components.
- `Header` contains the main navigation with `Link` and `NavLink`.
- The `/about/:name` route receives a parameter and renders it in an `h1` with `useParams`.
- `NotFound` displays a simple message when an undeclared route is visited.
- Each page has its own styling and a different colour so the navigation is easy to check.

### Local setup

```bash
git clone https://github.com/AraceliFradejas/ejerciciosES7-reactrouter.git
cd ejerciciosES7-reactrouter
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

### Project report

Requirements checklist and screenshots of the working app are in the [project report](MEMORIA.md).

### Social media

[GitHub](https://github.com/AraceliFradejas) · [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/) · [X](https://x.com/AraceliFradejas) · [Medium](https://medium.com/@araceli.fradejas) · [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

### Author

**Araceli Fradejas Muñoz** · Academic project for the Rock The Code master's programme at [The Power Tech School](https://thepower.education/thepowermba/tech).
