import styled from 'styled-components';
import { mobile } from '../responsive';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('img-7.png') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: rgb(255, 83, 108);
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.get('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });
      res.data && Redirect('/login');
      console.log(res);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Input placeholder="confirm password" onChange={(e)=>setUsername(e.target.value)} /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>
            <Link className="link" to="/login">
              register
            </Link>
          </Button>
        </Form>
        {error && <span style={{ color: 'red' }}>Somthing when wrong...</span>}
      </Wrapper>
    </Container>
  );
};

export default Register;
// import axios from 'axios';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// // import "./register.css";

// export default function Register() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(false);
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/register', {
//         username,
//         email,
//         password,
//       });

//       res.data && window.location.replace('/login');
//     } catch (err) {
//       setError(true);
//     }
//   };
//   // console.log(username,email,password,)
//   return (
//     <div className="register">
//       <span className="registerTitle">Register</span>
//       <form
//         className="registerForm"
//         onSubmit={handleSubmit}
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <label>Username</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your username..."
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label>Email</label>
//         <input
//           type="text"
//           className="registerInput"
//           placeholder="Enter your email..."
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           className="registerInput"
//           placeholder="Enter your password..."
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="registerButton" type="submit">
//           Register
//         </button>
//       </form>
//       <button className="registerLoginButton">
//         <Link className="link" to="/login">
//           Login
//         </Link>
//       </button>
//       {error && (
//         <span style={{ color: 'red', marginTop: '10px' }}>
//           Something went wrong!
//         </span>
//       )}
//     </div>
//   );
// }
