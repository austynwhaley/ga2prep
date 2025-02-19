import { useState, useEffect} from 'react';
import axios from 'axios';

function Login( { setStatus } ) {

// make a function on submit that passes credintals to api and if successful hen log in

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async(e) => {
    e.preventDefault();

    try{

        const res = await axios.post('http://localhost:3001/login', {
            username,
            password,
        });

        if (res.data.sucess) {
            setStatus(true);
        }

    } catch (err) {
        console.log('Error loggin in.', err)
    }
};

  return (
    <div className="Login">
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}

export default Login;
