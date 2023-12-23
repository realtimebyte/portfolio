import React, { useEffect, useState } from 'react';
import usePrefersReducedMotion from '@hooks/usePrefersReducedMotion';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils/index'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;
  
  @media (max-width: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 20px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;    
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const first = <h1>Hi, my name is</h1>;
  const second = <h2 className='big-heading'>Bruce Jin</h2>
  const third = <h3 className='big-heading'>I am a Passionate Developer.</h3>
  const four = (
    <>
      <p>
        I’m a senior software engineer specializing in building web and desktop application. 
        Currently, I’m focused on building Robo-Advisors Financial Service, client analyze-centered products
        at{' '}
        <a href="https://www.upwork.com/freelancers/~012b5325a3dff73073" target="_blank" rel="noreferrer">
          Upwork
        </a>
        .
      </p>
    </>
  )
  const five = (
    <a
      className="email-link"
      href="https://www.educative.io/projects/build-a-rest-api-using-asp-net-core-6"
      target="_blank"
      rel="noreferrer">
      Check out my course!
    </a>
  );

  const items = [first, second, third, four, five];
  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup content={null}>
          {isMounted && (
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay : `${i + 1}00ms`}}>{item}</div>
              </CSSTransition>
            ))
          )}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
}

export default Hero;