import { getLangsFrom } from "../../services/api";
import { Filter } from "./Filter";
import { Profile } from "./Profile";
import { Repositories } from "./Repositories";
import { Container, Main, Sidebar } from "./styles";

interface UserProps {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  name: string;
  company: string | null;
  blog: string;
  location: string;
}

interface RepoProps {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}



export function RepositoriesPage() {
  const user: UserProps = {
    login: "lucas-slv",
    avatar_url: "https://avatars.githubusercontent.com/u/123598525?v=4",
    followers: 2,
    following: 2,
    name: "Lucas Mendes",
    company: "Microsoft",
    blog: "",
    location: "Brazil/ São Paulo",
  };

  const repositories: RepoProps[] = [
    {
      name: "Calculadora--IMC",
      html_url: "https://github.com/lucas-slv/Calculadora--IMC",
      description: null,
      language: "CSS",
    },
    {
      name: "dev-barbershop",
      html_url: "https://github.com/lucas-slv/dev-barbershop",
      description:
        "Este repositório contém o código-fonte e os recursos para uma elegante e moderna página de destino para cabeleireiros ou barbearias. Projetada com foco na apresentação visual atraente e facilidade de navegação, a Landing Page Dev Barbearia oferece uma presença online profissional para salões de beleza.",
      language: "HTML",
    },
    {
      name: "devlinks",
      html_url: "https://github.com/lucas-slv/devlinks",
      description: null,
      language: "CSS",
    },
    {
      name: "Repo 4",
      html_url: "https://github.com/lucas-slv/devlinks",
      description: null,
      language: "TypeScript",
    },
    {
      name: "Repo 5",
      html_url: "https://github.com/lucas-slv/devlinks",
      description: null,
      language: "TypeScript",
    },
    {
      name: "Repo 6",
      html_url: "https://github.com/lucas-slv/devlinks",
      description: null,
      language: "TypeScript",
    },
  ];

  const languages = getLangsFrom(repositories)

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
}
