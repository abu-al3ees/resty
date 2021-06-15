import React from 'react';
import './style/Main.scss';

class Form extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        url : '',
        method: ''
      };
    }
  
    addurl = async event => {
        event.preventDefault();
        const url =await event.target.url.value;
        const method =await event.target.method.value;
        const newState =await {url : url , method : method};
        this.setstate(newState);
    }
  handelurl =async event=>{
    event.preventDefault();
    let raw = await fetch('https://randomuser.me/api/?results=10');
    console.log('this is  ----->', event.target.url);
    let data = await raw.json();
    console.log('this is data from api', data);
    const header = raw.headers;
    console.log('this is data from api', header);

    this.props.handler(data, header);
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
  
  export default Form;