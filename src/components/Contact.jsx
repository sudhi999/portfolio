import { useState,useRef } from "react"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import {EarthCanvas} from "./canvas"
import { SectionWapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { motion } from "framer-motion"
import { events } from "@react-three/fiber"

//Jw1nMmFbXcMohsRqe
//template_2i3ecff
//service_01rftro


const Contact = () => {
  const formref = useRef()
  const [error,seterror] = useState(false)
  const [form,setform] = useState({name:"",email:"",message:""})
  const [loading,setloading] = useState(false)
  const handleChange = (e) => {
    const {name,value} = e.target 
    setform({...form,[name] : value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true)
    if ((form.name !== "") && (form.email !== "") && (form.message !== "")){
      seterror(false)
      emailjs.send('service_01rftro','template_2i3ecff',
      {
        from_name : form.name,
        to_name : 'sudheer',
        from_email : form.email,
        to_email : 'bandarusudheer75@gmail.com',
        message:form.message},'Jw1nMmFbXcMohsRqe')
        .then(() => {
          setloading(false)
          alert('Thankyou')
          setform({name:"",email:"",message:""})
        },(error) => {
          setloading(false)
          alert('something went wrong')
        }
        )
    }else{
      seterror(true)
      setloading(false)
    }

    
  }
  
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn('left','tween',0.2,1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl" >
        <p className={styles.sectionSubText} >Get in touch</p>
        <h3 className={styles.sectionHeadText} >Hire me.</h3>
        <form ref={formref} onSubmit={handleSubmit} className="mt-5 fklex flex-col gap-8">
          <label className="flex flex-col " >
            <span className="text-white font-medium mb-4 mt-4" >Your Name</span>
            <input className="bg-teritary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" type="text" name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" />
          </label>
          <label className="flex flex-col " >
            <span className="text-white font-medium mb-4 mt-4" >Your Email</span>
            <input className="bg-teritary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" type="email" name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" />
          </label>
          <label className="flex flex-col " >
            <span className="text-white font-medium mb-4 mt-4" >Your Message</span>
            <textarea className="bg-teritary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" rows='7'  name='message' value={form.message} onChange={handleChange} placeholder="What do you want to say?" />
          </label>
          <p className={`${error? "text-red-900 text-bolder font-medium mb-4 mt-4" : 'hidden'}`} >* Please enter all the fields</p>
          <div className="text-center">
            <button className="bg-terttary mt-4 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary" type="submit" > {loading?'Sending' : 'Send'} </button>
          </div>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right','tween',0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWapper(Contact,'contact')