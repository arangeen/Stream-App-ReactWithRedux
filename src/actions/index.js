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
  const response = await streams.post("/streams", formValues);

  dispatch({ type: "CREATE_STREAM", payload: response.data });
};
