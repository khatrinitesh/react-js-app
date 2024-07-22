const initialState = {
    products: [
      { id: 1, name: 'Product 1', description: 'Description of product 1' },
      { id: 2, name: 'Product 2', description: 'Description of product 2' },
      { id: 3, name: 'Product 3', description: 'Description of product 3' }
      // add more products as needed
    ],
    selectedProduct: null
  };

  const productReducer = (state = initialState, action) => {
   switch (action.type) {
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
  };
  
  export default productReducer;