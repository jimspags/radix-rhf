import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const ComponentTemplates = ({ pageContext, data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(frontmatter);
  return (
    <Layout>
      {frontmatter.steps?.map((step, index) => (
        <div key={index}>
          <p>{step.description}</p>

          <code>
            <pre>{step.code.code}</pre>
          </code>
        </div>
      ))}
    </Layout>
  );
};

export default ComponentTemplates;

export const query = graphql`
  query ComponentTemplate($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        steps {
          description
          code {
            code
          }
        }
      }
    }
  }
`;
