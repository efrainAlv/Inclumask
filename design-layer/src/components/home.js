import { Component, Fragment } from "react";

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (

            <Fragment>

                <header>

                    <div className="header-top">
                        <div className="header">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
                                        <div className="full">
                                            <div className="center-desk">
                                                <div className="logo">
                                                    <h1>
                                                        <strong> <a href="/" style={{ color: "#edb12f" }} >INCLUMASK</a> </strong>
                                                    </h1>
                                                    <i>Sin barreras es mejor</i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-8 col-md-8 col-sm-9">

                                        <div className="menu-area">
                                            <div className="limit-box">
                                                <nav className="main-menu ">
                                                    <ul className="menu-area-main">
                                                        <li> <a href="/">Home</a> </li>
                                                        <li> <a href="/about">About</a> </li>
                                                        <li> <a href="/products">Productos</a> </li>
                                                        <li> <a href="/contact-us">Contact Us</a> </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="slider_section">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators" style={{ marginTop: "10px" }}>
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">

                                    <div className="container-fluid padding_dd">
                                        <div className="carousel-caption">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="text-bg">
                                                        <span>Welcome</span>
                                                        <h1 style={{ color: "#edb12f" }}>INCLUMASK</h1>
                                                        <p style={{ textAlign: "justify" }}>
                                                            Inclumask es una mascarilla protectora e inclusiva que cuenta con una ventana transparente que no
                                                            se empaña y es perfecta para profesionales de la salud, intérpretes de lengua de señas,
                                                            personas con discapacidad auditiva o que necesitan de la lectura labio-facial para comunicarse de
                                                            mejor manera, su círculo social y para todo aquel que quiera mostrar empatía con la comunidad
                                                            utilizando nuestras mascarillas inclusivas y derribando así las barreras de comunicación.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="images_box">
                                                        <figure><img src="images/home.png" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">

                                    <div className="container-fluid padding_dd">
                                        <div className="carousel-caption">

                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="text-bg">
                                                        <h1 style={{ color: "#edb12f" }}>INCLUMASK</h1>
                                                        <ul>
                                                            <li>
                                                                <h2 style={{ fontSize: "35px" }}>
                                                                    3 capas de protección
                                                                </h2>
                                                                <img src="images/protection.png" alt="alt" width="10%" />
                                                            </li>
                                                            <br></br>
                                                            <li>
                                                                <h2 style={{ fontSize: "35px" }}>
                                                                    Disminuye la exposición a partículas en el aire
                                                                </h2>
                                                                <img src="images/wind.png" alt="alt" width="15%" />
                                                            </li>
                                                            <br></br>
                                                            <li>
                                                                <h2 style={{ fontSize: "35px" }}>
                                                                    Reduce el paso de los líquidos
                                                                </h2>
                                                                <img src="images/no-liquids.png" alt="alt" width="10%" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="images_box">
                                                        <figure><img src="images/home.png" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="carousel-item">

                                    <div className="container-fluid padding_dd">
                                        <div className="carousel-caption ">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="text-bg">
                                                        <h1 style={{ color: "#edb12f" }}>INCLUMASK</h1>
                                                        <ul>
                                                            <li>
                                                                <h2 style={{ fontSize: "35px" }}>
                                                                    Fácil ajuste
                                                                </h2>
                                                                <img src="images/fit.png" alt="alt" width="10%" />
                                                            </li>
                                                            <br></br>
                                                            <li>
                                                                <h2 style={{ fontSize: "35px" }}>
                                                                    Con filltro protector 100% algodón
                                                                </h2>
                                                                <img src="images/filter.svg" alt="alt" width="15%" />
                                                            </li>
                                                            <br></br>
                                                            <li>
                                                                <h2 style={{ fontSize: "35px" }}>
                                                                    Lavable y reutilizable hasta 4 veces
                                                                </h2>
                                                                <img src="images/washable.png" alt="alt" width="15%" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                    <div className="images_box">
                                                        <figure><img src="images/home.png" /></figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </header>

            </Fragment>

        )

    }
}


export default Home;