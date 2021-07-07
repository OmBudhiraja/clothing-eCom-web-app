import React, {useEffect, useState} from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview'
import WithSpinner from '../../components/with-spinner'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebaseUtils'
import { useAppDispatch } from '../../redux/hook'
import { updateCollections } from '../../redux/shop/shopSlice'
import NotFoundPage from '../404NotFound'
import CollectionPage from '../collection'


const CollectionOverviewWithPreview = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage: React.FC = () => {
    const match = useRouteMatch()
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        let unSubFromSnap;
        const collectionRef = firestore.collection('collection')
        collectionRef.onSnapshot(snap =>{
            const collections = convertCollectionsSnapshotToMap(snap)
            dispatch(updateCollections(collections))
            setIsLoading(false)
        })
    })

    return (
        <div className='shop-page'>
            <Switch>
                <Route exact path={`${match.path}/`}>
                    <CollectionOverviewWithPreview isLoading={isLoading} />
                </Route> 
                <Route exact path={`${match.path}/:collectionId`}>
                    <CollectionPageWithSpinner isLoading={isLoading} />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </div>
    )
}

export default ShopPage
 