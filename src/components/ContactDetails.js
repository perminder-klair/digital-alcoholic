import React from 'react';
import Link from 'gatsby-link';

class ContactDetails extends React.Component {
  render() {
    const { contact } = this.props;

    return (
      <div className="col-md-6">
        <div className="grey-box">
          <div id="address-selector" className="overlay eq-height">
            <div id="address-NLD" className="address-container active">
              <div className="address-details">
                <h1>
                  We’re @{' '}
                  <Link to="/" className="change-address">
                    ZEIQ
                  </Link>
                </h1>
                <ul className="ul-custom-bullet">
                  <li>
                    <i className="saulticon-map" /> {contact.address}
                  </li>
                  <li>
                    <i className="saulticon-call" /> {contact.telephone}
                  </li>
                  <li>
                    <i className="saulticon-mail" /> {contact.email}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
