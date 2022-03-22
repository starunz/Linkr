import { useState } from "react";
import Input from "../../components/Input";
import { Container, Main, Title, Description, Form, Button,StyledLink } from "./style";

function SignUp() {
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [imgUrl, setImgUrl] = useState('');
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
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="password"
        />
                <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="username"
        />
        <Input
          type="text"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          name="imgUrl"
          placeholder="picture url"
        />
        <Button type='submit'>Sign Up</Button>
        <StyledLink to="/">Switch back to log in</StyledLink>
      </Form>
    </Container>
  )
}

export default SignUp