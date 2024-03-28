import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLangsFrom, getRepos, getUser } from "../../services/api";
import { Filter } from "./Filter";
import { Profile } from "./Profile";
import { Repositories } from "./Repositories";
import { Container, Main, Sidebar, Loading } from "./styles";

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

interface LanguageProps {
  name: string;
  count: number;
  color?: string;
}

interface RouteParamsProps {
  [key: string]: string;
}

export function RepositoriesPage() {
  const { login } = useParams<RouteParamsProps>();

  const [user, setUser] = useState({} as UserProps);
  const [repositories, setRepositories] = useState([] as RepositorieProps[]);
  const [languages, setLanguages] = useState<LanguageProps[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (login) {
        const [userResponse, repoReponse] = await Promise.all([getUser(login), getRepos(login)]);
        setUser(userResponse.data);
        setRepositories(repoReponse.data);
        setLanguages(getLangsFrom(repoReponse.data));
        setLoading(false);
      }
    };

    loadData();
  }, [login]);

  function onClickFilter(language: string) {
    setCurrentLanguage(language);
  }

  if (loading) {
    return <Loading>Carregando...</Loading>;
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
