import * as React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <section className="test">
        <h1 className>Input Field</h1>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
