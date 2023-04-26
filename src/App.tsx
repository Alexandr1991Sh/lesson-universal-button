import React from 'react';
import './App.css';
import {Button} from "./Components/Button";


const App = () => {
    const clicks = (name: string, ade: number, address: string) => {
        console.log(name, ade, address)
    }
    const click2 = (name: string) => {
        console.log(name)
    }


    // const myFirstSubscribe = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Subscribe 1 Sasha')
    // }
    // const myTwoSubscribe = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Subscribe 2 Dima')
    // }

    // const onClickHandler = (name: string)=>{
    //     console.log(name);
    // }




    return (
        <>
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Alex' )}>Subscribe 1</button>*/}
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Alex')}>Subscribe 2</button>*/}
            {/*<button onClick={() => onClickHandler('Dima')}>Subscribe 3</button>*/}


            <Button callBack={() => clicks('Sasha', 32, 'city Moscow')} name={'Button number one'}/>
            <Button callBack={() => clicks('Dima', 35, 'city Minsk')} name={"Button number two"}/>
            <Button callBack={()=>click2('I am stupid button')} name={"Button number Three"}/>
           
        </>
    )
}

export default App



