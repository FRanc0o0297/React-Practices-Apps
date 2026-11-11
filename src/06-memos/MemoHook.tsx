import { useCallback, useState } from "react";
import { MyTitle } from "./ui/MyTitle";
import { MySubtitle } from "./ui/MySubtitle";

/* handleCallMyAPI definida fuera: */

/* const handleCallMyAPI = () => {
  console.log("Llamar a mi API");
}; */

export const MemoHook = () => {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubtitle] = useState("Mundo");

  //! si definimos la función afuera del componente no necesitamos memorizarla.
  //! Debido a que al estar fuera no cambia entre re-renders,
  //! Por lo cual podemos mandar la referencia a esa función sin memorizarla.

  const handleCallMyAPI = useCallback(() => {
    console.log("llamar a mi API- ", subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2x1 font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />

      <MySubtitle subtitle={subtitle} callMyAPI={handleCallMyAPI} />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle("Hello, " + new Date().getTime())}
      >
        Cambiar título
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        /* onClick={() => setSubtitle("World, " + new Date().getTime())} */
        onClick={() => setSubtitle("World")}
      >
        Cambiar subtítulo
      </button>
    </div>
  );
};
