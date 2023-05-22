import { shape, string, number, arrayOf, objectOf } from 'prop-types';

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
export const groupedIngridientsType = objectOf({
  bun: arrayOf(burgerIngredientType),
  main: arrayOf(burgerIngredientType),
  sauce: arrayOf(burgerIngredientType)
});

export const countType = number;
export const indexType = number;
export const nearestListType = string;
export const postIngridientsType = arrayOf(number);

export const emailType = string;
export const passwordType = string;
export const nameType = string;
export const tokenType = number;
export const cookieType = string;

