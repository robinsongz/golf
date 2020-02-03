import React from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWeixin } from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <div>
       
        <div className="footer">
         
                <div className="item">
                    <FontAwesomeIcon icon={faWeixin} className="weixin" />  rich888
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faPhone} className="mobile" />  123-123-1231
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faEnvelopeSquare} />  rich888@shinetours.net
                </div>
            
        </div>
    </div>

  );
}
 
export default Footer;
