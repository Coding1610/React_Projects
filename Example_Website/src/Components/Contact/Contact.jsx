import React from 'react'
import './Contact.css'
import { assets } from '../../Images/assets'

export default function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3a83e29b-05b5-42f1-b960-67a056e763a0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } 
    else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
    <div className='contact'>
        <div className='contactCol'>
            <h3>Send us a message <img src={assets.msg_icon} alt="msg_icon" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li> <img src={assets.mail_icon} alt="mail_icon" /> Contact@Yash016.dev</li>
                <li> <img src={assets.phone_icon} alt="phone_icon" /> +1 098-234-1567</li>
                <li> <img src={assets.location_icon} alt="location_icon" /> 77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
            </ul>
        </div>
        <div className='contactCol'>
            <form onSubmit={onSubmit}>
              <label>Your Name</label>
              <input type="text" name='name' placeholder='Enter your name..' required/>
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder='Enter your mobile number..' required/>
              <label>Write your message here</label>
              <textarea name="messaeg" rows="6" placeholder='Enter your message..' required></textarea>
              <button type="submit" className='btn darkBtn'>Submit Now <img src={assets.white_arrow_icon} alt="arrow_icon" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
    </>
  )
}