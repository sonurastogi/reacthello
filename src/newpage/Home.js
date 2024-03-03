import { useState } from 'react';
import Heading from '../components/Heading';

function Home() {

    let [bgcolor,setColor]=useState("Blue");

    return (
        <div className="App" style={{backgroundColor:bgcolor}}>
            <header className="App-header">

                <h1> React Js</h1>
                <Heading />

                <input type='submit' onClick={()=>setColor("Red")} style={{backgroundColor:"red"}} />
                <input type='submit' onClick={()=>setColor("Blue")} style={{backgroundColor:"blue"}}/>
                <input type='submit' onClick={()=>setColor("Green") }  style={{backgroundColor:"green"}} />  

            </header>
        </div>
    );


}

export default Home;
