import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About(){
    return(
        <>
        <Header/>
        <main className="container py-4">
            <h1>About Our Ecommerce Platform</h1>
            <p>Welcome to our ecommerce platform! We are dedicated to providing customers with a seamless and enjoyable shopping experience from start to finish.</p>
            <p>Our mission is to offer a wide selection of high-quality products at competitive prices, coupled with exceptional customer service and fast shipping.</p>
            <p>At our ecommerce platform, we believe in the power of online shopping to connect people with the products they love, and we strive to make every interaction with our platform convenient, reliable, and secure.</p>
            <p>Thank you for choosing our ecommerce platform. We look forward to serving you and exceeding your expectations at every turn.</p>
        </main>
        <Footer/>
        </>
    )
}