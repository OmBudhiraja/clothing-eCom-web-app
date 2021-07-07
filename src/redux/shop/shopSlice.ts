import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import shopData from './data'
import {RootState} from '../store'
import {memoize} from 'lodash';

type ShopState = {
    collections: null | {}
}

const initialState: ShopState = {
    collections: null
}

// type options = 'hats' | 'jackets' | 'sneakers' | 'mens' | 'womens' 

const ShopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        updateCollections: (state, action: PayloadAction<object>) =>{
            state.collections = action.payload
        }
    }
})

export const selectShopCollections = createSelector(
    [(state: RootState) => state.shop],
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

export const {updateCollections} = ShopSlice.actions

export default ShopSlice.reducer