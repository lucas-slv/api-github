import { Container, Header, Login, Picture, UserName, Inner, Data } from "./styles";

import * as icon from "react-icons/md";

export function Profile() {
  return (
    <Container>
      <Header>
        <Picture src='https://avatars.githubusercontent.com/u/123598525?v=4' />
        <Login>lucas-slv</Login>
        <UserName>Lucas Mendes</UserName>
      </Header>

      <Inner>
        <Data>
          <icon.MdGroup size={20} />
          20&nbsp;<i>Seguidores</i>&nbsp;&middot;&nbsp;40&nbsp;<i>Seguindo</i>
        </Data>
        <Data>
          <icon.MdWork size={20} />
          Learning Programming
        </Data>
        <Data>
          <icon.MdLocationCity size={20} />
          São Paulo
        </Data>
        <Data>
          <icon.MdLink size={20} />
          <a href='https://www.github.com/lucas-slv'>sla</a>
        </Data>
      </Inner>
    </Container>
  );
}
