const INTIAL_STATE = {
  isSignedIn: null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      //taking all the values out of state argument
      //and put it in the new object
      return { ...state, isSignedIn: true };

    case "SIGN_OUT":
      return { ...state, isSignedOut: false };

    default:
      return state;
  }
};
