import firestoreAuth from 'firebase/auth';

import {
  signInWithGooglePopup,
  signInUserEmailPassword,
  createUserEmailPassword,
  signOutUser,
} from '../firebase/firebase';

jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn(),
    GoogleAuthProvider: jest.fn().mockImplementation(() => {
      return {
        setCustomParameters: jest.fn(),
      };
    }),
    signInWithPopup: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    onAuthStateChanged: jest.fn(),
    signOut: jest.fn(),
  };
});

describe('firebase utils', () => {
  test("signInWithGooglePopup to call firestoreAuth's signInWithPopup", () => {
    signInWithGooglePopup();
    expect(firestoreAuth.signInWithPopup).toHaveBeenCalled();
  });

  

  test("SignInUserEmailPassword to call firestoreAuth's signInWithEmailAndPassword", () => {
    const testEmail = 'testEmail',
    testPassword = 'testPassword';
    signInUserEmailPassword(testEmail, testPassword);

    expect(firestoreAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      undefined,
      testEmail,
      testPassword
    );
  });

  test("createUserEmailPassword to call firestoreAuth's createUserWithEmailAndPassword", () => {
    const testEmail = 'testEmail',
      testPassword = 'testPassword';
      createUserEmailPassword(testEmail, testPassword);

    expect(firestoreAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(
      undefined,
      testEmail,
      testPassword
    );
  });

  test("signOutUser to call firestoreAuth's signOut", () => {
    signOutUser();
    expect(firestoreAuth.signOut).toHaveBeenCalled();
  });
});