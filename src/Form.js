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
  
    handleSubmit = async event => {
      event.preventDefault();

      await this.setState({
        urls: event.target.url.value, 
        methods: event.target.method.value
      });
  
      this.props.updateResults({...this.state});
     
  }

 

  render() {
    return (
      <section className="App-form">
        <form onSubmit={this.handleSubmit}>
          <label>URL:</label>
          <input id="input-text" name="url" type='text' />
          <button type="submit">GO!</button>
          <div id="rest-buttons">
            <div className="method-buttons">
              <label>
                <input name="method" type="radio" value="GET" />
                GET
              </label>
              <label>
                <input name="method" type="radio" value="POST" />
               POST
              </label>
              <label>
                <input name="method" type="radio" value="PUT" />
                PUT
              </label>
              <label>
                <input  name="method" type="radio" value="DELETE" />
               DELETE
              </label>
            </div>
          </div>
        </form>
      </section>
    )
  }
}

export default Form;
























































