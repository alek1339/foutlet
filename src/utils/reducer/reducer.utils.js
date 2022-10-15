export const createAction = (type, payload) => ({ type, payload });

export const testAction = (type, payload) => {
  console.log('testAction', type, payload)
}