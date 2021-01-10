import React from 'react';
import { StyledPane, StyledTitle } from './style';

export type PaneProps = {
  width: string,
  height: string,
  title: string,
  footer: string,
  children: any,
}

const GlassPane = (props: PaneProps) => {
  const { width, height, title, footer, children } = props;
  return (
    <StyledPane width={width} height={height}>
      <StyledTitle>{title}</StyledTitle>
      {children}
      <StyledTitle pushDown={true}>{footer}</StyledTitle>
    </StyledPane>
  );
}

export default GlassPane;