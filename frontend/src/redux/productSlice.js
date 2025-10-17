import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/products'

export const fetchProducts = createAsyncThunk('products/fetch', async() => {
    const response = await axios.get(API_URL)
    return response.data
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        filtered: [],
        status: 'idle',
        error: null,
        searchTerm: '',
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
            state.filtered = state.items.filter(p =>
                p.name.toLowerCase().includes(action.payload.toLowerCase())
            )
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
                state.filtered = action.payload // initialize filtered list
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const { setSearchTerm } = productSlice.actions
export default productSlice.reducer