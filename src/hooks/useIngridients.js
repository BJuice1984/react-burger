import { useState, useEffect } from "react";
import { getIngridients } from "../utils/IngridientsApi";

export default function useIngridients() {
  const [initialIngridients, setInitialIngridients] = useState([]);

  useEffect(() => {
    const getInitialIngridients = async () => {
      await getIngridients()
      .then((ingridients) => {
        setInitialIngridients(ingridients.data)
      })
      .catch(err => {
        console.log(err)
      })
    }

    getInitialIngridients();

  }, []);

  return {
    initialIngridients,
  }
}