import styles from './burgerIngridients.module.css';
import { Fragment, useMemo } from "react";
import { useSelector } from 'react-redux';
import BurgerIngredientsCard from '../BurgerIngredientsCard/BurgerIngredientsCard';
import BurgerTab from '../BurgerTab/BurgerTab';
import { BUNS, SAUCES, MAINS } from '../../constants/constants';
import useBounding from '../../hooks/useBounding';
import { getInitialIngridientsItems } from '../../services/selectors/initialIngridients';
import { getUserIngridients } from "../../services/selectors/userIngridients";
import { UserIngredientsType, IngredientsGroupedType, IngredientType } from '../../utils/types';

type CounterType = {
  [key: string]: number
}

export default function BurgerIngredients() {
  const groupedIngridients: IngredientsGroupedType = groupBy(useSelector(getInitialIngridientsItems), "type");

  function groupBy(objectArray: Array<IngredientType>, property: string) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property as keyof typeof obj];
      const curGroup = acc[key as keyof typeof acc] ?? [];
  
      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  };

  const userIngridients: UserIngredientsType = useSelector(getUserIngridients);

  const userIngridientsCount = useMemo(() => {
    const counter: CounterType = {};
    userIngridients.userItems.forEach((item) => {
      if (!counter[item._id as keyof typeof counter]) counter[item._id] = 0;
      counter[item._id as keyof typeof counter]++;
    });
    if (userIngridients.bun)
      counter[userIngridients.bun._id] = 2;

    return counter;
  }, [userIngridients]);

  const {
    listRef,
    nearestList,
    itemsRef,
    handleScroll
  } = useBounding();

  return(
    <section className={ styles.ingridients }>
      <h2 className={ styles.header }>Соберите бургер</h2>
      <BurgerTab nearestList={nearestList}/>
      {groupedIngridients.bun && groupedIngridients.sauce && groupedIngridients.main &&
        <Fragment>
          <ul ref={listRef} className={ styles.ingridientsListContainer } onScroll={handleScroll}>
            <li ref={itemsRef} id={BUNS} className={`${ styles.ingridientsListHeader } text text_type_main-medium`}>
              {BUNS}
              <ul className={`${ styles.ingridientsList } pt-6 pb-10`}>
                {groupedIngridients.bun.map(ingredient => 
                  <BurgerIngredientsCard
                    ingredient={ingredient}
                    key={ingredient._id}
                    count={userIngridientsCount[ingredient._id]} />)}
              </ul>
            </li>
            <li ref={itemsRef} id={SAUCES} className={`${ styles.ingridientsListHeader } text text_type_main-medium`}>
              {SAUCES}
              <ul className={`${ styles.ingridientsList } pt-6 pb-10`}>
                {groupedIngridients.sauce.map(ingredient => 
                  <BurgerIngredientsCard
                    ingredient={ingredient}
                    key={ingredient._id}
                    count={userIngridientsCount[ingredient._id]} />)}
              </ul>
            </li>
            <li ref={itemsRef} id={MAINS} className={`${ styles.ingridientsListHeader } text text_type_main-medium`}>
              {MAINS}
              <ul className={`${ styles.ingridientsList } pt-6 pb-10`}>
                {groupedIngridients.main.map(ingredient => 
                  <BurgerIngredientsCard
                    ingredient={ingredient}
                    key={ingredient._id}
                    count={userIngridientsCount[ingredient._id]} />)}
              </ul>
            </li>
          </ul>
        </Fragment>
      }
    </section>
  )
}
