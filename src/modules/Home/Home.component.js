import React from 'react';
import PropTypes from 'prop-types';
import {
    FaAngular,
    FaCss3Alt,
    FaEnvelope,
    FaFacebookF,
    FaFigma,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaInstagram,
    FaJsSquare,
    FaLinkedinIn,
    FaNodeJs,
    FaPhoneAlt,
    FaReact,
    FaSass
} from "react-icons/fa";

const Home = () => {

    return (
        <>
            <div className='body-contentet'>
                {/* <div class="buble"></div>
                <div class="buble2"></div>
                <div class="buble3"></div>
                <div class="buble4"></div> */}
                <main className="container-main">
                    <section>
                        <div className="container">
                            <div className="matt-txt sobre-mim">
                                <div className="title">
                                    <h2>About me</h2>
                                    <div className="traco-azul"></div>
                                </div>
                                <br />
                                <p>
                                    Hello, my name is <strong>Matheus Vieira da Silva Santos,</strong> I am 25 years old, I am Brazilian and currently live in the city of Maurilândia-GO.
                                    I'm <strong>front-end developer,</strong> passionate about creating visually friendly web pages, applications and interfaces. I have 3 years of experience
                                    using ReactJS, HTML, CSS and JavaScript. I feel excited to explore new opportunities, new technologies and expand my knowledge in this fascinating profession!
                                    {/*  em regime PJ para <a target="_blank" rel="noopener noreferrer" href="http://edusynch.com/">Edusynch</a> */}.
                                </p>
                            </div>
                            <hr />
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col col-xs-12 col-md-6">
                                    <div className="matt-card endereco">
                                        <div className="title">
                                            <h3>Current address</h3>
                                            <div className="traco-azul"></div>
                                        </div>
                                        <br />
                                        <div>
                                            Neighborhood Nossa Senhora da Guia
                                        </div>
                                        <div>
                                            Avenue. Bahia, Number 537
                                        </div>
                                        <div>
                                            Maurilândia-GO
                                        </div>
                                        <div>
                                            (Postal) CEP: 75930-000
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xs-12 col-md-6">
                                    <div className="matt-card objetivos">
                                        <div className="title">
                                            <h3>Goals</h3>
                                            <div className="traco-azul"></div>
                                        </div>
                                        <br />
                                        <p>
                                            Consolidate a successful career in the programming area, being able to scale and become a reference with high seniority.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-xs-12 col-md-6">
                                    <div className="matt-card experiencia">
                                        <div className="title">
                                            <h3>Experience</h3>
                                            <div className="traco-azul"></div>
                                        </div>
                                        <br />
                                        <div>
                                            <strong>Maxxsoft Tecnology</strong> - Intern <br /> <span>JUNE 2019 - OCTOBER 2019</span>
                                        </div>
                                        <ul>
                                            <li>
                                                Responsible for prototyping testable models for applications produced
                                                in the company, using Angular, HTML, CSS, TypeScript and prototyping with Adube XD.
                                            </li>
                                        </ul>
                                        <div>
                                            <strong>Digital S/A, Remote </strong> - Front-End Developer <br /> <span>FEBRUARY 2020 - JUNE 2021</span>
                                        </div>
                                        <ul>
                                            <li>
                                                Responsible for the development of the Front-end part on the company's website, and on the project
                                                Digital Card where I used technologies like ReactJS, HTML, CSS, SCSS and JavaScript.
                                            </li>
                                        </ul>
                                        <div>
                                            <strong>EduSynch, Remote </strong> - Front-End Developer <br /> <span>MAY 2021 - MARCH 2023</span>
                                        </div>
                                        <ul>
                                            <li>
                                                Responsible for the development of the Front-end part of the institutional website and the project
                                                Company CMS, using ReactJS, NextJS, HTML, CSS, SCSS styled-components, JavaScript,
                                                TypeScript and Redux, and axios for consuming REST APIs, UI design with Figma.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col col-xs-12 col-md-6">
                                    <div className="matt-card formacao">
                                        <div className="title">
                                            <h3>Academic education</h3>
                                            <div className="traco-azul"></div>
                                        </div>
                                        <br />
                                        <p>
                                            Bachelor in <strong className='curso'>Information Systems.</strong><br />
                                        </p>
                                        <p>
                                            <strong>Goias State University, Santa Helena</strong><span><br /> Completion - 2021</span>
                                        </p>
                                        <div className="illustracao-e-frase">
                                            <div className="row">
                                                <div>
                                                    <p><span>"I am a firm believer in a compensation law. True rewards are always proportionate to the efforts made."</span><br /><span>- Nikola Tesla -</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col col-xs-12 col-md-12">
                                    <div className="matt-card-skills">
                                        <div className="title">
                                            <h3>Skills</h3>
                                            <div className="traco-azul"></div>
                                        </div>
                                        <br />
                                        <h5>Some of the technologies I am aware of</h5>
                                        <br />
                                        <div className="skills-container">
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <FaHtml5 id="icon-skill-html" />
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <FaCss3Alt id="icon-skill-css" />
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <FaSass id="icon-skill-sass" />
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <FaJsSquare id="icon-skill-js" />
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <FaReact id="icon-skill-react" />
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <FaAngular id="icon-skill-angular" />
                                                </div>
                                            </div>
                                            <div className="matt-card-skill">
                                                <div className="item-skill-tool">
                                                    <FaGitAlt id="icon-skill-git" />
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <FaNodeJs id="icon-skill-node" />
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <FaFigma id="icon-skill-figma" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section>
                        <div className="container">
                            <div className="contato">
                                <div className="title">
                                    <h2>Contact</h2>
                                    <div className="traco-azul"></div>
                                </div>
                                <br />
                                <div className='contatos'>
                                    <span style={{ display: 'flex', alignItems: 'center', fontSize: '12pt' }}>
                                        <FaEnvelope style={{ color: '#59c2ff', margin: '4px 8px 0 0' }} className="far fa-envelope" />
                                        <span>vssmatheus@gmail.com</span>
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', fontSize: '12pt' }}>
                                        <FaPhoneAlt style={{ color: '#59c2ff', margin: '4px 8px 0 0' }} className="far fa-phone" />
                                        <span>(64) 9 9334-2457</span>
                                    </span>
                                </div>
                                <div className="container">
                                    <div className="my-social">
                                        <a href="https://github.com/vssmatheus" target="_blank" rel="noopener noreferrer">
                                            <FaGithub id='icon-social' />
                                        </a>
                                        <a href="https://www.linkedin.com/in/matheus-vieira-ss/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedinIn id='icon-social' />
                                        </a>
                                        <a href="https://www.instagram.com/vssmatheus/" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram id='icon-social' />
                                        </a>
                                        <a href="https://m.facebook.com/matheus.vieiradasilva.77" target="_blank" rel="noopener noreferrer">
                                            <FaFacebookF id='icon-social' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

Home.propTypes = {
    routes: PropTypes.array,
};

export default Home;