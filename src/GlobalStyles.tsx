import { createGlobalStyle } from 'styled-components';
import { colors } from './styles';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background-color: ${colors.white};
    color: ${colors.black};
    font-size: 1em;
  }
`;

export default GlobalStyle;
