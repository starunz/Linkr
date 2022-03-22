import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import {
  Container,
  Main,
  Title,
  Description,
  Form,
  Button,
  StyledLink,
} from "./style";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    photoUrl: "",
  });

  function handleSubmit({target}) {
    setFormData({ ...formData, [target.username]: target.value });
  }




  return (
    <Container>
      <Main>
        <Title>linkr</Title>
        <Description>
          save, share and discover the best links on the web
        </Description>
      </Main>
      <Form>
        <Input
          type="text"
          value={formData.email}
          onChange={(e) => handleSubmit(e)}
          name="email"
          placeholder="e-mail"
        />
        <Input
          type="password"
          value={formData.password}
          onChange={(e) => handleSubmit(e)}
          name="password"
          placeholder="password"
        />
        <Input
          type="text"
          value={formData.username}
          onChange={(e) => handleSubmit(e)}
          name="name"
          placeholder="username"
        />
        <Input
          type="url"
          value={formData.photoUrl}
          onChange={(e) => handleSubmit(e)}
          name="imgUrl"
          placeholder="picture url"
        />
        <Button type="submit">Sign Up</Button>
        <StyledLink to="/">Switch back to log in</StyledLink>
      </Form>
    </Container>
  );
}

export default SignUp;
