import * as React from "react";
import type { PageProps } from "gatsby";
import styled from 'styled-components';
import Layout from "@components/layout";

const StyledMainContainer = styled.main`
  counter-reset: section;
`



const IndexPage = ({ location }: PageProps) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <div>aaa</div>
    </StyledMainContainer>
  </Layout>
);
export default IndexPage

