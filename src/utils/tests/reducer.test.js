import { createAction } from '../reducer/reducer';

describe('reducer.jsx ', () => {
  const testType = 'test';

  test('createAction generates an object with type value', () => {
    expect(createAction(testType).type).toBe(testType);
  });

  test('createAction creates an object with type value and payload when passed', () => {
    const testPayload = ['test_1', 'test_2'];
    expect(createAction(testType, testPayload).type).toBe(testType);
    expect(createAction(testType, testPayload).payload).toBe(testPayload);
  });
});