import { CATEGORIES_SET, CATEGORY_DELETE, CATEGORY_SET, CATEGORY_STATE_CLEAR } from '../actionTypes';


const initialState = {
    category: {},
    categories: []
}

const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CATEGORY_SET:
            // ...state : bê nguyên category cũ vào rồi cộng với category : payload mới vào
            return { ...state, category: payload }
        case CATEGORIES_SET:
            return { ...state, categories: payload }
        case CATEGORY_DELETE:
            return { ...state, categories: state.categories.filter(item => item.id !== payload) }
        case CATEGORY_STATE_CLEAR:
            return {
                category: {},
                categories: [] 
            }
        default:
            return state
    }
}

export default categoryReducer;