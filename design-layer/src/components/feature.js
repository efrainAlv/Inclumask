import { Component, Fragment } from "react";
import NavBar from "./navbar";

class Feature extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

    }


    render() {

        return (

            <Fragment>

                <NavBar></NavBar>

                <div id="vegetable" class="vegetable" style={{ marginBottom: "20px" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="titlepage">
                                    <h2> ESPECIFICACIONES <strong class="llow"> DEL PRODUCTO </strong> </h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                                <div class="vegetable_shop">
                                    <h3>Especificaciones de lavado</h3>
                                    <ul style={{ textAlign: "justify" }}>
                                        <li>
                                            <h4>
                                                Lavar a mano
                                            </h4>
                                        </li>
                                        <li>
                                            <h4>
                                                Tener cuidado de no rayar el plástico transparente
                                            </h4>
                                        </li>
                                        <li>
                                            <h4>
                                                No exprimir
                                            </h4>
                                        </li>
                                        <li>
                                            <h4>
                                                No dejar en remojo
                                            </h4>
                                        </li>
                                        <li>
                                            <h4>
                                                No utilizar plancha encima del plástico transparente-Al finalizar agregar una gota de jabón líquido concentrado o líquido antiempañante sobre papel y
                                                distribuir sobre la parte interior del plástico transparente y esperar un minuto para utilizarla
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
                                <div class="vegetable_img">
                                    <figure><img src="images/wash.jpg" alt="#" /></figure>
                                    <span>01</span>
                                </div>
                            </div>
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
                                <div class="vegetable_img margin_top">
                                    <figure><img src="images/wash1.jpg" alt="#" /></figure>
                                    <span>02</span>
                                </div>
                            </div>

                        </div>
                        <br></br>
                        <br></br>
                        <div class="vegetable_shop">
                            <h3>Presentaciones</h3>

                            <div className="row">

                                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                                    <div className="vegetable_shop" style={{ textAlign: "justify" }} >
                                        <h2>
                                            Los usuarios tendrán la opción de adquirir nuestra mascarilla de forma individual con un
                                            diseño liso o personalizado según el catálogo que se encontrará en los nuestros medios
                                            digitales.
                                        </h2>
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
                                    <div class="vegetable_img">
                                        <figure><img src="images/productofinal1.png" alt="#" style={{ width: "100%" }} /></figure>
                                    </div>
                                </div>

                            </div>
                            <br></br>

                            <div className="row">

                                <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
                                    <div class="vegetable_img">
                                        <figure><img src="images/productofinal2.png" alt="#" style={{ width: "100%" }} /></figure>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                                    <div class="vegetable_shop" style={{ textAlign: "justify" }}>
                                        <h2>
                                            Los usuarios podrán adquirir también nuestras mascarillas por
                                            paquete de 10 mascarillas de su elección de nuestro catálogo.
                                        </h2>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="vegetable_shop row" style={{ marginTop: "30px" }}>

                            <h3>Precios</h3>

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                        </th>
                                        <th scope="col">
                                            <h2>Cantidad</h2>
                                        </th>
                                        <th scope="col">
                                            <h2>Precio</h2>
                                        </th>
                                        <th scope="col">
                                            <h2>Costo de envio</h2>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>
                                            <h4>
                                                1 Unidad
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Q. 25.00
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Q 15.00 - Q 35.00
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>
                                            <h4>
                                                10 Unidades
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Q. 200.00
                                            </h4>
                                        </td>
                                        <td>
                                            <h4>
                                                Q 15.00 - Q 35.00
                                            </h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>

            </Fragment>

        )

    }

}

export default Feature
