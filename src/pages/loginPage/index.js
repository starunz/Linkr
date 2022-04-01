import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from "../../components/Input";
import {
  Container,
  Main,
  Title,
  Description,
  Form,
  StyledLink,
} from "./style";

import * as api from '../../services/api';
import useAuth from '../../hooks/useAuth';

import { ThreeDots } from 'react-loader-spinner';

import Swal from 'sweetalert2';
import Button from '../../components/Button';

function Login() {
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const { auth, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && auth.token) {
      navigate('/timeline');
    }

    // eslint-disable-next-line 
  }, []);

  function handleChange(e) {
      setSignInData({ ...signInData, [e.target.name]: e.target.value });
  }

  async function handleSignIn(e) {
      e.preventDefault();

      setIsLoading(true);

      try {
        const promisse = await api.login({ ...signInData });
        setIsLoading(false);

          login(promisse.data);
          navigate('/timeline');
      }
      catch (error) {
        setIsLoading(false);

        if (error.response.status === 422) {
          setSignInData({
            email: '',
            password: '',
          });

          Swal.fire({
            icon: 'error',
            title: "OOPS...",
            text: 'Insira os dados corretamente, por favor.',
          });

          return;
        }

        if (error.response.status === 401) {
          setSignInData({
            email: '',
            password: '',
          });

          Swal.fire({
            icon: 'error',
            title: "OOPS...",
            text: 'Email e/ou senha incorretos, insira os dados corretamente, por favor.',
          });
        }

        if (error.response.status === 404) {
          setSignInData({
            email: '',
            password: '',
          });

          Swal.fire({
            icon: 'error',
            title: "OOPS...",
            text: 'Usuário não existente, faça um cadastro, por favor.',
          });

          return;
        }
      }
  }

  return (
    <Container>
      <Main>
        <Title>linkr</Title>
        <Description>
          save, share and discover the best links on the web
        </Description>
      </Main>

      <Form onSubmit={handleSignIn}>
        <Input
          type='email'
          placeholder='E-mail'
          name='email'
          onChange={handleChange}
          value={signInData.email}
          disabled={isLoading}
          required
        />
        <Input
          type='password'
          placeholder='Senha'
          name='password'
          onChange={handleChange}
          value={signInData.password}
          disabled={isLoading}
          required
        />

        <Button type='submit' disabled={isLoading}>
          {isLoading ? (
              <ThreeDots color="#FFFFFF" height={50} width={50} />
          ) : (
              'Log In'
          )}
        </Button>

        <StyledLink to="/sign-up">First time? Create an account!!</StyledLink>
      </Form>
  </Container>
  );
}

export default Login;