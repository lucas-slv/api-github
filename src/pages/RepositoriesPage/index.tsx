import { useState } from "react";
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

interface RepositorieProps {
  id: string;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

// export interface LanguageProps {
//   name: string;
//   count: number;
//   color: string;
// }

export function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState("");

  const user: UserProps = {
    login: "bastosmatheus",
    avatar_url: "https://avatars.githubusercontent.com/u/109998987?v=4",
    followers: 1,
    following: 4,
    name: "Matheus",
    company: null,
    blog: "",
    location: "São Paulo, Brasil",
  };

  const repositories: RepositorieProps[] = [
    {
      id: "1",
      name: "7daysofcode",
      html_url: "https://github.com/bastosmatheus/7daysofcode",
      description: "landing page feita atraves de um layout no figma",
      language: "HTML",
    },
    {
      id: "2",
      name: "api",
      html_url: "https://github.com/bastosmatheus/api",
      description: null,
      language: "JavaScript",
    },
    {
      id: "3",
      name: "api-control-stock",
      html_url: "https://github.com/bastosmatheus/api-control-stock",
      description: null,
      language: "TypeScript",
    },
    {
      id: "4",
      name: "bastosmatheus",
      html_url: "https://github.com/bastosmatheus/bastosmatheus",
      description: null,
      language: null,
    },
    {
      id: "5",
      name: "backend-challenges",
      html_url: "https://github.com/bastosmatheus/backend-challenges",
      description:
        "repositório de desafios tecnicos que fiz/estou fazendo para treinar meus conhecimentos. ",
      language: "TypeScript",
    },
    {
      id: "6",
      name: "typescript-estudo",
      html_url: "https://github.com/bastosmatheus/typescript-estudo",
      description: null,
      language: "TypeScript",
    },
    {
      id: "7",
      name: "calendario",
      html_url: "https://github.com/bastosmatheus/calendario",
      description:
        "calendário feito com algumas funcionalidades em JS, codificado através de um layout do figma",
      language: "HTML",
    },
    {
      id: "8",
      name: "challengerfrontendmentor",
      html_url: "https://github.com/bastosmatheus/challengerfrontendmentor",
      description: "Criação de Landing Page através do desafio do Frontend Mentor",
      language: "HTML",
    },
    {
      id: "9",
      name: "csharp-balta.io",
      html_url: "https://github.com/bastosmatheus/csharp-balta.io",
      description: "aprendendo os fundamentos de C# no curso balta.io",
      language: "C#",
    },
    {
      id: "10",
      name: "pitaco-restaurante",
      html_url: "https://github.com/bastosmatheus/pitaco-restaurante",
      description: null,
      language: "TypeScript",
    },
    {
      id: "11",
      name: "projeto-coffeclub",
      html_url: "https://github.com/bastosmatheus/projeto-coffeclub",
      description: "Primeiro projeto feito por mim, tô no inicio ainda, mas curti",
      language: "CSS",
    },
    {
      id: "12",
      name: "projeto-loginworms",
      html_url: "https://github.com/bastosmatheus/projeto-loginworms",
      description: "uma página de login feita com HTML & CSS",
      language: "CSS",
    },
  ];

  const languages = getLangsFrom(repositories);

  function onClickFilter(language: string) {
    setCurrentLanguage(language);
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={onClickFilter} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  );
}
