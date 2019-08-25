import React from 'react';
import styled from 'styled-components';
import { variables } from '../styles';

const Footer = styled.footer`
  padding: ${variables.defaultPadding};
`;

const PageFooter = (): JSX.Element => <Footer>Footer</Footer>;

export default PageFooter;
