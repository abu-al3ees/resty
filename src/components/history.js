import React from 'react';
import '../style/history.scss';

function History(props){

    return (
      <div class="history">
        <ul>
          {props.history.map((item, idx) => 
            <li key={idx}>
              <span className={`method ${item.method}`}>{`${item.method}`}</span>
              <button className='url-history'>{`${item.url}`}</button>
            </li>
          )}
        </ul>
      </div>
    )
}
export default History;