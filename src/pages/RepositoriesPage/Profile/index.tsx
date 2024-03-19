import { Container, Header, Login, Picture, UserName, Inner, Data } from "./styles";

import * as icon from "react-icons/md";

interface ProfileProps {
  user: {
    login: string;
    avatar_url: string;
    followers: number;
    following: number;
    name: string;
    company: string | null;
    blog: string;
    location: string;
  };
}

export function Profile({ user }: ProfileProps) {
  return (
    <Container>
      <Header>
        <Picture src={user.avatar_url} />
        <Login>{user.login}</Login>
        <UserName>{user.name}</UserName>
      </Header>

      <Inner>
        <Data>
          <icon.MdGroup size={20} />
          {user.followers}&nbsp;<i>Seguidores</i>&nbsp;&middot;&nbsp;{user.following}&nbsp;
          <i>Seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <icon.MdWork size={20} />
            {user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            <icon.MdLocationCity size={20} />
            {user.location}
          </Data>
        )}
        {user.blog && (
          <Data>
            <icon.MdLink size={20} />
            <a href={user.blog}>{user.blog}</a>
          </Data>
        )}
      </Inner>
    </Container>
  );
}
