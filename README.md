# Hooks App

## Descripción

Conjunto de aplicaciones de práctica desarrolladas con React y TypeScript, enfocadas en el aprendizaje de React Hooks. Este proyecto forma parte de mi proceso de aprendizaje de React y tiene como objetivo poner en práctica conceptos como el manejo del estado, la creación de componentes y el uso de Hooks mediante aplicaciones funcionales.

El proyecto busca reforzar el uso de los Hooks tradicionales y profundizar en la creación y composición de *custom hooks*. También explora el patrón reducer y el Hook `useReducer`, útiles para organizar estados complejos cuando una acción puede producir varios cambios relacionados.

## Mini aplicaciones

En `src/main.tsx` se encuentran listadas ocho mini aplicaciones. Actualmente, `ScrambleWords` es la que se renderiza; para probar otra, hay que habilitar su importación y componente en ese archivo.

- **HooksApp:** componente introductorio de ejemplo.
- **TrafficLight:** semáforo interactivo para practicar `useState` y el tipado de TypeScript.
- **TrafficLightWithEffect:** semáforo automático con cuenta regresiva y efectos gestionados con `useEffect`.
- **TrafficLightWithHook:** semáforo que reutiliza la lógica de temporizador y estado mediante el custom hook `useTrafficLight`.
- **PokemonPage:** consulta Pokémon y permite avanzar o retroceder entre ellos; combina `useCounter` y `usePokemonNames`.
- **FocusScreen:** ejemplo de `useRef` para acceder a un campo de texto y seleccionar su contenido.
- **TasksApp:** lista de tareas con `useReducer`, acciones para agregar, completar y eliminar tareas, persistencia en `localStorage` y validación de datos con Zod.
- **ScrambleWords:** juego de palabras desordenadas. Usa `useReducer` para manejar la partida y sus acciones, además de `useState`, `useRef` y `useEffect` para el feedback y la limpieza del temporizador.

## Temas de práctica

- `useState`, `useRef` y `useEffect`.
- Creación y composición de custom hooks.
- Patrón reducer y `useReducer`.
- Actualización y condiciones de estado en reducers.
- Efectos secundarios relacionados con el estado y con flujos gestionados por un reducer.
- Validación de esquemas con Zod.
- Persistencia del estado con `localStorage`.
- `sessionStorage` como tema de estudio; por ahora, no hay un ejemplo implementado en las aplicaciones listadas.

## Tecnologías

- React
- TypeScript
- Vite
- Zod
- Tailwind CSS

## Cómo ejecutar el proyecto

Se utiliza `pnpm` (el repositorio incluye `pnpm-lock.yaml`). Desde la raíz del proyecto:

```bash
pnpm install
pnpm dev
```

Para generar la compilación de producción o ejecutar el linter:

```bash
pnpm build
pnpm lint
```
