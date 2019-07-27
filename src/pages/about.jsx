import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'



const AboutPage = () => {
    return (
        <Layout>
            <h1>About Page</h1>
            <h2>Samsudeen M</h2>
            <h3>Founder of Startup.com</h3>
            <h4>An Entrepreneur</h4>
            <p>Contact me Up! <Link to="/contact" >Catch us!</Link></p>
        </Layout>
    )
}


export default AboutPage;