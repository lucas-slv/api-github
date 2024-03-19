import { Container, Description, Footer, Lang, Link, Name } from "./styles";

export function Repository() {
  return (
    <Container color='#FCC419'>
      <Name>Teste</Name>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint voluptatem vero suscipit iste
        debitis error cum doloribus rerum esse accusamus unde, tempore, porro saepe? Unde alias
        excepturi esse iure! Eius?
      </Description>
      <Footer color='#FCC419'>
        <Lang>PHP</Lang>
        <Link>Ver</Link>
      </Footer>
    </Container>
  );
}
