import { ADD_CARD, LOADING, UPDATE_CARD} from "../actions/actionTypes"
const initialState = {
  cards:[],
  loading:false
}

const cards = (state = initialState, action) => {
  console.log(action);
    switch (action.type) {
      case ADD_CARD:
        return {
          ...state,
          cards:action.cards
            
        }
        case LOADING:
          return {
            ...state,
            loading:action.status
              
          }
      case UPDATE_CARD:
        return {
          ...state,
          cards:state.cards.map(c =>
            (c.card_number == action.card_number)
              ? {...c, limit: action.value}
              : c
          )
        }
      default:
        return state
    }
  }
  
  export default cards
  