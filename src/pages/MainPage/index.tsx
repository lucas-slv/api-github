import { Button, Container, Form, Input, Logo, Title } from "./styles";
import logo from "../../assets/images/github-logo.svg";
import * as Icon from "react-icons/md";
import { useState } from "react";

export function MainPage() {
  const [login, setLogin] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setLogin(query);
  }

  return (
    <Container>
      <Logo src={logo} alt='github logo' />
      <Title>Api GitHub</Title>

      <Form>
        <Input
          type='text'
          onChange={handleInputChange}
          value={login}
          placeholder='Digite o nome do usuário'
        />
        <Button to={`/${login}/repositories`}>
          <Icon.MdSearch size={42} color='white' />
        </Button>
      </Form>
    </Container>
  );
}
