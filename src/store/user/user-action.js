import {createAction} from '../../utils/reducer/reducer';
import { ACTION_TYPES } from './user-types';


export const setCurrUser = (user) => {
    return createAction(ACTION_TYPES.SET_CURRENT_USER,  user);
    }
