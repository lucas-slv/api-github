import { Cleaner, Container, Selector } from "./styles";

interface LanguageProps {
  name: string;
  count: number;
  color?: string;
}
interface FilterProps {
  languages: LanguageProps[]
}


export function Filter({languages}: FilterProps) {

  const selectors = languages.map(({ name, color, count }) => {
    return (
      <Selector key={name.toLowerCase()} color={color}>
        <span>{name}</span>
        <span>{count}</span>
      </Selector>
    );
  });

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
}
