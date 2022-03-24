import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Main, Title, Description, Form, StyledLink } from "./style";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as api from "../../services/api";
import { ThreeDots } from "react-loader-spinner";
import Swal from 'sweetalert2';

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    photoUrl: "",
  });
  const navigate = useNavigate();

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.signUp({ ...formData });
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 422) {
        setFormData({
            email: '',
            password: '',
        });

        Swal.fire({
            icon: 'error',
            title: "OOPS...",
            text: 'Todos os campos precisam ser preenchidos, confira seus dados',
        });

        return;
      }

      if (error.response.status === 409) {
        setFormData({
            email: '',
            password: '',
        });

        Swal.fire({
            icon: 'error',
            title: "OOPS...",
            text: 'Esse email já existe, confira seus dados',
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
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={formData.email}
          onChange={(e) => handleChange(e)}
          name="email"
          placeholder="e-mail"
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          name="password"
          placeholder="password"
          disabled={isLoading}
          required
        />
        <Input
          type="text"
          value={formData.username}
          onChange={(e) => handleChange(e)}
          name="username"
          placeholder="username"
          disabled={isLoading}
          required
        />
        <Input
          type="url"
          value={formData.photoUrl}
          onChange={(e) => handleChange(e)}
          name="photoUrl"
          placeholder="picture url"
          disabled={isLoading}
          required
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots color="#FFFFFF" height={50} width={50} />
          ) : (
            "Sign Up"
          )}
        </Button>
        <StyledLink to="/">Switch back to log in</StyledLink>
      </Form>
    </Container>
  );
}

export default SignUp;
