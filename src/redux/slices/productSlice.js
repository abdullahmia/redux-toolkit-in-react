import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        status: STATUSES.IDLE
    },
    reducers: {
        // setProducts(state, action) {
        //     // do not call network request here directly

        //     // use thunk function for network request
        //     state.products = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state, action) => {
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.products = action.payload;
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.status = STATUSES.ERROR;
        })
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;


// Thunk
export const fetchProduct = createAsyncThunk('products/fetch', async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
}) 


// export function fetchProduct() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch("https://fakestoreapi.com/products");
//             const products = await res.json();
//             dispatch(setProducts(products));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }