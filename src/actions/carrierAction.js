import {PREV_PATH} from "./types";

export const addPrevPath = (prevPath) => dispatch => {
    dispatch({
        type: PREV_PATH,
        payload: prevPath
    })
};