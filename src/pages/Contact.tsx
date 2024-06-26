import { useRef } from 'react'
import Button from '../components/Button'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import { useAlertContext } from '../hooks/useAlertContext';

// interface Inputs {
//   firstname: string;
//   lastname?: string;
//   company?:string;
//   email:any;
//   phone?:any;
//   message:any;
// }


const Contact = () => {

  // const [inputs, setInputs] = useState<Inputs>();
  const form: any = useRef();
  const { refFirstName, refEmail, refMessage, alert, showAlert }: any = useAlertContext();

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setInputs(values => ({...values, [name]: value}))
  // }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // setInputs({})

    if (!refFirstName.current.value && !refEmail.current.value && !refMessage.current.value) {
      showAlert(true, 'danger', '#ef4444', '#fee2e2', 'Invalid credentials', 'Please fill all required fields');
    } else {
      emailjs
        .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, form.current, {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        })
        .then(
          () => {
            // console.log('SUCCESS!');
            showAlert(true, 'success', '#14b8a6', '#ccfbf1', 'Valid credentials', "Your email was sent successfully! Thank you for reaching out to me :). I'll get back to you as soon as possible.");
          },
          () => {
            // console.log('FAILED...', error.text);
            showAlert(true, 'danger', '#ef4444', '#fee2e2', 'Invalid credentials', 'Email sent faield try again. Some of the values you entered do not work. Please check again.');
          },
        );
      form.current.reset();

    }
  }

  return (
    <section id='contact' className="contacts-wrapper bg-[#f4f2ed] text-gray-700 flex justify-center ">
      <div className="contacts-container flex flex-col max-w-[1366px] px-2 py-[50px] lg:py-[100px] md:px-4  w-full">
        <div className="title font-saintecolombe text-[65px] md:text-[148px] lg:text-[176px] text-[#32512a] text-center">Contact</div>

        <div className="contacts-info flex flex-col lg:flex-row gap-16 mt-3">

          <div className="left basis-1/2 flex flex-col  gap-4 font-obviously lg:items-end">
            <span className="text-[26px] font-bold underline">Contact Info</span>
            <span className="text-[12px] mb-4">Have something to say? Fill up the form or send email.</span>

            <div className="address flex flex-row gap-2 text-[12px] p-2 border-2 border-gray-300 rounded-md">
              <div className="icon justify-center items-center flex">
                <IoHomeOutline className="w-[50px] h-[50px]" />
              </div>
              <div className="info flex flex-col gap-1">
                <span className="font-bold">Address</span>
                <span className="font-normal">655, Welipennagahamulla, Kuliyapitiya</span>
                <span className="font-normal">Sri Lanka</span>
              </div>
            </div>

            <div className="email flex flex-row gap-2 text-[12px] p-2 border-2 border-gray-300 rounded-md">
              <div className="icon justify-center items-center flex">
                <MdOutlineMailLock className="w-[50px] h-[50px]" />
              </div>
              <div className="info flex flex-col gap-1">
                <span className="font-bold">Email</span>
                <span className="font-normal">rpsgayantha@gmail.com</span>
              </div>
            </div>


          </div>

          <div className="right basis-1/2 font-obviously ">
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="names flex flex-row gap-10 ">
                <div className="first-name basis-1/2 flex flex-col gap-1">
                  <label htmlFor="first-name" className="block font-semibold text-[12px] after:content-['*'] after:ml-0.5 after:text-red-500">First name</label>
                  <input
                    // value={inputs?.firstname || ""}
                    // onChange={handleChange} 
                    ref={refFirstName}
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="border-2 border-gray-300 p-2 text-[12px] w-full focus:outline-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent " placeholder="Your First Name" required />
                </div>

                <div className="last-name basis-1/2 flex flex-col gap-1">
                  <label htmlFor="last-name" className="block font-semibold text-[12px]">Last name</label>
                  <input
                    // value={inputs?.lastname || ""}
                    // onChange={handleChange} 
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="border-2 border-gray-300 p-2 text-[12px] w-full focus:outline-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your Last Name" />
                </div>
              </div>

              <div className="company flex flex-col gap-1">
                <label htmlFor="company" className="block font-semibold text-[12px]">Company</label>
                <input
                  // value={inputs?.company || ""}
                  // onChange={handleChange} 
                  type="text"
                  id="company"
                  name="company"
                  className="border-2 border-gray-300 p-2 text-[12px] w-full focus:outline-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your Company Name" />
              </div>

              <div className="email flex flex-col gap-1">
                <label htmlFor="email" className="block font-semibold text-[12px] after:content-['*'] after:ml-0.5 after:text-red-500">Email</label>
                <input
                  // value={inputs?.email || ""}
                  // onChange={handleChange} 
                  ref={refEmail}
                  type="email"
                  id="email"
                  name="email"
                  className="border-2 border-gray-300 p-2 text-[12px] w-full focus:outline-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your Email Address" required />
              </div>

              <div className="phone flex flex-col gap-1">
                <label htmlFor="phone" className="block font-semibold text-[12px]">Phone number</label>
                <input
                  // value={inputs?.phone || ""}
                  // onChange={handleChange} 
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border-2 border-gray-300 p-2 text-[12px] w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your Phone Number" />
              </div>

              <div className="message flex flex-col gap-1">
                <label htmlFor="message" className="block font-semibold text-[12px] after:content-['*'] after:ml-0.5 after:text-red-500">Message</label>
                <textarea
                  // value={inputs?.message || ""}
                  // onChange={handleChange} 
                  ref={refMessage}
                  id="message"
                  name="message"
                  className="border-2 border-gray-300 p-2 text-[12px] h-32 w-full focus:outline-none rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none" placeholder="Your message" required></textarea>
              </div>

              <Button value="Send" />
              <div className="text-[10px] text-gray-600">
                If you are not a fan of forms, you can email me at " rpsgayantha@gmail.com "
              </div>
              <div>{alert.show && <Alert {...alert} removeAlert={showAlert} />}</div>


            </form>
          </div>


        </div>

      </div>
    </section>
  )
}

export default Contact