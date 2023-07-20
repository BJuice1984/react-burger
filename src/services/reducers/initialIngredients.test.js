import {
  GET_ITEM_FAILED,
  GET_ITEM_SUCCESS,
  GET_ITEM_REQUEST,
} from "../actions/initialIngredients";
import { initialIngridientsReducer } from "./initialIngredients";

describe("initialIngridientsReducer", () => {
  const initialIngridients = {
    items: [],
    itemsRequest: false,
    itemsFailed: false,
  };

  it("initialIngridientsReducer", () => {
    expect(initialIngridientsReducer(undefined, {})).toEqual({
      ...initialIngridients,
    });
  });

  it("should handle GET_ITEM_REQUEST", () => {
    const action = { type: GET_ITEM_REQUEST };
    expect(initialIngridientsReducer(initialIngridients, action)).toEqual({
      ...initialIngridients,
      itemsRequest: true,
    });
  });

  it("should handle GET_ITEM_SUCCESS", () => {
    const items = [
      {
        _id: "123456",
        name: "test_Burger",
        type: "test_bun",
        proteins: 123,
        fat: 123,
        carbohydrates: 123,
        calories: 123,
        price: 123,
        image: "https://test/img.jpg",
        image_mobile: "https://test/img.jpg",
        image_large: "https://test/img.jpg",
      },
      {
        _id: "123456",
        name: "test_Burger",
        type: "test_bun",
        proteins: 123,
        fat: 123,
        carbohydrates: 123,
        calories: 123,
        price: 123,
        image: "https://test/img.jpg",
        image_mobile: "https://test/img.jpg",
        image_large: "https://test/img.jpg",
      },
    ];
    const action = { type: GET_ITEM_SUCCESS, items };
    expect(initialIngridientsReducer(initialIngridients, action)).toEqual({
      ...initialIngridients,
      items: [
        {
          _id: "123456",
          name: "test_Burger",
          type: "test_bun",
          proteins: 123,
          fat: 123,
          carbohydrates: 123,
          calories: 123,
          price: 123,
          image: "https://test/img.jpg",
          image_mobile: "https://test/img.jpg",
          image_large: "https://test/img.jpg",
        },
        {
          _id: "123456",
          name: "test_Burger",
          type: "test_bun",
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
      itemsRequest: false,
      itemsFailed: false,
    });
  });

  it("should handle GET_ITEM_FAILED", () => {
    const items = {
      items: [],
      itemsRequest: false,
      itemsFailed: true,
    };
    const action = { type: GET_ITEM_FAILED, items };
    expect(initialIngridientsReducer(initialIngridients, action)).toEqual({
      ...initialIngridients,
      itemsFailed: true,
    });
  });
});
