import { Cleaner, Container, Selector } from "./styles";

export function Filter() {
  const langs = [
    { name: "Javascript", count: 5, color: "#FCC419" },
    { name: "PHP", count: 1, color: "#7E5CEF" },
    { name: "Typescript", count: 3, color: "#2b3de7" },
  ];

  const selectors = langs.map(({ name, color, count }) => {
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
