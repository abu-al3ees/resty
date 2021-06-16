  
import React from "react";
import Footer from "../Footer";
// import JSONPretty from "react-json-pretty";
import ReactJson from "react-json-view";
import '../style/result.scss'

class Result extends React.Component {
  render() {
    return (
      <>
        <div id="mainp">
          
          
          <ReactJson id="json-pretty" src={this.props} />


        </div>

        <Footer />
      </>
    );
  }
}

export default Result;