import { Component, Fragment } from 'react'

class NavBar extends Component {

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


                </header>

            </Fragment >

        )

    }

}

export default NavBar;