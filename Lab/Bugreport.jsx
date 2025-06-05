import React from 'react'
import { useState } from 'react';

const Bugreport = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [module, setModule] = useState("");
    const [error, setError] = useState({});
    const [submitted,setSubmitted] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newErrors ={};

        if(!title.trim()) newErrors.title = 'Bug title is required';
        if(!description.trim()) newErrors.description = 'Bug description is required';
        if(!module.trim()) newErrors.module = 'Please select a module';

        setError(newErrors);

        if(Object.keys(newErrors).length === 0) {
            setSubmitted(true);
        }

    };
    if (submitted) {
        return <p className='success-message'>BugReport submitted Successfully</p>
    }
  return (
    <div>
        <form className='bug-form' onSubmit={handleSubmit}>
            <h2>Tech Bug Repport</h2>

            <label>Bug Title:
                <input type="text" value={title} id="title" onChange={(e)=>setTitle(e.target.value)}
                className={error.title ? "input-error":''} />
                {error.title && <span className='error'>{error.title}</span>}
            </label><br /><br />
            <label>Description:
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)}
                    className={error.description?'input-error':''}></textarea>
                    {error.description && <span className='error'>{error.description}</span>}
            </label>
            <br /><br />
            <label>
                Affected Modules:
                <select value={module} onChange={(e)=>setModule(e.target.value)}
                    className={error.module?'input-error':''}>
                        <option value="">--Select Module--</option>
                        <option value="UI">UI</option>
                        <option value="API">API</option>
                        <option value="Database">Database</option>
                        <option value="Network">Network</option>
                    </select>
                    {error.module && <span className='error'>{error.module}</span>}
            </label>
                <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Bugreport;
