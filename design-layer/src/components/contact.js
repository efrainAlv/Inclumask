import { Component, Fragment } from "react";
import NavBar from "./navbar";

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (

            <Fragment>

                <NavBar></NavBar>

                <div id="contact" className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>Contact <strong className="llow" style={{ color: "#edb12f" }}>us</strong></h2>
                                </div>
                            </div>

                        </div>
                        <div className="white_color" style={{ padding: "20px" }}>
                            <div className="row">

                                <div className="col">

                                    <h1 style={{ fontSize: "60px" }}>
                                        Oficinas administrativas
                                    </h1>

                                    <div style={{ margin: "4px" }}>
                                        <h1>
                                            Direccion
                                        </h1>
                                        <i style={{ fontSize: "20px" }}>
                                            12 calle 1-25, zona 10. Geminis 10. Torre Norte. Nivel 6. OΟcina 800. Guatemala.
                                        </i>
                                    </div>


                                    <div style={{ margin: "4px" }}>
                                        <h1>
                                            Correo
                                        </h1>
                                        <i style={{ fontSize: "20px" }}>
                                            inclumask@gmail.com
                                        </i>
                                    </div>


                                    <div style={{ margin: "4px" }}>
                                        <h1>
                                            Telefono
                                        </h1>
                                        <i style={{ fontSize: "20px" }}>
                                            +(502) 24387777
                                        </i>
                                    </div>


                                    <div style={{ margin: "4px" }}>
                                        <h1>
                                            Direccion
                                        </h1>
                                        <i style={{ fontSize: "20px" }}>
                                            12 calle 1-25, zona 10. Geminis 10. Torre Norte. Nivel 6. OΟcina 800. Guatemala.
                                        </i>
                                    </div>

                                    <div style={{ margin: "4px" }}>
                                        <h1>
                                            Facebook
                                        </h1>
                                        <i style={{ fontSize: "20px" }}>
                                            <img src="images/facebook.svg" alt="alt" style={{ width: "10%" }} />
                                        </i>
                                    </div>

                                    <div style={{ margin: "4px" }}>
                                        <h1>
                                            Instagram
                                        </h1>
                                        <i style={{ fontSize: "20px" }}>
                                            <img src="images/instagram.png" alt="alt" style={{ width: "10%" }} />
                                        </i>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </Fragment >

        )

    }

}

export default Contact