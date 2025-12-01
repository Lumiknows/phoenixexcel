// components/Footer.js
export default function Footer(){
  return (
    <footer style={{
      borderTop:'1px solid #eee',
      padding:'24px 0',
      marginTop:48
    }}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>© {new Date().getFullYear()} Phoenix Excel Academy</div>
        <div style={{color:'var(--muted)'}}>© Neil Andre Ibona</div>
      </div>
    </footer>
  )
}
