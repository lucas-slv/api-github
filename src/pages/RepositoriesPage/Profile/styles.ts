import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const BackButton = styled.button`
  background: none;
  color: ${(props) => props.theme.colors.text};
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border: none;

  &::after {
    content: "Voltar";
    font-size: ${(props) => props.theme.fontSize.lg};
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0s linear 0.3s;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Picture = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
`;

export const UserName = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: normal;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;
  word-break: break-all;

  svg {
    margin-right: 10px;
  }

  a {
    color: ${(props) => props.theme.colors.white};
  }
`;
