import { Filter } from "./Filter";
import { Profile } from "./Profile";
import { Container, Main, Sidebar } from "./styles";

export function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>Section</Main>
    </Container>
  );
}
