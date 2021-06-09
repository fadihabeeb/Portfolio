import { useState } from 'react'
import "./contact.scss"
import emailjs from 'emailjs-com';


export default function Contact() {

    const [message, setMessage] = useState(false)
    var templateParams = {
        name: 'James',
        notes: 'Check this out!'
    };

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_12m61ed', 'template_nhoh0ci', e.target, 'user_nsLDCXsVAy8YqBf8uNJMz')
          .then((result) => {
              console.log(result.text);
              setMessage(true);

          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className="contact" id="contact">
            {/* <div className="left">
                <img src="assests/contact.jpg" alt="" />
            </div> */}
            <div className="right">
                <div className="container">
                    <h2> Contact me</h2>
                    <form onSubmit={sendEmail}>
                        <input type="text" placeholder="EMAIL" name="from_name" />
                        <input type="text" placeholder="SUBJECT" name="subject" />
                        <textarea placeholder="MESSAGE" name="message"></textarea>
                        <button type="submit"> SUBMIT</button>
                        {message && <span>Thanks, I'll reply ASAP :)</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}
