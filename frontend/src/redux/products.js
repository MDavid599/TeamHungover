const initialState = {
  products: [],
  nextId: 0
};

export const addProduct = (title, photo, price, size, link) => ({
  type: "ADD_PRODUCT",
  product: { title, photo, price, size, link }
});

export const addProducts = products => ({
  type: "ADD_PRODUCTS",
  products: products
});

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, { ...action.product, id: state.nextId }],
        nextId: state.nextId
      };
    case "ADD_PRODUCTS":
      let newId = state.nextId;
      const products = action.products.map(product => ({
        ...product,
        id: newId++
      }));
      return {
        ...state,
        products: [...state.products.slice().concat(products)],
        nextId: newId
      };
    case "CLEAR_STATE":
      return initialState;
    default:
      return state;
  }
}
