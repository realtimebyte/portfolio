import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navLinks } from '@config';
import IconLogo from '@components/icons/logo';
import Menu from '@components/menu';
import useScrollDirection from '@hooks/useScrollDirection';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import { loaderDelay } from '@utils';


const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${props =>
      props.scrollDirection === 'UP' && !props.scrolledToTop && css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `
    }

    ${props =>
      props.scrollDirection === 'DOWN' && !props.scrolledToTop && css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `
    }
  }
`;

const StyledNav = styled.nav`
  ${({theme}) => theme.mixins.flexBetween};
`
const StyledLinks = styled.div`
  display: flex;
  align-items: 'center';

  @media(max-width: 768px) {
    display: none;
  }

  ol {
    ${({theme}) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin:0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a{
        padding: 10px;

        &:before{
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }

    .resume-button{
      ${({theme}) => theme.mixins.smallButton};
      margin-left: 15px;
      font-size: var(--fz-xs);
    }
  }

`;

const Nav = (props:any) => {
  const { isHome } = props;

  const [isMounted, setIsMounted] = useState(!isHome);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrollDirection = useScrollDirection('UP');
  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  }

  useEffect(() => {
    if(prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    })

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const Logo = (
    <div className="logo" tabIndex = "-1">
      {isHome ? (
        <a href="/" aria-label="home">
          <IconLogo />
        </a>
       )
       :
       (
         <></>
         // <Link to="/" aria-label="home">
         //  <IconLogo />
         // </Link>
       )}
    </div>
  );


  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
    <StyledHeader>
      <nav>
        {prefersReducedMotion ? (
          <>
            {Logo}
            <div>
              <ol>
                {navLinks &&
                  navLinks.map(({url, name}, i) => (
                    <li key={i}>
                      // <Link to={url}>{name}</Link>
                    </li>
                  ))
                }
              </ol>
              <div>{ResumeLink}</div>
            </div>
            // <Menu />
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <>
                    {Logo}
                  </>
                </CSSTransition>
              )}
            </TransitionGroup>
            <div>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({url, name}, i) => (
                      <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                        <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms`}}>
                          <Link to={url}>{name}</Link>
                        </li>
                      </CSSTransition>
                    ))
                  }
                </TransitionGroup>
              </ol>
              <TransitionGroup component={null}>
                {isMounted && (
                  <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                    <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0 }ms`}}>
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </div>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
          )
        }
      </nav>
    </StyledHeader>
  )
}

export default Nav;
