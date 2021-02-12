import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../style.css"
import { Container, Row } from "react-bootstrap"

function Contact() {
    return (
        <div>
            <Container className="mt-5">
                <div className="row mt-3">
                    <div class="container">
                        <img src="img_avatar.png" alt="Avatar" class="image"/>
                            <div class="overlay">
                                <div class="text">Hello World</div>
                            </div>
                                </div>
                        <div className="col">
                            <div className="card">
                                <img src="/Images/d.png" alt="John" />
                                <h1>John Doe</h1>
                                <p className="title">CEO & Founder, Example</p>
                                <p>Harvard University</p>
                                <div className="text-center mb-3">
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i classNameName="fa fa-facebook"></i></a>
                                </div>
                                <p><button>Contact</button></p>
                            </div>
                        </div>

                    </div>

                    <div className="col mt-5">
                        <div className="card">
                            <img src="/Images/d.png" alt="John" />
                            <h1>John Doe</h1>
                            <p className="title">CEO & Founder, Example</p>
                            <p>Harvard University</p>
                            <div className="text-center mb-3">
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                                <a href="#"><i classNameName="fa fa-facebook"></i></a>
                            </div>
                            <p><button>Contact</button></p>
                        </div>
                    </div>

           </Container>
        </div>
    );
}

export default Contact;