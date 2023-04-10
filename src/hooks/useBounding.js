import { useRef, useState } from "react";
import { BUNS } from "../constants/constants";

function useBounding() {
  const listRef = useRef();
  const items = useRef({});
  const [nearestList, setNearestList] = useState(BUNS);

  const itemsRef = (elem) => {
    if (elem) items.current[elem.id] = elem;
  }

   const handleScroll = () => {
    for (let key in items.current) {
      const itemsCoors = items.current[key].getBoundingClientRect().top - listRef.current.getBoundingClientRect().top
      if (itemsCoors <= 0 + 100) {
        setNearestList(items.current[key].id)
      }
    }
  };

  return {
    listRef,
    nearestList,
    itemsRef,
    handleScroll
  }
}

export default useBounding;