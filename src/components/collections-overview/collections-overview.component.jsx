import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectAllShopData} from '../../redux/shop/shop.selector'


import CollectionPreview from '../../components/collection-preview/collection-preview';
import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
          {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectAllShopData
})


export default connect(mapStateToProps)(CollectionsOverview);
