import React from 'react';
import Link from 'gatsby-link';

import WorkList from '../components/WorkList';

export default class Work extends React.Component {
  render() {
    return (
      <main id="content" className="white-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-container">
                <h2>Our Work</h2>
              </div>
            </div>
            <WorkList introVisible={false} />
          </div>
        </div>
      </main>
    );
  }
}
