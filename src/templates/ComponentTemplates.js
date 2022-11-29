import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const ComponentTemplates = ({ pageContext, data }) => {
  const { frontmatter } = data.markdownRemark;
  console.log(data);
  return (
    <Layout>
      <div>
        <h1 className="mb-16">{frontmatter.title}</h1>
        <article className="mt-12">
          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </article>
      </div>
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
      }
    }
  }
`;
