import React from 'react';
import styled from 'styled-components';
import { variables } from '../styles';

const StyledFooterContainer = styled.footer`
  padding: ${variables.defaultPadding};
`;

const StyledFooter = styled.div`
  margin: 0 auto;
  max-width: ${variables.breakpoints.medium};
`;

const PageFooter = (): JSX.Element => (
  <StyledFooterContainer>
    <StyledFooter>Footer</StyledFooter>
  </StyledFooterContainer>
);

export default PageFooter;
