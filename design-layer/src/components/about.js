import { Component, Fragment } from "react";
import NavBar from "./navbar";

class About extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (

            <Fragment>

                <NavBar></NavBar>

                <div id="about" className="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="about-box" style={{ textAlign: "justify", paddingRight: "15px" }}>
                                    <h2>
                                        About Us
                                    </h2>
                                    <p>
                                        La interacción entre personas oyentes y sordas siempre ha tenido barreras de comunicación y estas
                                        barreras se han incrementado aún más durante estos tiempos de pandemia, afectando también
                                        todo tipo de comunicación por el uso obligatorio de mascarillas en Guatemala. Inclumask es una
                                        mascarilla protectora e inclusiva que cuenta con una ventana transparente que es perfecta para
                                        derribar estas barreras de comunicación. Somos una empresa enfocada principalmente en e-
                                        commerce dónde venderemos nuestra mascarilla en dos presentaciones diferentes: individual y una
                                        caja de 10 mascarillas.
                                    </p>

                                    <h1>Mision</h1>
                                    <p style={{ paddingTop: "5px", paddingRight: "15px" }}>
                                        Convertirnos en los encargados de generar un entorno más inclusivo, facilitando la comunicaciónfísica y verbal.
                                    </p>

                                    <h1>Vision</h1>
                                    <p style={{ paddingTop: "5px", paddingRight: "15px" }}>
                                        Derribar barreras de comunicación y mejorar la interacción entre personas oyentes y sordas, conuna mascarilla protectora e inclusiva que haga conciencia sobre los problemas de comunicación que
                                        hay en el mundo.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_rl" style={{ justifyContent: "center", display: "block", paddingTop: "7%" }} >
                                <div className="about-box_img">
                                    <figure><img src="images/about-us-picture.jpg" alt="#" /></figure>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </Fragment>

        )

    }

}

export default About