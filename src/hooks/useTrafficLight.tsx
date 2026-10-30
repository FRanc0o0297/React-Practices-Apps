import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

//tipado estricto para los colores
type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setlight] = useState<TrafficLightColor>("red");
  const [countdown, setcountdown] = useState(5);

  //countdown effect
  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      //llamamos el interval
      setcountdown((prev) => prev - 1);
    }, 1000);

    // cleanUp para que no se rompa todo
    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  //change light color effect
  useEffect(() => {
    if (countdown > 0) return;

    setcountdown(5);

    if (light === "red") {
      setlight("green");
      return;
    }
    if (light === "yellow") {
      setlight("red");
      return;
    }
    if (light === "green") {
      setlight("yellow");
      return;
    }
  }, [countdown, light]);

  return {
    //props
    countdown,
    light,
    colors,
    //computed/calculos
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
    //methods
  };
};
