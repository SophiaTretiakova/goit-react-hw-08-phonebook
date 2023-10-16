import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 4mm ridge rgba(34, 0, 186, 0.6);
  text-decoration: none;
  font-weight: 500;
  color: #2e2f42;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;

  color: violet;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: flex-end;
`;
