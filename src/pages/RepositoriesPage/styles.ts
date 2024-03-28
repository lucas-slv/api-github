import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background-color: ${(props) => props.theme.colors.container};
  width: 100%;
  overflow-y: hidden;
  padding: 40px;
  box-sizing: border-box;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
    padding: 20px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
    padding: 15px;
  }
`;
