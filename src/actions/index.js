import streams from "../apis/streams";
import history from "../history";
import {
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

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

export const createStream = formValues => async (dispatch, getState) => {
  //detructuring userId from getSTate.auth
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: "CREATE_STREAM", payload: response.data });

  // do some programmtic navigation to
  // get the user back to the root route (shows list of streams)
  history.push("/");
};

export const fetchStreams = () => async dispatch => {
  // follow REST-ful conventions
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  // follow REST-ful conventions
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  // follow REST-ful conventions
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });

  history.push("/");
};

export const deleteStream = id => async dispatch => {
  // follow REST-ful conventions
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
