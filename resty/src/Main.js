import React from 'react';
import './style/Main.scss';

class Main extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        url : '',
        method: ''
      };
    }
  
    addurl = event => {
        event.preventDefault();
        const url = event.target.url.value;
        const method = event.target.method.value;
        const newState = {url : url , method : method};
        this.setstate(newState);
    }
  handelurl = event=>{
    event.preventDefault();

      this.setState({url : event.target.value})
  }
  changeMethod = (event) => {
    event.preventDefault();
    this.setState({ method: event.target.value });
  };

   
    render() {
      return (
          <div id="container">
            <form>
          <label>URL :</label>
          <input onChange={this.handelurl}type="text" name="url" />
          <button type="button" onClick={this.addUrl}>GO!</button> <br></br>
            <button value={`GET`} onClick={this.changeMethod}>GET</button>
            <button value={`POST`}onClick={this.changeMethod}> POST</button>
            <button value={`PUT`} onClick={this.changeMethod}>PUT</button>
            <button value={`DELETE`}onClick={this.changeMethod}> DELETE</button>
        </form>
             <section>
            <p id ="mainp"> {this.state.method} &nbsp;
            
            {this.state.url} </p>
            </section>
            
          </div>
      )
    }
  }
  
  export default Main;