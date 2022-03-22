import { useState } from "react";
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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="e-mail"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="password"
        />
        <Button type="submit">Log In</Button>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </Form>
    </Container>
  );
}

export default Login;
