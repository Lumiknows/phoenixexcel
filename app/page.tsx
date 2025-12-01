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
          <p>Phoenix Excel Academy is a friendly primary school for children with special needs. We focus on growth, safe learning, and individualized support. Our teachers provide personalized attention to help every child reach their potential.</p>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:18,marginTop:24}}>
            <div style={{padding:18,borderRadius:6,boxShadow:'0 2px 6px rgba(0,0,0,0.04)'}}>
              <h3>Individualized Learning</h3>
              <p>Lessons tailored to each child’s needs and abilities.</p>
            </div>
            <div style={{padding:18,borderRadius:6,boxShadow:'0 2px 6px rgba(0,0,0,0.04)'}}>
              <h3>Therapeutic Support</h3>
              <p>Speech, occupational, and behavioral support available.</p>
            </div>
            <div style={{padding:18,borderRadius:6,boxShadow:'0 2px 6px rgba(0,0,0,0.04)'}}>
              <h3>Safe and Nurturing Environment</h3>
              <p>We prioritize safety, comfort, and emotional well-being.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
