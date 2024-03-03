import { useState } from 'react';

function About() {

    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [loginstatus, setloginstatus] = useState('');


    //document.write("Welcome to the new page");

    console.log("welcome to new  contact page");


    

    


    const checklogin = () => {

       

        if (userName && password) {

            //console("congratulations")
            setloginstatus("Logged in");

        }

        else {

            //console("you forgot to enter details")
            setloginstatus("not log in");
        }

    }







    //console.log("congratulations");




    return (
        <div className="App">
            <header className="App-header">

                <h1> React Js</h1>

                <p>
                    Edit <code>src/App.js</code> and save to reload.  I am Sonukumar Rastogi
                </p>




                <div class="form" >

                    <input type='text' name='username' onChange={e => setuserName(e.target.useState)} />

                    <input type='text' name='password' onChange={e => setpassword(e.target.useState)} />

                    <input type='submit' onClick={checklogin} />

                </div>

                {loginstatus !== null && (<p>loginstatus</p>)}




            </header>
        </div>
    );


}

export default About;
