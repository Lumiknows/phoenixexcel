import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="container" style={{paddingTop:36}}>
          <h2 style={{marginTop:0}}>About our school</h2>
          <p>Phoenix Excel Academy is a friendly primary school. We focus on growth and safe learning. We teach core subjects. We support parents and community.</p>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:18,marginTop:24}}>
            <div style={{padding:18,borderRadius:6,boxShadow:'0 2px 6px rgba(0,0,0,0.04)'}}>
              <h3>Quality teaching</h3>
              <p>No fuss. Lessons that engage children.</p>
            </div>
            <div style={{padding:18,borderRadius:6,boxShadow:'0 2px 6px rgba(0,0,0,0.04)'}}>
              <h3>After school</h3>
              <p>Clubs and activities every week.</p>
            </div>
            <div style={{padding:18,borderRadius:6,boxShadow:'0 2px 6px rgba(0,0,0,0.04)'}}>
              <h3>Safe campus</h3>
              <p>We keep children safe and supported.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
