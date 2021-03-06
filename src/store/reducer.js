import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { getAllProducts } from "../api/api";

const slice = createSlice({
    name: 'main',
    initialState: {
        productList: [],
        reviews: null,
        selectedProduct: null,
        lastRefreshedTimestamp: null,
        ui: {
            loadingList: false,
            error: null
        }
    },
    reducers: {
        productListUpdated: (main, action) => {
            main.productList = action.payload;
        },
        loadingListUpdated: (main, action) => {
            main.ui.loadingList = action.payload;
        },
        selectedProductUpdated: (main, action) => {
            main.selectedProduct = action.payload;
        },
        reviewsUpdated: (main, action) => {
            main.reviews = action.payload;
        },
        lastRefreshedTimestampUpdated: (main, action) =>{
            main.lastRefreshedTimestamp = action.payload;
        },
        errorReceived: (main, action) => {
            main.ui.error = action.payload;
        }
    }
});

const {
    productListUpdated,
    loadingListUpdated,
    selectedProductUpdated,
    reviewsUpdated,
    lastRefreshedTimestampUpdated,
    errorReceived
} = slice.actions;

export default slice.reducer;


export const updateProductList = () => async (dispatch, getState) => {
    
    const lastRefreshed = getState().lastRefreshedTimestamp;
    if(lastRefreshed && moment(lastRefreshed).add(30, 'seconds') > moment()){
        return;
    }
    dispatch({type: loadingListUpdated.type, payload: true});
    getAllProducts().then((response) => {
        dispatch({type: productListUpdated.type, payload: response.data});
        dispatch({type: loadingListUpdated.type, payload: false});
    }).catch((error) => {
        dispatch({type: loadingListUpdated.type, payload: false});
        dispatch({type: errorReceived.type, payload: error});
    });
    dispatch({type: lastRefreshedTimestampUpdated.type, payload: moment().format()});
    
}

export const updateSelectedProduct = (product) => (dispatch, getState) => {
    dispatch({type: selectedProductUpdated.type, payload: product});
}

export const removeSelectedProduct = () => (dispatch, getState) => {
    dispatch({type: selectedProductUpdated.type, payload: null});
}

export const processReview = ( review ) => (dispatch, getState) => {
    const currentReviews = getState().reviews;
    if(!currentReviews) { 
        dispatch({type: reviewsUpdated.type, payload: [{...review, id: 1}]}); 
        return; 
    }
    let newReviews = currentReviews.slice();
    const index = newReviews.findIndex( currentReview => currentReview.id === review.id);

    if(index > -1) {
        newReviews.splice(index, 1);
    } else{
        const id = currentReviews.length > 0 ? parseInt(currentReviews[currentReviews.length-1].id) + 1 : 1;
        newReviews = [...currentReviews, {...review, id}];
    }
    
    dispatch({type: reviewsUpdated.type, payload: newReviews});
}