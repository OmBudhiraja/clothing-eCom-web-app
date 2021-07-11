import React, {useEffect} from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview'
import WithSpinner from '../../components/with-spinner'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { fetchCollections, selectIsCollectionLoaded } from '../../redux/shop/shopSlice'
import NotFoundPage from '../404NotFound'
import CollectionPage from '../collection'


const CollectionOverviewWithPreview = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage: React.FC = () => {
    const match = useRouteMatch()
    const dispatch = useAppDispatch()
    const {isFetching} = useAppSelector(state => state.shop)
    const collectionsIsLoaded = useAppSelector(state => selectIsCollectionLoaded(state))

    useEffect(()=>{
        if(!collectionsIsLoaded) {
            dispatch(fetchCollections())
        }
    // eslint-disable-next-line
    }, [dispatch])

    return (
        <div className='shop-page'>
            <Switch>
                <Route exact path={`${match.path}/`}>
                    <CollectionOverviewWithPreview isLoading={isFetching} />
                </Route> 
                <Route exact path={`${match.path}/:collectionId`}>
                    <CollectionPageWithSpinner isLoading={!collectionsIsLoaded} />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </div>
    )
}

export default ShopPage
 