import { Cleaner, Container, Selector } from "./styles";

interface LanguageProps {
  name: string;
  count: number;
  color?: string;
}
interface FilterProps {
  languages: LanguageProps[];
  currentLanguage: string;
  onClick: (language: string) => void;
}

export function Filter({ languages, currentLanguage, onClick }: FilterProps) {
  const selectors = languages.map(({ name, color, count }) => {
    return (
      <Selector
        key={name.toLowerCase()}
        color={color}
        className={currentLanguage === name ? "selected" : ""}
        onClick={() => onClick && onClick(name)}
      >
        <span>{name}</span>
        <span>{count}</span>
      </Selector>
    );
  });

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick("")}>Limpar</Cleaner>
    </Container>
  );
}
