import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formEl = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        //   third party api
        //                      your services id , YOUR_TEMPLATE_ID,                   YOUR_PUBLIC_KEY
        emailjs.sendForm('service_m6ulxfj', 'template_8zhkksn', formEl.current, '-1q8xDLNDb75DIfCO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    // formu sifirlamaq alinmadi XXXX
    // formEl.current.reset()

    return (
        <div className="contacto mt-5">
            <div className="contact py-3">
                <div className="contacte">
                    <h1 className='text-white text-center'>Bizimlə əlaqə</h1>
                    <div className="row justify-content-around align-items-center">
                        <div className="contact-img col-12 col-md-6 col-lg-6">
                            <img src="https://res.cloudinary.com/dlioaagoi/image/upload/v1691441007/contact-1024x763_qofmmp.png" alt="" />
                        </div>

                        <div className="contact-info col-12 col-md-6 col-lg-6">
                            <img src="https://res.cloudinary.com/dlioaagoi/image/upload/v1690713945/req-frm-mckp_iosupe.png" alt="" />
                                    <form className="contact-emailjs" ref={formEl} onSubmit={sendEmail} action="action_page.php">

                                        <label for="fname">First Name</label>
                                        <input type="text" id="fname" name="name" placeholder="Your name.." />

                                        <label for="lname">Last Name</label>
                                        <input type="text" id="lname" name="surname" placeholder="Your last name.." />

                                        <label for="lname">Email address</label>
                                        <input type="text" id="lname" name="email" placeholder="Your write email address.." />

                                        <label for="country">Country</label>
                                        <select id="country" name="country">
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Turkish">Turkish</option>
                                            <option value="USA">USA</option>
                                        </select>

                                        <label for="subject">Subject</label>
                                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                                        <input type="submit" value="Submit" />

                                    </form>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact