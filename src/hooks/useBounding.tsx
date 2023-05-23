import { useRef, useState } from "react";
import { BUNS } from "../constants/constants";

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

  const itemsRef = (elem: HTMLLIElement) => {
    if (elem) items!.current![elem.id as Section] = elem;
  }

  const handleScroll = () => {
    const currTop = listRef.current?.getBoundingClientRect().top ?? 0 //!
    Object.values(items.current).forEach(item => {
      const itemsCoors = item.getBoundingClientRect().top - currTop
      if (itemsCoors <= 0 + 100) { 
        setNearestList(item.id)
      }
    })
  };

  return {
    listRef,
    nearestList,
    itemsRef,
    handleScroll
  }
}

export default useBounding;