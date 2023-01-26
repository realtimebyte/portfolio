import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import styled from 'styled-components';


const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px': 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto': '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Side = (props: any) => {
  const { children, isHome, orientation } = props;
  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();
  return (
    <StyledSideElement orientation={orientation}>
      {prefersReducedMotion ? (
        <>{children}</>
      ):(
        <TransitionGroup component={null}>
          {
            isMounted && (
              <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? loaderDelay : 0}>
                {children}
              </CSSTransition>
            )
          }
        </TransitionGroup>
      )}
    </StyledSideElement>
  )
}

export default Side;
