import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview'
import NotFoundPage from '../404NotFound'
import CollectionPage from '../collection'

const ShopPage: React.FC = () => {
    const match = useRouteMatch()
    console.log(match)
    return (
        <div className='shop-page'>
            <Switch>
                <Route exact path={`${match.path}/`}>
                    <CollectionOverview />
                </Route> 
                <Route exact path={`${match.path}/:collectionId`}>
                    <CollectionPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </div>
    )
}

export default ShopPage
 