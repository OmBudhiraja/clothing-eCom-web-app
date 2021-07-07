import {createSelector, createSlice} from '@reduxjs/toolkit'
import shopData from './data'
import {RootState} from '../store'
import {memoize} from 'lodash';

const initialState = {
    collections: shopData
}

// type options = 'hats' | 'jackets' | 'sneakers' | 'mens' | 'womens' 

const ShopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {}
})

export const selectShopCollections = createSelector(
    [(state: RootState) => state.shop],
    (shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections: any) =>  Object.keys(collections).map((key: any) => collections[key] )
)

export const selectCollection = memoize((collectionUrlParam: any) => 
createSelector(
    [selectShopCollections],
    (collections: any) => collections[collectionUrlParam]
)
)
export default ShopSlice.reducer