import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  Cartitems: [],
  Totalprice: 0,
  Totalquantity: 0,
};

let AddtocartReducer = (state, action) => {
  let addproduct = action.payload;
  let price = Number(addproduct.Price.replace("Rs ", "")); // convert to number

  let productExist = state.Cartitems.find(
    (item) => item.Id === addproduct.Id
  );

  if (!productExist) {
    state.Cartitems.push({ ...addproduct, quantity: 1, numericPrice: price });
  } else {
    productExist.quantity += 1;
  }

  state.Totalquantity += 1;
  state.Totalprice += price;
};

let RemovefromcartReducer = (state, action) => {
  let id = action.payload;

  let productExist = state.Cartitems.find((item) => item.Id === id);

  if (productExist) {
    state.Totalquantity -= productExist.quantity;
    state.Totalprice -= productExist.numericPrice * productExist.quantity;

    state.Cartitems = state.Cartitems.filter((item) => item.Id !== id);
  }
};

let IncrementReducer = (state, action) => {
  let id = action.payload;

  let productExist = state.Cartitems.find((item) => item.Id === id);

  if (productExist) {
    productExist.quantity += 1;
    state.Totalquantity += 1;
    state.Totalprice += productExist.numericPrice;
  }
};

let DecrementReducer = (state, action) => {
  let id = action.payload;

  let productExist = state.Cartitems.find((item) => item.Id === id);

  if (productExist && productExist.quantity > 1) {
    productExist.quantity -= 1;
    state.Totalquantity -= 1;
    state.Totalprice -= productExist.numericPrice;
  }
};

export let CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    Addtocart: AddtocartReducer,
    Removefromcart: RemovefromcartReducer,
    Increment: IncrementReducer,
    Decrement: DecrementReducer,
  },
});

export let { Addtocart, Removefromcart, Increment, Decrement } = CartSlice.actions;
export default CartSlice.reducer;
