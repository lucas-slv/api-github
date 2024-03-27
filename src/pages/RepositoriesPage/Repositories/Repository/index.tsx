import { langColors } from "../../../../services/config";
import { Container, Description, Footer, Lang, Link, Name } from "./styles";

interface RepositoryProps {
  repository: {
    id: string;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
  };
}

export function Repository({ repository }: RepositoryProps) {
  const color = langColors[(repository.language && repository.language.toLowerCase()) || ""];

  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target='_blank'>
          Ver
        </Link>
      </Footer>
    </Container>
  );
}
