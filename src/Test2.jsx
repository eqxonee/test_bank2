import React, {useState} from 'react';
import Test from "./Test";

const Test2 = () => {

    let test = new Test;
    let [inputTest, setInputTest] = useState({
        id: 5,
        accountNumber: 575,
        moneyAmount: 1
    });

    const finish = () => {

        for (let i = 1; ; i++) {
            setTimeout(() => {
                test.testCheck(5, inputTest).then(
                    response => {
                        setInputTest({
                            id: 5,
                            accountNumber: 575,
                            moneyAmount: 1
                        });
                        //alert("Success!")
                    })
                // тут какой-то код
            }, i * 200)
            if (i >= 1000) break;
        }
    };

    return (
        <div>
            <button type="primary" onClick={finish}>Click me!</button>
        </div>

    );
}
export default Test2;