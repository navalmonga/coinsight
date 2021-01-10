import React from 'react';
import { StyledHeader, StyledTitle, LoginButton } from './style';

export type HeaderProps = {
  title: string,
}

const PageHeader = (props: HeaderProps) => {
  const { title } = props;
  const titleParts = title.split(' ');
  return (
    <StyledHeader>
      <LoginButton href="/">login</LoginButton>
      <StyledTitle>{titleParts[0]}<span>{titleParts[1]}</span></StyledTitle>
    </StyledHeader>
  );
}

export default PageHeader;