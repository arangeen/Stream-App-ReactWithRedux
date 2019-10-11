import streams from "../apis/streams";

export const signIn = () => {
  return {
    type: "SIGN_IN"
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

//more action creators

export const createStream = formValues => async dispatch => {
  streams.post("/streams", formValues);
};
