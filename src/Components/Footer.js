import React from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWeixin, faLine } from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <div>
       
        <div className="footer">
          <div className="footer__items container">
            <div className='row'>
              <div className="col footer__contact">
                <div className="footer__contact-title">
                  <h2>聯絡我們</h2>
                </div>
                  <div className="row">
                    <div className="col">
                      <div className="footer__contact-item">
                          <FontAwesomeIcon icon={faWeixin} className="weixin" />  rich481025
                      </div>
                    </div>
                    <div className="col">
                      <div className="footer__contact-item">
                          <FontAwesomeIcon icon={faLine} className="line" />  rich481025
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col">
                      <div className="footer__contact-item">
                          <FontAwesomeIcon icon={faPhone} className="mobile" />  台灣: 886 - 932128875
                      </div>
                      </div>
                       <div className="col">
                      <div className="footer__contact-item">
                          <FontAwesomeIcon icon={faPhone} className="mobile" />  大陸: 886 - 932128875
                      </div>
                      </div>
                  </div>
                  <div className="row">
                  <div className="col">
                      <div className="footer__contact-item">
                          <FontAwesomeIcon icon={faEnvelopeSquare} className="mail" />  rich888@shinetours.net
                      </div>
                      </div>
                      <div className="col">
                      <div className="footer__contact-item">
                          <FontAwesomeIcon icon={faEnvelopeSquare} className="mail" />  richardsung80@gmail.com
                      </div>
                      </div>
                    </div>
                
              </div>
      
            </div>
          </div>
        </div>
    </div>

  );
}
 
export default Footer;
