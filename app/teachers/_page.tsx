'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Teachers(){
  const [form, setForm] = useState({name:'',email:'',phone:'',message:''})
  const [status, setStatus] = useState(null)

  async function submit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const res = await fetch('/api/apply', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(res.ok){
        setStatus('sent')
        setForm({name:'',email:'',phone:'',message:''})
      } else {
        setStatus('error: '+(data?.error||res.status))
      }
    } catch(err){
      setStatus('error: '+err.message)
    }
  }

  return (
    <>
      <Header/>
      <main className="container">
        <h1>Teachers</h1>
        <p>If you want to apply to teach with us please fill the short form.</p>

        <form onSubmit={submit} style={{maxWidth:600,marginTop:18}}>
          <label style={{display:'block',marginBottom:8}}>Full name</label>
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required style={inputStyle}/>
          <label style={{display:'block',marginTop:12,marginBottom:8}}>Email</label>
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} type="email" required style={inputStyle} />
          <label style={{display:'block',marginTop:12,marginBottom:8}}>Phone</label>
          <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} style={inputStyle} />
          <label style={{display:'block',marginTop:12,marginBottom:8}}>Message</label>
          <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={5} style={{...inputStyle}}/>

          <div style={{marginTop:12}}>
            <button type="submit" style={{
              background:'var(--accent)', color:'#fff', border:0, padding:'10px 16px', borderRadius:6
            }}>Apply</button>
            <span style={{marginLeft:12}}>{status && <em>{status}</em>}</span>
          </div>
        </form>
      </main>
      <Footer/>
    </>
  )
}

const inputStyle = {
  width:'100%',
  padding:'10px 12px',
  borderRadius:6,
  border:'1px solid #ddd',
  boxSizing:'border-box'
}
