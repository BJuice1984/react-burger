import { useRef, useState } from "react";


function useBounding() {
  const listRef = useRef();
  const items = useRef({});
  const [nearestList, setNearestList] = useState('');

  const itemsRef = (elem) => {
    if (elem) items.current[elem.id] = elem;
  }

  const handleScroll = () => {

    // const bunCoors = items.current['Булки'].getBoundingClientRect().top - listRef.current.getBoundingClientRect().top

    // console.log(bunCoors)

    for (let key in items.current) {
      const itemsCoors = items.current[key].getBoundingClientRect().top - listRef.current.getBoundingClientRect().top
      console.log(key , itemsCoors)
    }
  }

  return {
    listRef,
    nearestList,
    itemsRef,
    handleScroll
  }
}

export default useBounding;