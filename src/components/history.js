
import React from 'react';

let resu=localStorage.getItem('headers');
         let object=JSON.parse(resu);

         if(!object){
         object=[{url:'no url yet',
         method:'no method'
        }]
         }

function History({ props }) {
    return (
      <section id="history">
        <table>
          <thead>
            <tr>
              <th className="fwidth">Method</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
              
            {object.map((val, i) => {
              return (
                <tr
                  key={i + val.method + val.url}
                 
                  onClick={historyClick}
                >
                  <th className="fwidth" id={`his${val.method}`}>{val.method}</th>
                  <td>{val.url}</td>
                  <td style={{ display: 'none' }}>{val.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
  
  export default History;
  
  function historyClick(e) {
    let method = e.currentTarget.childNodes[0].innerHTML;
    let url = e.currentTarget.childNodes[1].innerHTML;
    let body = e.currentTarget.childNodes[2].innerHTML;
  console.log(method)
  console.log(url)
    const input = document.getElementById('inputUrl');
    console.log(input)
    input.value = url;
 
    const button = document.getElementById(`${method}`)
    console.log(button)
  button.click();
   
  
    const text = document.getElementById('body');
   
    text.innerHTML = body;
  }