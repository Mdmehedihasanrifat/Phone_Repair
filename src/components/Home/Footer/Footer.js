import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF ,faGoogle,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    const style={

        "background":"#202625 !important;"
    }
    return (
        <div>

            <footer class="text-center text-white" style={style}>

                <div class="container p-4">

                    <section class="mb-4">

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faFacebookF}/></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon
                        ></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon
                        ></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><FontAwesomeIcon icon={faLinkedin}/></a>



                    </section>

                    <section class="">
                        <form action="">

                            <div class="row d-flex justify-content-center">

                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div class="col-md-5 col-12">

                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" class="form-control" />
                                        <label class="form-label" for="form5Example2">Email address</label>
                                    </div>
                                </div>



                                <div class="col-auto">

                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>

                            </div>

                        </form>
                    </section>

                    <section class="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>

                </div>
            </footer>



        </div>
    );
};

export default Footer;