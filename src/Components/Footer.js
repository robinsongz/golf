import React from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWeixin } from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <div>
       
        <div className="footer">
          <div className="footer__items container">
            <div className='row'>
              <div className="col footer__contact">
                <div className="footer__contact-title">
                  <h2>Contact</h2>
                </div>
                
                      <div className="footer__contact-item">
                          <FontAwesomeIcon icon={faWeixin} className="weixin" />  rich888
                      </div>
                      <div className="footer__contact-item">
                          <FontAwesomeIcon icon={faPhone} className="mobile" />  123-123-1231
                      </div>
                      <div className="footer__contact-item">
                          <FontAwesomeIcon icon={faEnvelopeSquare} />  rich888@shinetours.net
                      </div>
                
              </div>
              <div className="col">
                <div className="footer__contact-title">
                  <h2>Hi</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

  );
}
 
export default Footer;
