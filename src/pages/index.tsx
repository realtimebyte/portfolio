import * as React from "react";
import type { PageProps } from "gatsby";
import styled from 'styled-components';
import Layout from "@components/layout";
import Hero from "@components/sections/hero";
import About from "@components/sections/about";
// import Jobs from "@components/sections/jobs";


const StyledMainContainer = styled.main`
  counter-reset: section;
`
const IndexPage = ({ location }: PageProps) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      {/* <Jobs /> */}
    </StyledMainContainer>
  </Layout>
);
export default IndexPage

