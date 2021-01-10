import styled from 'styled-components';
import Theme from '../../styles/theme';

export const FlexRC = styled.div`
  display: flex;
  align-items: center;
`

export const StyledLabel = styled.label`
  font-size: 14px;
  color: ${Theme.layout.primaryColor};
  text-transform: uppercase;
`


export const StyledSelect = styled.select`
  padding: 0.25rem 0rem;
  border-radius: 0.25rem;
  background-color: transparent;
  color: ${Theme.layout.primaryColor};
  margin: 0.25rem 0;
  border-color: ${Theme.layout.primaryColor};
`;