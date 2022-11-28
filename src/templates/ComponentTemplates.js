import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ComponentTemplates = ({ pageContext, data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(pageContext);
  console.log(frontmatter);
  return (
    <Layout>
      {frontmatter.steps?.map((step, index) => (
        <div key={index}>
          <p>{step.description}</p>
          <div className="gatsby-highlight">
            <pre>
              <code className={`language-${step.code.lang}`}>{step.code.code}</code>
            </pre>
          </div>
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
            lang
          }
        }
      }
    }
  }
`;
