
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './home';
import Title from '../components/Title'


function Login() {

    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    let [loginstatus, setloginstatus] = useState('');
    let [counter, setcounter] = useState(0);
    const navigate = useNavigate();


    const checklogin = () => {

        if (userName && password) {

            console.log("Hello");
            navigate('/Home');
          
            setloginstatus("Logged in");

        }

        else {

            console.log("you forgot to enter details")
            setloginstatus("not log in");
            setcounter(counter+1);
        }

    }




    return (
        <div className="App">
            <header className="App-header">

            <Title />
            <h1> React Js</h1>

                <div class='final'>
                <h2>Form</h2>

                <div class="form">
                    <label for="fname">NAME:</label>
                    <input type='text' name='userName' onChange={e => setuserName(e.target.value)} />                   

                    <label for="fname">PASSWORD:</label>
                    <input type='text' name='password' onChange={e => setpassword(e.target.value)} />

                                       
                    <input type='submit' onClick={checklogin} />

                </div>

               <p>{loginstatus}</p> 

               <p>{counter}</p>

                </div>
              

            </header>
        </div>
    );


}

export default Login;
