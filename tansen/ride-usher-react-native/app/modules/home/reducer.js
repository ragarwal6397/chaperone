import * as t from './constants';

let initialState = { isFetching: true, reviews:[], provinces:[], hasError:false, errorMsg: "" };

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.RETRIEVING_REVIEWS:{
            let isFetching = (state.reviews.length > 0) ? false : true;

            return {...state, isFetching, hasError:false};
        }

        case t.REVIEWS_AVAILABLE:{
            let { reviews } = action.data;

            return {...state, isFetching:false, reviews: reviews, hasError:false};
        }

        case t.REVIEWS_ERROR:{
            const error = action.error;

            return {...state, isFetching:false, hasError:true, errorMsg:error};
        }

        case t.RETRIEVING_PROVINCES:{
            let isFetching = (state.provinces.length > 0) ? false : true;

            return {...state, isFetching, hasError:false};
        }

        case t.PROVINCES_AVAILABLE:{
            let { provinces } = action.data;

            return {...state, isFetching:false, provinces: provinces, hasError:false};
        }

        case t.PROVINCES_ERROR:{
            const error = action.error;

            return {...state, isFetching:false, hasError:true, errorMsg:error};
        }

        default:
            return state;

    }
};

export default homeReducer;
