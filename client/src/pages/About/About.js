import "./about.css"

// Meta Data
import { Helmet } from 'react-helmet';

function About() {

    return (
        <>
        <Helmet>
            <title>Yuma Way | About Us</title>
            <meta name="description" content="Our Mission Is To Provide High-Quality Cannabis Products At Affordable Prices. Click To Find Out More."/>
        </Helmet>
        <section class="about">
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="aboutHeader">
                            <div class="centeredImageContainer">
                                <img src="/images/about/marijuana-about-top-1800-compressed.jpg" alt="YumaWay Logo with Cannabis Background"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="aboutPeople aboutYumaBorder">
                            <div class="textContainer">
                                <h1>Friendly Staff, Phenominal Product</h1>

                                <div class="offerCopy">
                                    <p>
                                        Established in Denver in 2016, Yuma Way retail, cultivation, and consumption facilities keep our customers smiling across our many locations.  We pride ourselves on being industry leaders in education, providing a warm and safe space for consumption, and sharing our knoweldge and support for fellow cannabis businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="aboutImageContainer">
                            <img src="/images/about/aboutPageImageOne.jpg" alt="Our Budtenders Pick the Highest Quality Cannabis Flower for Our Customers"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="aboutPeople aboutYumaBorder">
                            <div class="textContainer">
                                <h1>Find a Dispensary Near You</h1>

                                <div class="offerCopy">
                                    <p>
                                        <a href="/locations" class="aLink">Use our store locator</a> to find the most convenient cannabis dispensary near you. We have seven cannabis dispensaries in cities across Colorado and Michigan, with plans of expanding to many more cities and states in the near future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="aboutImageContainer">
                            <img src="/images/about/aboutPageImageTwo.jpg" alt="Cannabis Flower Poured on Table"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="aboutPeople aboutYumaBorder">
                            <div class="textContainer">
                                <h1>Interested in Starting a Cannabis Business?</h1>

                                <div class="offerCopy">
                                    <p>
                                        If you’re interested in learning how to start your own cannabis business, we offer mentorship opportunites for new cannabis businesses in retail, manufacturing, cultivation and more. Together, we can do it all! Email <a href="mailto:Rita.Tsalyuk@YumaWay.com" class="aLink">Rita.Tsalyuk@YumaWay.com</a> with your questions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="aboutImageContainer">
                            <img src="/images/about/aboutPageImageThree.jpg" alt="Cannabis Joint on a Chessboard" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default About