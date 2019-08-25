import React from 'react';
import styled from 'styled-components';
import { colors, variables } from '../../styles';
import Navigation from '../Navigation/Navigation';

const StyledHeaderContainer = styled.header`
  position: relative;
  padding: ${variables.defaultPadding};
  border-bottom: 2px solid ${colors.gray[800]};
  background-color: ${colors.gray[900]};
`;

const StyledHeader = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${variables.breakpoints.medium};
`;

const StyledLogoContainer = styled.div`
  padding-right: ${variables.defaultPadding};

  @media all and (min-width: ${variables.breakpoints.large}) {
    position: absolute;
    left: ${variables.defaultPadding};
  }
`;

const StyledLoginInfo = styled.div`
  padding-left: ${variables.defaultPadding};
  margin-left: auto;

  @media all and (min-width: ${variables.breakpoints.large}) {
    position: absolute;
    right: ${variables.defaultPadding};
  }
`;

const PageHeader = (): JSX.Element => (
  <StyledHeaderContainer>
    <StyledHeader>
      <StyledLogoContainer>Header</StyledLogoContainer>
      <Navigation />
      <StyledLoginInfo>Login info</StyledLoginInfo>
    </StyledHeader>
  </StyledHeaderContainer>
);

export default PageHeader;
