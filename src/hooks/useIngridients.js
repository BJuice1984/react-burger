import { useState, useEffect } from "react";
import { getIngridients } from "../utils/IngridientsApi";

export default function useIngridients() {
  const [bunIngridients, setBunIngridients] = useState([]);
  const [mainIngridients, setMainIngridients] = useState([]);
  const [sauceIngridients, setSauseIngridients] = useState([]);

  useEffect(() => {
    const getInitialIngridients = async () => {
      await getIngridients()
      .then((ingridients) => {
        const groupedIngridients = groupBy(ingridients.data, "type");
        return groupedIngridients
      })
      .then((groupedIngridients) => {
        setBunIngridients(groupedIngridients.bun);
        setSauseIngridients(groupedIngridients.sauce);
        setMainIngridients(groupedIngridients.main);
      })
      .catch(err => {
        console.log(err)
      })
    }

    getInitialIngridients();

  }, []);

  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      const curGroup = acc[key] ?? [];
  
      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  }

  return {
    bunIngridients,
    sauceIngridients,
    mainIngridients,
  }
}