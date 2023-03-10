import { shape, string, number, arrayOf } from 'prop-types';

export const burgerIngredientType = shape({
    _id: string.isRequired,
    name: string.isRequired,
    type: string.isRequired,
    proteins: number.isRequired,
    fat: number.isRequired,
    carbohydrates: number.isRequired,
    calories: number.isRequired,
    price: number.isRequired,
    image: string.isRequired,
    image_mobile: string.isRequired,
    image_large: string.isRequired,
    __v: number
  });

export const burgerIngredientArrayType = arrayOf(burgerIngredientType);

