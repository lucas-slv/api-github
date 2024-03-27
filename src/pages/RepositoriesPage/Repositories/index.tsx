import { Repository } from "./Repository";
import { Container } from "./styles";

interface RepositorieProps {
  repositories: {
    id: string;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
  }[];
  currentLanguage: string;
}

export function Repositories({ repositories, currentLanguage }: RepositorieProps) {
  const repos = repositories
    .filter(
      (repository) => currentLanguage === "" || repository.language === currentLanguage,
    )
    .map((repository) => <Repository key={repository.id} repository={repository} />);

  return <Container>{repos}</Container>;
}
