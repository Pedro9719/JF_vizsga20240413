import React from 'react'
import { useState } from 'react'

export const Contact = () => {
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData={email,message,timestamp:Date.now()}
        console.log(formData);
    }
    return (
        <div className='container p-3'>
            <section>
                <h2>Lépj velünk kapcsolatba</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Üzenet:</label>
                    <textarea className="form-control" 
                    value={message} onChange={(e)=>setMessage(e.target.value)} rows="3"></textarea>
                </div>
                <button className="btn btn-primary">Küldés</button>
                </form>
            </section>
        </div>
    )
}

