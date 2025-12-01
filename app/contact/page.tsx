import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Contact Us</h1>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Email:</span> <a href="mailto:phoenixexcelacad@az.edu" className="text-blue-500 hover:underline">phoenixexcelacad@az.edu</a>
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Phone:</span> <a href="tel:+639123456789" className="text-blue-500 hover:underline">+63 912 345 6789</a>
          </p>
          <p className="text-gray-600">
            Our team is happy to answer your questions. Feel free to reach out via email or phone during our office hours.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
