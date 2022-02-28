
import { ADD_CARD,FETCH_CARD, LOADING,UPDATE_CARD } from "./actionTypes"
export const fetchCards = ()=>({
  type:FETCH_CARD
})
export const addCards = cards => ({
  type: ADD_CARD,
  cards: cards,
 })
 export const setLoading = status => ({
  type: LOADING,
  status: status,
 })
 export const updateCard = (card_number,value ) => ({
  type: UPDATE_CARD,
 card_number: card_number,
  value: value,
 })

