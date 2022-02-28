import { createSelector } from 'reselect';
const selectCards = state => state.cards;

export const getCards = createSelector(
    selectCards,
    (cards)=>cards.cards
)
export const loading = createSelector(
    selectCards,
    (cards)=>cards.loading
)