import React, { useState } from 'react';
import useScrollDirection from '@hooks/useScrollDirection';

const Nav = (props:any) => {
  const { isHome } = props;

  const [isMounted, setIsMounted] = useState(!isHome);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollDirection = useScrollDirection('UP');
  return (
    <>
      aaa
    </>
  )
}

export default Nav;
