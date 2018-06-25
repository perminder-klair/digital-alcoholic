import React from 'react';
import Link from 'gatsby-link';

const TechItem = ({ data }) => (
  <div className="col-6 col-md-4 col-lg-3">
    <a href={`/tech/${data.slug}/`} target="_self">
      <a className="brand-item eq-height" style={{ height: 197.875 }}>
        <img src={data.image.file.url} alt={data.name} />
      </a>
    </a>
  </div>
);

export default TechItem;
