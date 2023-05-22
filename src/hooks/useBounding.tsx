import { useRef, useState } from "react";
import { BUNS } from "../constants/constants";

// interface IValues {
//   [value: string]: string;
// }

function useBounding() {
  const listRef = useRef<HTMLUListElement>();
    //@ts-ignore
  const items = useRef<HTMLLIElement>({});
  const [nearestList, setNearestList] = useState<string>(BUNS);

  const itemsRef = (elem: { id: string; }) => {
    //@ts-ignore
    if (elem) items!.current![elem.id] = elem;
    console.log(items.current)
  }

   const handleScroll = () => {
    for (let key in items.current) {  //@ts-ignore
      const itemsCoors = items.current[key].getBoundingClientRect().top - listRef!.current!.getBoundingClientRect().top
      if (itemsCoors <= 0 + 100) {  //@ts-ignore
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