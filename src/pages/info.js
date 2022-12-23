import React from 'react';
import { Link, graphql } from 'gatsby';

export default ({data}) => (
    <React.Fragment>
        <div>{data.site.siteMetadata.title}</div>
        <Link to="/">{data.site.siteMetadata.description}</Link>


    </React.Fragment>
)

export const query = graphql `
query {
    site{
        siteMetadata{
            author,
            description,
            title
        }
    }
}
`