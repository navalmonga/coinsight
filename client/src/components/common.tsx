import styled from 'styled-components';
import Theme from '../styles/theme';

export const Grid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns ? props.columns : 3}, 1fr);
  grid-gap: 30px;
  @media (max-width: ${Theme.breakpoints.sm}) {
  }
`;