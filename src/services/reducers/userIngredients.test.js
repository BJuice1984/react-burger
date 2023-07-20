import {
  ADD_USER_ITEM,
  MOVE_USER_ITEM,
  DELETE_USER_ITEM,
} from "../actions/userIngredients";
import { userIngridientsReducer } from "./userIngredients";

describe("userIngridientsReducer", () => {
  const userIngridients = {
    userItems: [],
    bun: null,
  };

  it("userIngridientsReducer", () => {
    expect(userIngridientsReducer(undefined, {})).toEqual({
      ...userIngridients,
    });
  });

  it("should handle ADD_USER_ITEM bun", () => {
    const ingredient = {
      _id: "123456",
      name: "test_Burger",
      type: "bun",
      proteins: 123,
      fat: 123,
      carbohydrates: 123,
      calories: 123,
      price: 123,
      image: "https://test/img.jpg",
      image_mobile: "https://test/img.jpg",
      image_large: "https://test/img.jpg",
    };

    const action = { type: ADD_USER_ITEM, ingredient };
    expect(userIngridientsReducer(userIngridients, action)).toEqual({
      ...userIngridients,
      bun: {
        _id: "123456",
        name: "test_Burger",
        type: "bun",
        proteins: 123,
        fat: 123,
        carbohydrates: 123,
        calories: 123,
        price: 123,
        image: "https://test/img.jpg",
        image_mobile: "https://test/img.jpg",
        image_large: "https://test/img.jpg",
      },
    });
  });

  it("should handle ADD_USER_ITEM NOT_bun", () => {
    const ingredient = {
      _id: "123456",
      name: "test_Burger",
      type: "NOT_bun",
      proteins: 123,
      fat: 123,
      carbohydrates: 123,
      calories: 123,
      price: 123,
      image: "https://test/img.jpg",
      image_mobile: "https://test/img.jpg",
      image_large: "https://test/img.jpg",
    };

    const action = { type: ADD_USER_ITEM, ingredient };
    expect(userIngridientsReducer(userIngridients, action)).toEqual({
      ...userIngridients,
      userItems: [
        {
          _id: "123456",
          name: "test_Burger",
          type: "NOT_bun",
          proteins: 123,
          fat: 123,
          carbohydrates: 123,
          calories: 123,
          price: 123,
          image: "https://test/img.jpg",
          image_mobile: "https://test/img.jpg",
          image_large: "https://test/img.jpg",
        },
      ],
    });
  });

  it("should handle MOVE_USER_ITEM", () => {
    const action = { type: MOVE_USER_ITEM, from: 1, to: 0 };
    expect(
      userIngridientsReducer(
        {
          bun: null,
          userItems: [
            {
              _id: "123456",
              name: "test_Burger",
              type: "bun",
              proteins: 123,
              fat: 123,
              carbohydrates: 123,
              calories: 123,
              price: 123,
              image: "https://test/img.jpg",
              image_mobile: "https://test/img.jpg",
              image_large: "https://test/img.jpg",
              id: "123456",
            },
            {
              _id: "654321",
              name: "test_Burger",
              type: "bun",
              proteins: 123,
              fat: 123,
              carbohydrates: 123,
              calories: 123,
              price: 123,
              image: "https://test/img.jpg",
              image_mobile: "https://test/img.jpg",
              image_large: "https://test/img.jpg",
              id: "654321",
            },
          ],
        },
        action
      )
    ).toEqual({
      bun: null,
      userItems: [
        {
          _id: "654321",
          name: "test_Burger",
          type: "bun",
          proteins: 123,
          fat: 123,
          carbohydrates: 123,
          calories: 123,
          price: 123,
          image: "https://test/img.jpg",
          image_mobile: "https://test/img.jpg",
          image_large: "https://test/img.jpg",
          id: "654321",
        },
        {
          _id: "123456",
          name: "test_Burger",
          type: "bun",
          proteins: 123,
          fat: 123,
          carbohydrates: 123,
          calories: 123,
          price: 123,
          image: "https://test/img.jpg",
          image_mobile: "https://test/img.jpg",
          image_large: "https://test/img.jpg",
          id: "123456",
        },
      ],
    });
  });

  it("should handle DELETE_USER_ITEM", () => {
    const ingredient = {
      _id: "123456",
      name: "test_Burger",
      type: "NOT_bun",
      proteins: 123,
      fat: 123,
      carbohydrates: 123,
      calories: 123,
      price: 123,
      image: "https://test/img.jpg",
      image_mobile: "https://test/img.jpg",
      image_large: "https://test/img.jpg",
      id: "123456",
    };
    const action = { type: DELETE_USER_ITEM, ingredient };
    expect(
      userIngridientsReducer(
        {
          bun: null,
          userItems: [
            {
              _id: "654321",
              name: "test_Burger",
              type: "bun",
              proteins: 123,
              fat: 123,
              carbohydrates: 123,
              calories: 123,
              price: 123,
              image: "https://test/img.jpg",
              image_mobile: "https://test/img.jpg",
              image_large: "https://test/img.jpg",
              id: "654321",
            },
            {
              _id: "123456",
              name: "test_Burger",
              type: "bun",
              proteins: 123,
              fat: 123,
              carbohydrates: 123,
              calories: 123,
              price: 123,
              image: "https://test/img.jpg",
              image_mobile: "https://test/img.jpg",
              image_large: "https://test/img.jpg",
              id: "123456",
            },
          ],
        },
        action
      )
    ).toEqual({
      bun: null,
      userItems: [
        {
          _id: "654321",
          name: "test_Burger",
          type: "bun",
          proteins: 123,
          fat: 123,
          carbohydrates: 123,
          calories: 123,
          price: 123,
          image: "https://test/img.jpg",
          image_mobile: "https://test/img.jpg",
          image_large: "https://test/img.jpg",
          id: "654321",
        },
      ],
    });
  });
});
