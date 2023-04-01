import { useState, useEffect } from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { BUNS, SAUCES, MAINS } from "../../constants/constants";
import styles from './burgerTab.module.css'

export default function BurgerTab({ nearestList }) {
  const [current, setCurrent] = useState(BUNS)

  useEffect(() => {
    if (nearestList !== current) {
      setCurrent(nearestList)
    }
  }, [current, nearestList])

  const onTabClick = (tab) => {
    setCurrent(tab);
    document.getElementById(tab).scrollIntoView({behavior: "smooth"})
  }
  return (
    <div className={`${ styles.tabContainer } pt-5 pb-10`}>
      <Tab value={BUNS} active={current === BUNS} onClick={onTabClick}>
        {BUNS}
      </Tab>
      <Tab value={SAUCES} active={current === SAUCES} onClick={onTabClick}>
        {SAUCES}
      </Tab>
      <Tab value={MAINS} active={current === MAINS} onClick={onTabClick}>
        {MAINS}
      </Tab>
    </div>
  )
}