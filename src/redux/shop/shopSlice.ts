import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store'
import {memoize} from 'lodash';

type ShopState = {
    collections: null | {};
    isFetching: boolean;
    errorMsg : undefined | string
}

const initialState: ShopState = {
    collections: null,
    isFetching: false,
    errorMsg: undefined
}


const ShopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        fetchCollections: (state) => {
            state.isFetching = true
        },
        setCollection: (state, action: PayloadAction<object>) =>{
            state.collections = action.payload
            state.isFetching = false
        },
        setError: (state, action: PayloadAction<string>)=>{
            state.errorMsg = action.payload
        }
    },
    // extraReducers: (builder) =>{
    //     builder.addCase(fetchCollections.pending, (state)=>{
    //         state.isFetching = true
    //     })
    //     builder.addCase(fetchCollections.fulfilled, (state, action) =>{
    //         state.collections = action.payload
    //         state.isFetching = false
    //     })
    //     builder.addCase(fetchCollections.rejected, (state, action) =>{
    //         state.errorMsg = action.error.message
    //         state.isFetching = false
    //     })
    // }
})

const selectShop = (state: RootState) => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections: any) => collections ?  Object.keys(collections).map((key: any) => collections[key] ) : []
)

export const selectCollection = memoize((collectionUrlParam: any) => 
createSelector(
    [selectShopCollections],
    (collections: any) => collections ? collections[collectionUrlParam] : null
)
)


export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections

)

export const {fetchCollections, setCollection, setError} = ShopSlice.actions

export default ShopSlice.reducer