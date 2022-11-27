import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0) ?
        <button onClick={props.start}>Start</button> : ""
      }
      {(props.status === 1)? 
        <div>
          <button onClick={props.stop}>Stop</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button onClick={props.start}>Start</button>
        </div> : ""
      }
    </div>
  );
}

export default BtnComponent;