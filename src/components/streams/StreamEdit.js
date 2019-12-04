import React from "react";
import { connect } from "react-redux";

const StreamEdit = props => {
  // console.log(props);
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  //same as props inside streamEdit
  //console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connnect(mapStateToProps)(StreamEdit);
