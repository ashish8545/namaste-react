import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + "Child constructor");

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
  }

  render() {
    console.log(this.props.name + "Child render");
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button>
        <h1>Count: {this.state.count}</h1>
        <h1>Count: {this.state.count2}</h1>
        <h1>Name: {this.props.name}</h1>
        <h2>Location: {this.props.location}</h2>
        <h4>Contact: +912222</h4>
      </div>
    );
  }
}

export default UserClass;
