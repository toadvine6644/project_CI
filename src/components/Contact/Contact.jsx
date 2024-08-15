import React, { useState } from 'react'
import '../CSS/Contact.css'
import contactIcon1 from '../Assets/Images/contacticon1.svg'
import contactIcon2 from '../Assets/Images/contacticon2.svg'

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (name && email && phone) {
      alert('Thanks you for reaching out to our Customer Support! We will contact you via emal within 24 hours. You can also contact us directly through the following number: +8801611112222')
    } else {
      alert('The information is invalid! Please correct and Submit again.')
    }
  };

  return (
    <div className='contactContainer'>
            <div className='leftContact'>
                
                <h4 className='title1'><img src={contactIcon1} alt="" /> Call To Us</h4>
                <div className='description1'>We are available 24/7, 7 days a week.</div>
                <div className='description2'>Phone: +8801611112222</div>
                <hr />
                <h4 className='title2'><img src={contactIcon2} alt="" /> Write To Us</h4>
                <div className='description3'>Fill out our form and we will contact you within 24 hours.</div>
                <div className='email1'>Emails: customer@exclusive.com</div>
                <div className='email2'>Emails: support@exclusive.com</div>
            </div>
            <div className='rightContact'>
              <div className='upperInput'>
                <input className='input1' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name *'/>
                <input className='input1' type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email *'/>
                <input className='input1' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Your Phone *'/>
              </div>
              <div className='bottomInput'>
                <input className='input2' type="text" placeholder='Your Message'/>
              </div>
              <button onClick={handleSubmit} className='sendMess'>Send Message</button>
            </div>
    </div>
  )
}

export default Contact