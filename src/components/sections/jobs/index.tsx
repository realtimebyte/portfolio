import React, { useState } from 'react';
import { KEY_CODES } from '@utils/index';
import { graphql, useStaticQuery } from 'gatsby';

const Jobs = () => {

  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;

  const [tabFocus, setTabFocus] = useState<number>(0);
  const onKeyDown = (e: any) => {
    switch(e.key) {
      case KEY_CODES.ARROW_UP: 
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      case KEY_CODES.ARROW_DOWN:
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <h2 className='numbered-heading'>Where I've worked</h2>

      <div className='inner'>
        <div role="tablist" aria-label="Job tabs" onKeyDown={e => onKeyDown(e)}>
        </div>
      </div>
    </div>
  )
};

export default Jobs;