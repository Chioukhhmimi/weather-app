import React from 'react';
 
class FormWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  updateLocalText = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div className="form-container container ">
      <div className="input-group mb-3 search">
      <input
          type="text"
           className="form-control input-style"
          value={this.state.text}
          placeholder="Country/city..."
          onChange={this.updateLocalText}
        />
 
        <input
          type="submit"
          className="btn btn-outline-secondary"
          value={'search'}
          onClick={() => this.props.updateText(this.state.text)}
        />
      </div>
      </div>
    );
  }
}
export default FormWeather;