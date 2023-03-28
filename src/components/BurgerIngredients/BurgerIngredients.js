import styles from './burgerIngridients.module.css';
import { Fragment, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BurgerIngredientsCard from '../BurgerIngredientsCard/BurgerIngredientsCard';
import BurgerTab from '../BurgerTab/BurgerTab';
import { burgerIngredientArrayType, groupedIngridientsType } from '../../utils/prop-types';
import { getItems } from '../../services/actions/initialIngridients';
import { BUNS, SAUCES, MAINS } from '../../constants/constants';
import useBounding from '../../hooks/useBounding';

export default function BurgerIngredients() {

  const groupedIngridients = groupBy(useSelector(state => state.initialIngridients.items), "type");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch]);

  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      const curGroup = acc[key] ?? [];
  
      return { ...acc, [key]: [...curGroup, obj] };
    }, {});
  };

  const userIngridients = useSelector(state => state.userIngridients);

  const userIngridientsCount = useMemo(() => {
    const counter = {};
    userIngridients.userItems.forEach((item) => {
      if (!counter[item._id]) counter[item._id] = 0;
      counter[item._id]++;
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
      <h2 className={`${ styles.header } text text_type_main-large pt-10`}>Соберите бургер</h2>
      <BurgerTab nearestList={nearestList}/>
      {groupedIngridients.bun && groupedIngridients.sauce && groupedIngridients.main &&
        <Fragment>
          <ul ref={listRef} className={ styles.ingridientsListContainer } onScroll={handleScroll}>
            <li ref={itemsRef} id={BUNS} className={`${ styles.ingridientsListHeader } text text_type_main-medium`}>
              {BUNS}
              <ul className={`${ styles.ingridientsList } pt-6 pb-10`}>
                {groupedIngridients.bun.map(ingridient => 
                  <BurgerIngredientsCard
                    ingridient={ingridient}
                    key={ingridient._id}
                    count={userIngridientsCount[ingridient._id]} />)}
              </ul>
            </li>
            <li ref={itemsRef} id={SAUCES} className={`${ styles.ingridientsListHeader } text text_type_main-medium`}>
              {SAUCES}
              <ul className={`${ styles.ingridientsList } pt-6 pb-10`}>
                {groupedIngridients.sauce.map(ingridient => 
                  <BurgerIngredientsCard
                    ingridient={ingridient}
                    key={ingridient._id}
                    count={userIngridientsCount[ingridient._id]} />)}
              </ul>
            </li>
            <li ref={itemsRef} id={MAINS} className={`${ styles.ingridientsListHeader } text text_type_main-medium`}>
              {MAINS}
              <ul className={`${ styles.ingridientsList } pt-6 pb-10`}>
                {groupedIngridients.main.map(ingridient => 
                  <BurgerIngredientsCard
                    ingridient={ingridient}
                    key={ingridient._id}
                    count={userIngridientsCount[ingridient._id]} />)}
              </ul>
            </li>
          </ul>
        </Fragment>
      }
    </section>
  )
}

BurgerIngredients.propTypes = {
  userIngridients: burgerIngredientArrayType,
  groupedIngridients: groupedIngridientsType,
}