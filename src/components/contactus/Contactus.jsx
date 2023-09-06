import "./Contactus.css";
import { TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import { useEffect, useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { modeContext } from "../../App";

import emailjs from '@emailjs/browser';


function Contactus() {
  const { colorMode} = useContext(modeContext);

  const form = useRef();

  const navigate=useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_70o4oqk', 'template', form.current, 'ZjMePZlpfng_2A2Jl')
      .then((result) => {
         alert("The email has been sent")
          navigate("/");
      }, (error) => {
          console.log(error.text);
      });
  };
   
  return (
    <div id="contact-page">
      <form ref={form} onSubmit={sendEmail}>
      <div id="contact-header-container">
        <h1 id="contact-header">אנחנו נחזור אליך</h1>
      </div>
      <div id="contact-container">
        <div id="contact-inputs">
          <div id="contact-name-input">
            <h3 className="contact-sub-titile">מי את/ה?</h3>
            <TextField
              label="Enter your name"
              className="contact-input-field"
              variant="outlined"
              required
              type="text"
              name="from_name"
            />
          </div>
          <div id="contact-Email-input">
            <h3 className="contact-sub-titile">להכניס אימייל</h3>
            <TextField
              label="Enter your Email"  
              className="contact-input-field"
              variant="outlined"
              required
              type="text"
              name="reply_to"
            />
          </div>
          <div id="contact-complaint-input">
            <h3 className="contact-sub-titile">קצת פרטים (כולל מספר טלפון)</h3>
            <TextField
              label="Enter your text"
              className={"contact-input-field"}
              variant="outlined"
              required
              type="text"
              multiline="true"
              rows={5}
              name="message"
            />
          </div>
        </div>
        <div id="contact-button-container">
          <button type="submit" id="contact-submit-complaint">שלח/י</button>
        </div>
      </div>
      </form>
      <br />
      <div className="parkit-info">
      <h1 id="contact-header">או שאתה תדבר איתנו:</h1>
        <div className="parkit-info-line">
          <div className="icon-parkit-line">
          {colorMode=="light"?
          <img
                className="icon-parkit-line"
                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-email-social-media-ui-tanah-basah-glyph-tanah-basah.png"
                alt="external-email-social-media-ui-tanah-basah-glyph-tanah-basah"
              />
              :
          <img
                className="icon-parkit-line"
                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-email-social-media-ui-tanah-basah-glyph-tanah-basah.png"
                alt="external-email-social-media-ui-tanah-basah-glyph-tanah-basah"
              />
          }
          </div>
          <div className="text-parkit-info">
            <a className="email-link-info" href="mailto:cheneylon1@gmail.com" target="_blank" rel="noopener noreferrer">cheneylon1@gmail.com</a>
          </div>
        </div>
        <br />
        <div className="parkit-info-line">
          <div className="icon-parkit-line">
            {colorMode=="light"?
          <img
                className="icon-parkit-line"
                src="https://img.icons8.com/external-others-inmotus-design/67/external-Phone-game-play-others-inmotus-design-2.png"
                alt="external-Phone-game-play-others-inmotus-design-2"
              />
              :
          <img
                className="icon-parkit-line"
                src="https://img.icons8.com/external-others-inmotus-design/67/FFFFFF/external-Phone-game-play-others-inmotus-design-2.png"
                alt="external-Phone-game-play-others-inmotus-design-2"
              />
            }          
          </div>
          <div className="text-parkit-info">
            <a className="email-link-info" href="tel:+972526552958" target="_blank" rel="noopener noreferrer">חן: 052-6552958</a>
          </div>
        </div>
        </div>
        <br />
       
      </div>
  );
}
export default Contactus;
