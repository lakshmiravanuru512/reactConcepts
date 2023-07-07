import React,{useState} from 'react';


const Froms = () => {
    const [formsData, setFormsData]=useState({name:"",email:"",message:""});
    const handleChange=(event)=>{
        const {name, value}=event.target;
        setFormsData((prevFormData)=>({...prevFormData,[name]:value}));
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`Name:${formsData.name}, Email:${formsData.email},Message:${formsData.message}`)
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name' >Name:</label>  <br></br>
            <input id='name' type='text' name='name' value={formsData.name} onChange={handleChange}/> <br></br>
            <label htmlFor='email' >Email:</label>  <br></br>
            <input id='email' type='text' name='email' value={formsData.email} onChange={handleChange}/> <br></br>
            <label htmlFor='message' >Message:</label>  <br></br>
            <textarea id='message' name='message' value={formsData.message} onChange={handleChange}/> <br></br>
            <button>Submit</button>
        </form>
        
        </div>
  )
}

export default Froms