import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

// const StreamEdit = props => {
//   // console.log(props);
//   return <div>StreamEdit</div>;
// };

// changing above to class based component so we
// can use the componentDidMount() lifecyle method
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    // for class based components, must use 'this.'
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  //same as props inside streamEdit
  //console.log(ownProps);
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
