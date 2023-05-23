import { useRef, useState } from "react";
import { BUNS, SAUCES, MAINS  } from "../constants/constants";

enum Section {
  buns = 'Булки',
  sauces = 'Соусы',
  mains = 'Начинки',
};

type TItems = {
  [key in Section]?: HTMLLIElement;
};

function useBounding() {
  const listRef = useRef<HTMLUListElement>();
  const items = useRef<TItems>({});
  const [nearestList, setNearestList] = useState<string>(BUNS);

  const itemsRef = (elem: { id: string; }) => {

    if (elem) items!.current![elem.id as Section] = elem;
    //@ts-ignore
    console.log(items)
  }

   const handleScroll = () => {
    for (let key in items.current) { 
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