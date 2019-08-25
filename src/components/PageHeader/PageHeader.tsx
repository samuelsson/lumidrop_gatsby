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
  width: ${variables.breakpoints.large};
`;

const StyledLogoContainer = styled.div`
  position: absolute;
  left: ${variables.defaultPadding};
  margin-right: ${variables.defaultPadding};
`;

const StyledLoginInfo = styled.div`
  position: absolute;
  right: ${variables.defaultPadding};
  margin-left: ${variables.defaultPadding};
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
