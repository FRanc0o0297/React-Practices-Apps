# Hooks App

## Descripción

Conjunto de aplicaciones de práctica desarrolladas con React y TypeScript, enfocadas en el aprendizaje de React Hooks. Este proyecto forma parte de mi proceso de aprendizaje de React y tiene como objetivo poner en práctica conceptos como el manejo del estado, la creación de componentes y el uso de Hooks mediante aplicaciones funcionales.

El proyecto busca reforzar el uso de los Hooks tradicionales y profundizar en la creación y composición de *custom hooks*. También explora el patrón reducer y el Hook `useReducer`, útiles para organizar estados complejos cuando una acción puede producir varios cambios relacionados.

## Mini aplicaciones

En `src/main.tsx` se encuentran listados doce ejemplos. Actualmente, `ClientInformation` es el que se renderiza; para probar otro, hay que habilitar su importación y componente en ese archivo.

- **HooksApp:** componente introductorio de ejemplo.
- **TrafficLight:** semáforo interactivo para practicar `useState` y el tipado de TypeScript.
- **TrafficLightWithEffect:** semáforo automático con cuenta regresiva y efectos gestionados con `useEffect`.
- **TrafficLightWithHook:** semáforo que reutiliza la lógica de temporizador y estado mediante el custom hook `useTrafficLight`.
- **PokemonPage:** consulta Pokémon y permite avanzar o retroceder entre ellos; combina `useCounter` y `usePokemonNames`.
- **FocusScreen:** ejemplo de `useRef` para acceder a un campo de texto y seleccionar su contenido.
- **TasksApp:** lista de tareas con `useReducer`, acciones para agregar, completar y eliminar tareas, persistencia en `localStorage` y validación de datos con Zod.
- **ScrambleWords:** juego de palabras desordenadas. Usa `useReducer` para manejar la partida y sus acciones, además de `useState`, `useRef` y `useEffect` para el feedback y la limpieza del temporizador.
- **MemoHook:** demuestra la optimización de componentes con `memo` y la estabilización de una función con `useCallback`.
- **MemoCounter:** compara dos contadores y usa `useMemo` para evitar recalcular un valor costoso cuando cambia el contador que no afecta ese cálculo.
- **InstagreumApp:** demostración de comentarios con actualización optimista mediante `useOptimistic`, estado pendiente con `useTransition` y notificaciones de error.
- **ClientInformation:** obtiene información de usuario desde una promesa, la lee con `use` y muestra un estado de carga mediante `Suspense`.

## Temas de práctica

- `useState`, `useRef` y `useEffect`.
- Creación y composición de custom hooks.
- Patrón reducer y `useReducer`.
- Actualización y condiciones de estado en reducers.
- Efectos secundarios relacionados con el estado y con flujos gestionados por un reducer.
- Validación de esquemas con Zod.
- Persistencia del estado con `localStorage`.
- `sessionStorage` como tema de estudio; por ahora, no hay un ejemplo implementado en las aplicaciones listadas.
- Memoización de componentes y valores con `memo`, `useCallback` y `useMemo`. Los ejemplos de `06-memos` se incluyen como referencia por si fuera necesario trabajar en aplicaciones con versiones legacy de React, anteriores a la implementación de React Compiler; por eso se muestra el uso de estas APIs.
- Actualizaciones optimistas y transiciones con `useOptimistic` y `useTransition`.
- Lectura de promesas con `use` y manejo de carga con `Suspense`.

## Tecnologías

- React y React Compiler
- TypeScript
- Vite
- Zod
- Tailwind CSS
- Sonner para notificaciones
- Base UI y shadcn/ui para componentes de interfaz
- Lucide React para iconos

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
## Algunas capturas de las MiniApps
- TaskApp:
<img width="1875" height="926" alt="TaskApp" src="https://github.com/user-attachments/assets/b957b325-45c1-4480-8f0e-2ededa5c4e34" />

- ScrambleWordsApp:
<img width="1876" height="929" alt="ScrambleWords" src="https://github.com/user-attachments/assets/8542735d-6286-4bf0-b641-a259f58d1dc0" />

- PokemonApp:
<img width="1861" height="927" alt="PokemonApp" src="https://github.com/user-attachments/assets/8e1125dd-9011-4999-910c-b49c0c285b8f" />

- TrafficLight:
<img width="1861" height="912" alt="TrafficLight1" src="https://github.com/user-attachments/assets/9c144079-984e-42a6-9709-28ccb59734d4" />
<img width="1870" height="915" alt="TrafficLight2" src="https://github.com/user-attachments/assets/3b243551-0cce-46e9-8b9a-c60e6f8d23b4" />





