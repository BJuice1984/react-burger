import { useState } from "react";
import { getIngridients } from "../utils/IngridientsApi";

export default function useIngridients() {
  const [initialIngridients, setInitialIngridients] = useState([]);

  async function getInitialIngridients() {
    await getIngridients()
      .then((ingridients) => {
        setInitialIngridients(ingridients)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return {
    initialIngridients,
    getInitialIngridients
  }
}