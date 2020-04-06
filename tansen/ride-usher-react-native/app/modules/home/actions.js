import axios from 'axios';

import * as t from './constants';

export function getProvinces() {
    return (dispatch) => {
        dispatch({type: t.RETRIEVING_PROVINCES});
        return new Promise((resolve, reject) => {
            const url = `${t.API_URL}`; // TODO:::Pagination
            axios.get(url)
                .then(res => res.data)
                .then((data) => {
                    dispatch({type: t.PROVINCES_AVAILABLE, data})
                    resolve()
                })
                .catch(error => {
                    dispatch({type: t.PROVINCES_ERROR, error})
                    reject()
                });
        })
    };
}

export function getReviewsByPlate(province, plate) {
    return (dispatch) => {
        dispatch({type: t.RETRIEVING_REVIEWS});
        return new Promise((resolve, reject) => {
            const url = `${t.API_URL}state=${province}&plate=${plate}`; // TODO:::Pagination
                axios.get(url)
                .then(res => res.data)
                .then((data) => {
                    dispatch({type: t.REVIEWS_AVAILABLE, data})
                    resolve()
                })
                .catch(error => {
                    dispatch({type: t.REVIEWS_ERROR, error})
                    reject()
                });
        })
    };
}
