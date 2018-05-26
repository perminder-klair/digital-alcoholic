import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import WorkList from '../components/WorkList';

export default class Work extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: work } = data.allContentfulWork;

    return (
      <div>
        <Helmet title="Work | Zeiq" />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <WorkList
                introVisible={false}
                workList={work}
                buttonVisible={false}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export const query = graphql`
  query WorkQuery {
    allContentfulWork(sort: { fields: [order] }) {
      edges {
        node {
          id
          title
          slug
          image {
            file {
              url
            }
          }
          description {
            description
          }
          url
        }
      }
    }
  }
`;
