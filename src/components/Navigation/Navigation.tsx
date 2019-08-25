import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { variables } from '../../styles';

const StyledUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;

  li:not(:first-child) {
    padding-left: ${variables.defaultPadding};
  }
`;

const Navigation = (): JSX.Element => (
  <nav>
    <StyledUl>
      <li>
        <Link to="/">Start</Link>
      </li>
      <li>
        <Link to="/testing">Testing</Link>
      </li>
    </StyledUl>
  </nav>
);

export default Navigation;
