import {createAction,withMatcher,Action,ActionWithPayload} from '../../utils/reducer/reducer';

import {UserData,AddInfo,} from '../../utils/firebase/firebase';

import { User } from 'firebase/auth'
import { ACTION_TYPES } from './user-types';;


  


// export const setCurrUser = (user) => {
//     return createAction(ACTION_TYPES.SET_CURRENT_USER,  user);
//     }


    export type CheckUserSession = Action<ACTION_TYPES.CHECK_USER_SESSION>;

    export type SetCurrentUser = ActionWithPayload<
      ACTION_TYPES.SET_CURRENT_USER,
      UserData
    >;
    
    export type GoogleSignInStart = Action<ACTION_TYPES.GOOGLE_SIGN_IN_START>;
    
    export type SignUpStart = ActionWithPayload<
      ACTION_TYPES.SIGN_UP_START,
      { email: string; password: string; displayName: string }
    >;
    
    export type EmailSignInStart = ActionWithPayload<
      ACTION_TYPES.EMAIL_SIGN_IN_START,
      { email: string; password: string }
    >;
    
    export type SignInSuccess = ActionWithPayload<
      ACTION_TYPES.SIGN_IN_SUCCESS,
      UserData
    >;
    
    export type SignInFailed = ActionWithPayload<
      ACTION_TYPES.SIGN_IN_FAILED,
      Error
    >;
    
    export type SignUpSuccess = ActionWithPayload<
      ACTION_TYPES.SIGN_UP_SUCCESS,
      { user: User; additionalDetails: AddInfo }
    >;
    
    export type SignUpFailed = ActionWithPayload<
      ACTION_TYPES.SIGN_UP_FAILED,
      Error
    >;
    
    export type SignOutStart = Action<ACTION_TYPES.SIGN_OUT_START>;
    
    export type SignOutSuccess = Action<ACTION_TYPES.SIGN_OUT_SUCCESS>;
    
    export type SignOutFailed = ActionWithPayload<
      ACTION_TYPES.SIGN_OUT_FAILED,
      Error
    >;
    
    export const checkUserSession = withMatcher(
      (): CheckUserSession => createAction(ACTION_TYPES.CHECK_USER_SESSION)
    );
    
    export const setCurrentUser = withMatcher(
      (user: UserData): SetCurrentUser =>
        createAction(ACTION_TYPES.SET_CURRENT_USER, user)
    );
    
    export const googleSignInStart = withMatcher(
      (): GoogleSignInStart => createAction(ACTION_TYPES.GOOGLE_SIGN_IN_START)
    );
    
    export const emailSignInStart = withMatcher(
      (email: string, password: string): EmailSignInStart =>
        createAction(ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
    );
    
    export const signInSuccess = withMatcher(
      (user: UserData & { id: string }): SignInSuccess =>
        createAction(ACTION_TYPES.SIGN_IN_SUCCESS, user)
    );
    
    export const signInFailed = withMatcher(
      (error: Error): SignInFailed =>
        createAction(ACTION_TYPES.SIGN_IN_FAILED, error)
    );
    
    export const signUpStart = withMatcher(
      (email: string, password: string, displayName: string): SignUpStart =>
        createAction(ACTION_TYPES.SIGN_UP_START, {
          email,
          password,
          displayName,
        })
    );
    
    export const signUpSuccess = withMatcher(
      (user: User, additionalDetails: AddInfo): SignUpSuccess =>
        createAction(ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
    );
    
    export const signUpFailed = withMatcher(
      (error: Error): SignUpFailed =>
        createAction(ACTION_TYPES.SIGN_UP_FAILED, error)
    );
    
    export const signOutStart = withMatcher(
      (): SignOutStart => createAction(ACTION_TYPES.SIGN_OUT_START)
    );
    
    export const signOutSuccess = withMatcher(
      (): SignOutSuccess => createAction(ACTION_TYPES.SIGN_OUT_SUCCESS)
    );
    
    export const signOutFailed = withMatcher(
      (error: Error): SignOutFailed =>
        createAction(ACTION_TYPES.SIGN_OUT_FAILED, error)
    );