import { useState } from 'react';

function Calculate(){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    function add(){
        setNum3(parseInt(num1) + parseInt(num2));
    };

    const sub = () => {
        setNum3(parseInt(num1) - parseInt(num2))
    };

    function mul(){
        setNum3(parseInt(num1) * parseInt(num2));
    };

    const div = () => {setNum3(parseInt(num1) / parseInt(num2))};

    return(
        <div>
            <p>calculate</p>
            <input data-testid = "num1" type="number" onChange={(e) => setNum1(e.target.value)}></input>
            <input data-testid = "num2" type="number" onChange={(e) => setNum2(e.target.value)}></input>
            <button data-testid = "add" onClick={add}>Add</button>
            <button data-testid = "sub" onClick={sub}>Subtract</button>
            <button data-testid = "mul" onClick={mul}>Multiply</button>
            <button data-testid = "div" onClick={div}>Divide</button>
            <div data-testid = "num3">{num3}</div>
        </div>
    );
}

export default Calculate;