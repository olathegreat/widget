import React, {useState} from 'react';

const Button = () => {
    const[count,setCount] = useState(0);

    const buttonClick = () =>{
        setCount(count + 1);
    }
  return (
    <div>
       <button onClick={()=>buttonClick()}>Click me!</button>
       <div>Currentcount: <span>{count}</span></div>
    </div>

  );
}

export default Button;
