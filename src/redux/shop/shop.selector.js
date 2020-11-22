import {createSelector} from 'reselect';

const selectShopData = state => state.shopData;

export const selectAllShopData = createSelector(
    [selectShopData],
    shopData => shopData.SHOP_DATA
);