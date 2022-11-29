import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import "./Sidebar.css";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      components: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(components)/" } }
        sort: { frontmatter: { number: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  `);
  const { nodes } = data.components;

  return (
    <ScrollArea.Root className="ScrollAreaRoot">
      <ScrollArea.Viewport className="ScrollAreaViewport">
        <div className="flex flex-col px-4 py-2">
          <div className="Text mb-6">Components</div>

          {nodes.map((node) => {
            if (!node.frontmatter.title) return;
            return (
              <Link
                activeClassName="bg-primary"
                className="Tag nav-item"
                to={`/components/${node.frontmatter.path}`}
                key={node.frontmatter.path}
              >
                {node.frontmatter.title}
              </Link>
            );
          })}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  );
};

export default Sidebar;
