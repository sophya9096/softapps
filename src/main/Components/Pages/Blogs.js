import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./Blogs.module.css";
import { Helmet } from "react-helmet";
import mobileDev from "../../../shared/assets/Images/Mobile-Development.png";
import webDev from "../../../shared/assets/Images/Web-Development.png";
import prodDesign from "../../../shared/assets/Images/Product-Design.png";
import Footer from "../Navigations/Footer";
import Logo from "../../../shared/assets/Images/Logo.png.svg";
import Whatsapp from "../../../shared/assets/Images/Whatsapp.png";
import Email from "../../../shared/assets/Images/Email.png";
import Call from "../../../shared/assets/Images/Call.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Blogs = (props) => {
    const { header, exploreStateHandler } = props;
    const [show, setShow] = useState(false);

    const [blogMode, setBlogMode] = useState(0);
    const params = useParams().id;

    const title = ["", "Web Development - SoftApps.io", "Mobile Development - SoftApps.io", "Product Design - SoftApps.io"];
    const sites = [
        "",
        "web-development",
        "mobile-development",
        "product-design",
        "seo-digitalMarketing",
        "audio-video-production",
        "IT-support",
    ];

    const images = ["", webDev, mobileDev, prodDesign];
    const blogHeading = [
        "",
        "Our passionate team of developers has deep knowledge and expertise in world-class android apps reactive native",
        "We offer a team of adept, skill-full, and eager developers for your iOS React Native solutions",
        "We transform your ideas into digital means. A user-friendly and engaging interface will help you in grabbing clients",
        "We Offer a highly obtimized and strong SEO (Search Engine Optimization) and the Digital Marketing For your Business.",
        "Add value to your content and enhance it with our Creative Video & Audio Production Studio.",
        "We Have Fully responsible and cooperative It Support team that will guide you and help you with a better experience",
    ];

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        if (params === "web-development") setBlogMode(1);
        if (params === "mobile-development") setBlogMode(2);
        if (params === "product-design") setBlogMode(3);
        if (params === "seo-digitalMarketing") setBlogMode(4);
        if (params === "audio-video-production") setBlogMode(5);
        if (params === "IT-support") setBlogMode(6);
        // else {
        //     history.push("/");
        // }
    }, [params]);

    const pushHeight = () => {
        setShow(!show);
    };

    let content0 = (
        <div id="home" className={classes.Header}>
            <div className={classes.HeaderContainer}>
                <div className={classes.HeaderContainerLogo}>
                    <Link to="/">
                        <img alt="" src={Logo} />
                    </Link>
                </div>
                <div onClick={pushHeight} className={classes.HeaderBurger}>
                    <span className={[show && classes.topDiv]}></span>
                    <span className={[show && classes.middleDiv]}></span>
                    <span className={[show && classes.bottomDiv]}> </span>
                </div>
            </div>
            <div className={[classes.HeaderMenu, show && classes.height].join(" ")}>
                <p onClick={pushHeight}>
                    <Link to="/#home" style={{ display: show ? "block" : "none" }}>
                        Home
                    </Link>
                </p>
                <p onClick={pushHeight}>
                    <Link to="/#services" style={{ display: show ? "block" : "none" }}>
                        Services
                    </Link>
                </p>
                <p onClick={pushHeight}>
                    <Link to="/#portfolio" style={{ display: show ? "block" : "none" }}>
                        Portfolio
                    </Link>
                </p>
                <p onClick={pushHeight}>
                    <Link to="/#career" style={{ display: show ? "block" : "none" }}>
                        Career
                    </Link>
                </p>
                <p onClick={pushHeight}>
                    <Link to="/#about" style={{ display: show ? "block" : "none" }}>
                        About Us
                    </Link>
                </p>
                <p onClick={pushHeight}>
                    <Link to="/#contact" style={{ display: show ? "block" : "none" }}>
                        Contact Us
                    </Link>
                </p>
            </div>
        </div>
    );

    let content;

    if (blogMode === 1) {
        content = (
            <div className={classes.Blog}>
                <h1 data-aos="fade-left" style={{ fontSize: "1.8rem" }}>
                    Web App Development
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    Progressive mobile applications are in fact a combination of creative software and desktop formats. The android device
                    designers are continuously upgrading to SDKs and paradigms. Many companies interested in cellular technology find
                    innovative approaches to hit the top. In the US, there have been quite a few smartphone device creation packages. That
                    is pretty luxurious in the world and will help you use your office skills. For achieving success in the ground, you need
                    to own a professional, attractive Web App development. That’s what SoftApps.io offers. When you have a website, there
                    are no walls between success and your business.
                </p>
                <h1 data-aos="fade-right" style={{ fontSize: "1.8rem" }}>
                    Website Development
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    However, With the era turning into achievable goals at a fast speed, there are many devices. In all of them that people
                    use and expect a smooth user experience. The protocols and standards of quality assurance are applied throughout the
                    development. SoftApps.io provides quality assurance teams use the latest automated tools the project delivered is of the
                    highest quality. Our QA experts work closely with our engineering team to churn out a streamlined product that through
                    creativity brings tangible value to your market. <br></br>
                    <br></br>Our deployment methodology is flawless and allows the developed application to perform exceptionally well. We
                    include the application services to the iTunes AppStore and GooglePlay store. We provide support services round the
                    clock after a mobile application has been delivered.
                </p>
            </div>
        );
    }

    if (blogMode === 2) {
        content = (
            <div className={classes.Blog}>
                <h1 data-aos="fade-right" style={{ fontSize: "1.8rem" }}>
                    Mobile App Development
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    We live in an age where everyone’s got a computer in his back. About half of the world’s mobile users say “they can’t
                    survive without their mobile”Our highly qualified software engineers build device architectures that ensure the full
                    functionality of the mobile devices. It is done by following strategies that promote the lowest overheads. Mobile App
                    Development is the solution for the modern era.<br></br> <br></br>We use a mobile protection model from the initial
                    implementation level, which finds the best balance between accessibility and risk reduction. Using a user-centric
                    philosophy, we create applications with simple interfaces and outstanding functionality that offer gratifying mobile
                    experience and outshine others.
                </p>
                <h1 data-aos="fade-left" style={{ fontSize: "1.8rem" }}>
                    Android Development
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    We code software that delivers efficiency and ensures interoperability by integrating with current infrastructures and
                    holding margin in their architecture for the potential introduction of new technology and protocols. However, For iOS
                    development, In line with Apple’s User Interface Guide, elegant and physically appealing technology principles,
                    templates, and functionalities. Premium download on apple AppStore and GooglePlay store AppStore approval as a
                    conditionality for project sign-off and final activation of payment requirement by AppStore approval
                    <br></br>
                    <br></br>
                    Our highly qualified development team designs projects with the best existing platforms on the market. They design
                    smartphone apps that are highly engaging and power-packed with features. Additionally, Our systems are structurally
                    stable and perform exceptionally. Depending on the specifications of the customer our mobile apps are built in both
                    native and hybrid platforms.
                    <br></br>
                    <br></br>
                    SoftApps.io is a globally trusted software company in Pakistan with a zeal for perfection that provides several services
                    including mobile app development services in the town. SoftApps.io does not deliver mobile apps only, but delivers
                    trust, ethics, and confidentially too! Under the umbrella of mobile app development services; we proffer Android app
                    development and iOS app development too.
                    <br></br>
                    <br></br>
                    Our highly experienced developers know how to create eye-catchy and innovative mobile apps. Our reputation in the market
                    has increased by ten-fold due to serving on time, with promised quality.
                </p>
                <h1 data-aos="fade-right" style={{ fontSize: "1.8rem" }}>
                    IOS Development
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    In the present era, we cannot refuse the need for mobile apps for firms and businesses. According to research, people
                    spend 162 minutes daily approximately on cell phones. Mobile apps can increase business exposure and promote the
                    visibility of the firm. Concomitantly; more exposure, more sales, more revenue. Secondly, mobile apps also enable us to
                    keep track of consumer’s choices, behavior patterns, preferences, and activities. This accumulated data will help firms
                    to know about what consumer is looking for and how can they improve customer experience.
                    <br></br>
                    <br></br>
                    Moreover, mobile apps succor to create brand awareness. People tend to remember what they see repeatedly. Once if they
                    have downloaded the app, the engaging features of the app can make a customer loyal to the brand. The in-app features
                    like promotions and offers to convince the user to download the app. You can consider food apps here. Instead of
                    ordering through landlines, people prefer ordering online through apps. This is only because food apps have different
                    ongoing discounts and promotions. Moreover, This can also be counted as online marketing.
                    <br></br>
                    <br></br>
                    We as a mobile app development company hire developers that have rich experience in designing scalable, engaging apps
                    that can be accessed through different gadgets like tablets, mobile phones, and desktop. Eventually, This enables a
                    broader range of audiences to access apps.
                    <br></br>
                    <br></br>
                    Our professional developers will begin with a clean slate. Prioritize your requirements and suggest to you what can be
                    done to get even better results through demos and meetings. You will receive will updates at every step as we believe in
                    transparent communication. Once the app is ready, we’ll give it a test drive before launching it for the users.
                    <br></br>
                    <br></br>
                    SoftApps.io listed among Pakistan top software houses due to its professionalism, quality of work, and commitments. We
                    offer many other services too. Mobile App development is a chunk of our services. The rest piece is huge. You can
                    request a quote now!
                </p>
            </div>
        );
    }

    if (blogMode === 3) {
        content = (
            <div className={classes.Blog}>
                <h1 data-aos="fade-right" style={{ fontSize: "1.8rem" }}>
                    UI and UX Designing
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    We provide a team of highly experienced, professional, and devoted UI and UX Prototypes & Designing. They work on the
                    overall functionality, system, and feel of the website. The primary goal of our developers is to provide user
                    satisfaction and user engagement. Our UI and UX Designing experts have in-depth knowledge of aesthetic interfaces
                    keeping creativity in the main course. They conduct extensive research and come up with UI and UX Prototypes & Designs
                    strategies based on your goals or target.<br></br> <br></br>Our developers further possess a keen knowledge about CSS
                    extension languages (Less, Sass), HTML5, MongoDB, plugins, node packages, and CSS preprocessor tool. They are very
                    proficient in using the command line and Git version control. Creation of a user friendly, yet the engaging interface is
                    a mutual goal of both; i.e. UI and UX Designing. Our architecture department has developed various types of applications
                    and operating structures for all the major industries. You can rely on their diligent study of the root cause, the
                    knowledge of system architecture and animation design, a detailed post-mortem, and more. You’ll get a full quality
                    product which is similarly stunning and simple to use on all platforms.
                </p>
                <h1 data-aos="fade-left" style={{ fontSize: "1.5rem" }}>
                    UI and UX Designing{" "}
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    Our developers have a huge collection of themes and ideas. You can scroll through them and select your favorite one. On
                    the other hand, if you have any design in your mind, you can suggest that and our savvy pros would continue with your
                    suggested design. It all begins with a brief. You wave a signal to us and consider it done. We respect the validated
                    philosophy of UI / UX, but at the same time we embrace revolutionary UI / UX principles and in the area of Artificially
                    Intelligent, Virtual and Augmented Reality, and 3D Animation constantly grow. Our UI / UX design services express the
                    meaning of the company, enhancing and turning the business-to-customer experience into beneficial market opportunities.
                    <br></br>
                    <br></br>
                    In a nutshell, UI and UX designing is not only about creating an ornamental interface but also about the back end. A
                    good designer would always keep the application’s presentation and usability in mind. SoftApp.io isn’t only about
                    delivering apps, but it delivers trust and a whole new level of user experience. Clients want to develop your product
                    with a team mapping out a simple design plan, hitting targets, and achieving a spot-on end result? Switch to UI and UX
                    tools provided by SoftApps.io, Our design team is a small design lab inside a big tech firm that lets you rapidly and
                    efficiently create an interactive app.
                </p>
            </div>
        );
    }

    if (blogMode === 4) {
        content = (
            <div className={classes.Blog}>
                <h1 data-aos="fade-right" style={{ fontSize: "1.8rem" }}>
                    SEO & Digital Marketing
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    Google and other search engines have access to all internet knowledge, and are working hard to organize or index it
                    effectively. It is such that when they get a search question they will give customer, accurate and usable search
                    results. Although the search algorithm for Google is strongly confidential, certain themes and habits have been
                    identified by SEO researchers on how it goes about finding the best knowledge for consumers.
                    <br />
                    <br />
                    Apply to that the many patents held by the world's largest search engine and the statements it released of several
                    changes to the search algorithm, and we've got a pretty credible means of knowing what's going to help the web pages
                    stand out.
                    <br />
                    <br />A well-rounded organic search strategy requires three types of SEO: on-page SEO, Technical SEO, and off-page SEO.
                    This would be much simpler to coordinate and implement your optimization strategies by breaking down your approach and
                    talking about SEO in these three groups.
                </p>
                <h1 data-aos="fade-left" style={{ fontSize: "1.8rem" }}>
                    SEO & Digital Marketing
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    In this post, we will examine any form of SEO and how relevant they are to your overall marketing strategy. In addition,
                    we'll give you various forms of SEO resources that can help you boost efficiency in each group.
                    <br />
                    <br />
                    Keyword research: Consider the right possible keywords on a web page Creation of material: Publishing good quality
                    content that focuses on specific keywords. Optimization of keywords: Using the goal keyword in all the right ways and
                    use a strong SEO meta tag. Alexa provides resources for dealing in all forms of on-page SEO. Using our Keyword
                    Difficulty Tool to identify appropriate, common, low-competition keywords to target at your site for keyword analysis
                    and content development.
                    <br />
                    <br />
                    The Web SEO is the process of improving search engine content, website design and HTML code for a forum. Popular
                    activities correlated with Blog SEO involve on-page optimization, plugin deployment, page load speed enhancement, and
                    internal linking.
                </p>
            </div>
        );
    }
    if (blogMode === 5) {
        content = (
            <div className={classes.Blog}>
                <h1 data-aos="fade-right" style={{ fontSize: "1.8rem" }}>
                    AUDIO AND VIDEO PRODUCTION.
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    Along with being a software company in Pakistan, we provide video editing services too. We are a victorious production
                    house, based in Karachi that creates an off-center and pioneering content to steal the show. Starting from
                    pre-production, leading to production and ending up to final delivery i.e. post-production, is a thrilling journey that
                    delivers outclass content.
                    <br />
                    <br />
                    The production house is a blend of audio and video production. We have pros for both grounds. Our audio and video
                    producers are working in the field for ages. We have a strict criterion to select whose going to be work with us on
                    board.
                    <br />
                    <br />
                    Coming towards video production, it all begins with a script, landing to locations, looking for sets, carrying out art
                    direction, discussing the cast, shooting, and then finally getting hands-on data. The job doesn’t end here. Then comes
                    the video editing part. Video editing and Audio production are connected. To set apart from the crowd, you need your
                    audio production to be an extraordinary one. Sound effects and music elevate the scene. Sounds have a huge role in
                    making a scene impactful, or total bland.
                    <br />
                    <br />
                    Audio plays a vital role in movies. Our cherry-picked audio designers make sure to come up with quality content, within
                    the decided time frame. If audio is not according to the video theme, it’s going to be a mess. Imagine, funny music
                    being played with a horror scene. It will kill the feel, for sure.
                </p>
                <h1 data-aos="fade-left" style={{ fontSize: "1.8rem" }}>
                    AUDIO AND VIDEO PRODUCTION.
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    We deal with all kinds of video production. Either it is a documentary, a movie, a short film, promos, co corporate
                    videos, event coverage, BTS, TVCs, live video, social media videos, training videos or stop motion; we got experts for
                    all.
                    <br />
                    <br />
                    Each wave of audio that reaches our ear is a result of musicians, written composition, sound recording, samples,
                    plugins, MIDI, mastering, and sound mixing. It’s a long process. At SoftApp.io, you can get the best song designers to
                    compose a beautiful song, as per your requirement, taking care of your prescribed genera.
                    <br />
                    <br />
                    Now you see how video and audio work together. SoftApp.io provides both services at its platform. Being a client at
                    SoftApps.io Production house, you’ll discover how we carry out experience and creativity together. SoftApp.io has
                    already been listed among Pakistan top software houses. We aim to provide complete media solutions to artists, brands,
                    non-government organizations, corporate agencies, and public figures. Our team is a combination of professionals and
                    experts to help you reach your target audience across media platforms.
                </p>
            </div>
        );
    }
    if (blogMode === 6) {
        content = (
            <div className={classes.Blog}>
                <h1 data-aos="fade-right" style={{ fontSize: "1.8rem" }}>
                    IT SUPPORT AND MANAGEMENT
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    To run your business smoothly, you need to make sure that there no bugs digging your back end systems. If there are
                    some, we are here to kill them. SoftApps.io is an offshore software hub, labeled as the best software house in Karachi
                    and counted among Pakistan top software houses. We not only provide It Support and Management Services, but we also
                    serve with other technology-related services like; E-Commerce management services, Amazon Web Services, virtual
                    assistance, and a lot more on the directory. 
                    <br />
                    <br />
                    SoftApps.io presents a team of highly selected engineers that are ever ready to assist call, online chat through forums
                    or e-mails, or incident reporting. Our skillful staff provides 24*7 globally integrated support. They are eager to take
                    over the development of any existing application regardless of its size. Our developers immediately look into the matter
                    as soon as it is reported. They give there utter best to resolve the problem as soon as possible. 
                    <br />
                    <br />
                    In case if your system goes down, you have higher chances to lose a new client. A new-bee won’t understand your back end
                    problem and blame your services. Not only a new client, but you may start losing your chain of customers. All customer
                    needs is an easily accessible service. This also affects your creditability and reputation in the market, which is very
                    important to maintain. Once the reputation is affected, it is very difficult to revive in the market. We provide
                    cost-effective yet smart solutions for your digital problems. 
                </p>
                <h1 data-aos="fade-left" style={{ fontSize: "1.8rem" }}>
                    IT SUPPORT AND MANAGEMENT
                </h1>
                <p data-aos="fade-up" style={{ margin: "1.5rem 0", fontSize: ".95rem" }}>
                    SoftApps.io, a leading software hub has many grounds to convince the client to work with them. We provide transparency
                    in communication with our developers. We ensure that the work is delivered within the decided time frame. Our committed
                    developers guarantee to deliver quality work on the dot.
                    <br />
                    <br />
                     Moreover, our team looks for data bottleneck reduction, work with a disaster recovery strategy, give recommendations,
                    and bits of advice, and do root cause analysis for troubleshooting. 
                    <br />
                    <br />
                    By consulting us, you can consider yourself at a pair of safe hands. We’ve been running into many countries. We are a
                    platform, where idea meets excellence. Our vast experience in the field has helped in making our name in the market. We
                    have proven methods, tools, and strategies to assist you. We would love to serve you. Write down to us about your
                    requirements and we’ll get back to you as soon as possible. You might request a quote to get an estimate. 
                </p>
            </div>
        );
    }

    let footerContent = (
        <div className={classes.mobFooter}>
            <img className={classes.LogoFooter} src={Logo} alt="" />
            <div className={classes.drawerIcons}>
                <a href="mailto:management@softapps.io">
                    <img src={Email} alt="Email SoftApps" />
                </a>

                <a href="tel:+15145503281">
                    <img src={Call} alt="Call SoftApps" />
                </a>

                <a target="_blank" rel="noreferrer" href="https://wa.me/+15145503281">
                    <img src={Whatsapp} alt="Whatsapp SoftApps" />
                </a>
            </div>
        </div>
    );

    return (
        <div className={classes.Blogs}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title[blogMode]}</title>
                <link rel="canonical" href={`https://www.softapps.io/blog/${sites[blogMode]}`} />
            </Helmet>
            <div style={{ backgroundImage: `url(${images[blogMode]})` }} className={classes.BlogHeader}>
                {header && content0}
                <div style={{ height: "100%" }} className={classes.BlogHeaderOverlay}>
                    <div data-aos="fade-up" className={classes.BlogHeaderHeading}>
                        <h1>{blogHeading[blogMode]}</h1>
                    </div>
                </div>
            </div>
            {content}
            {header ? footerContent : <Footer exploreFunctionHandler={exploreStateHandler} />}
        </div>
    );
};
export default Blogs;
