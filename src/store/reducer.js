import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'main',
    initialState: {
        productList: [],
        ui: {
            loadingList: false
        }
    },
    reducers: {
        productListUpdated: (main, action) => {
            main.productList = action.payload;
        },
        loadingListUpdated: (main, action) => {
            main.ui.loadingList = action.payload;
        }
    }
});

const {
    productListUpdated,
    loadingListUpdated
} = slice.actions;

export default slice.reducer;


export const updateProductList = () => (dispatch, getState) => {
    dispatch({type: loadingListUpdated.type, payload: true});
    console.log('nice');

    dispatch({type: productListUpdated.type, payload: [1,2,3]});

    setTimeout(() => {
        dispatch({type: loadingListUpdated.type, payload: false});
    }, 3000);
}