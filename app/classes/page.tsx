import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Classes(){
  return (
    <>
      <Header/>
      <main className="container">
        <h1>Classes</h1>
        <ul>
          <li>Kindergarten</li>
          <li>Grade 1</li>
          <li>Grade 2</li>
          <li>Grade 3</li>
        </ul>
      </main>
      <Footer/>
    </>
  )
}
