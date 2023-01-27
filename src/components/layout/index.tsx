import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Head from '@components/head';
import Nav from '@components/nav';
import Loader from "@components/loader";
import Social from "@components/social";
import Email from "@components/email";
import theme from "@styles/theme";
import GlobalStyle from "@styles/GlobalStyle";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


const Layout = (props: any) => {
  const { children, location } = props;
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  // Scroll Moving to hash Links of the Menu.
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      })
    }
  }

  useEffect(() => {
    if (isLoading) {
      return;
    }
    // Scroll To Selected Section
    if (location.hash) {
      const id = location.hash.substring(1);
      const timeout = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
          element.focus();
        }
      }, 0);
      return () => {
        clearTimeout(timeout);
        handleExternalLinks();
      };
    }
    // Move the window scroll to section height;
    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      {/* Set Header Configuration */}
      <Head />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <a className="skip-to-content" href="#content">
            Skip to Content
          </a>
          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ):(
            <StyledContent>
              <Nav isHome={isHome} />
              <Social isHome={isHome} />
              <Email isHome={isHome}/>
              {children}
            </StyledContent>
          )}
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout;
