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
                                    <h2>Sobre mim</h2>
                                    <div className="traco-azul"></div>
                                </div>
                                <br />
                                <p>
                                    Olá, me chamo <strong>Matheus Vieira da Silva Santos,</strong> tenho 25 anos sou de naturalidade brasileira e atualmente moro na cidade de Maurilândia-GO.
                                    Sou <strong>Desenvolvedor front-end,</strong> apaixonado por criar páginas web, aplicações e interfaces amigáveis visualmente. Tenho 3 anos de experiência
                                    utilizando ReactJS, HTML, CSS e JavaScript. Me sinto animado para explorar novas oportunidades, novas tecnologias e ampliar meus conhecimentos nessa profissão tão fascinante!
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
                                            <h3>Endereço Atual</h3>
                                            <div className="traco-azul"></div>
                                        </div>
                                        <br />
                                        <div>
                                            Bairro Nossa Senhora da Guia
                                        </div>
                                        <div>
                                            Av. Bahia, Número 537
                                        </div>
                                        <div>
                                            Maurilândia-GO
                                        </div>
                                        <div>
                                            CEP: 75930-000
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xs-12 col-md-6">
                                    <div className="matt-card objetivos">
                                        <div className="title">
                                            <h3>Objetivos</h3>
                                            <div className="traco-azul"></div>
                                        </div>
                                        <br />
                                        <p>
                                            Consolidar uma carreira de sucesso na área de programação, podendo escalar e me tornar uma referência com alta senioridade.
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
                                            <h3>Experiência</h3>
                                            <div className="traco-azul"></div>
                                        </div>
                                        <br />
                                        <div>
                                            <strong>Maxxsoft Tecnologia</strong> - Estagiário <br /> <i>JUNHO DE 2019 – OUTUBRO DE 2019</i>
                                        </div>
                                        <ul>
                                            <li>
                                                Responsável pela prototipação de modelos testáveis para aplicações produzidas
                                                na empresa, utilizando Angular, HTML, CSS, TypeScript e prototipação com adube XD.
                                            </li>
                                        </ul>
                                        <div>
                                            <strong>Digital S/A, Remoto </strong> - Desenvolvedor Front-End <br /> <i>FEVEREIRO DE 2020 – JUNHO DE 2021</i>
                                        </div>
                                        <ul>
                                            <li>
                                                Responsável pelo desenvolvimento da parte Front-end no site da empresa, e no projeto
                                                Digital Card onde utilizei tecnologias como ReactJS, HTML, CSS, SCSS  e JavaScript.
                                            </li>
                                        </ul>
                                        <div>
                                            <strong>EduSynch, Remoto </strong> - Desenvolvedor Front-End <br /> <i>MAIO DE 2021 – MARÇO DE 2023</i>
                                        </div>
                                        <ul>
                                            <li>
                                                Responsável pelo desenvolvimento da parte Front-end no site institucional e no projeto
                                                CMS da empresa, utilizando ReactJS, NextJS, HTML, CSS, SCSS styled-components, JavaScript,
                                                TypeScript e Redux, e axios para consumo de APIs REST, UI design com Figma.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col col-xs-12 col-md-6">
                                    <div className="matt-card formacao">
                                        <div className="title">
                                            <h3>Formação Acadêmica</h3>
                                            <div className="traco-azul"></div>
                                        </div>
                                        <br />
                                        <p>
                                            Bacharel em <strong className='curso'>Sistemas de Informação.</strong><br />
                                        </p>
                                        <p>
                                            <strong>Universidade Estadual de Goiás, Santa Helena</strong><i><br /> Conclusão – 2021</i>
                                        </p>
                                        <div className="illustracao-e-frase">
                                            <div className="row">
                                                <div>
                                                    <p><i>"Creio firmemente em uma lei de compensação. As verdadeiras recompensas são sempre proporcionais aos esforços feitos."</i><br /><span>- Nikola Tesla -</span></p>
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
                                        <h5>Algumas das tecnologias das quais possuo conhecimento</h5>
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
                                                    <FaFigma id="icon-skill-figma"/>
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
                                    <h2>Contato</h2>
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
                                            <FaGithub id='icon-social'/>
                                        </a>
                                        <a href="https://www.linkedin.com/in/matheus-vieira-ss/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedinIn id='icon-social'/>
                                        </a>
                                        <a href="https://www.instagram.com/vssmatheus/" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram id='icon-social'/>
                                        </a>
                                        <a href="https://m.facebook.com/matheus.vieiradasilva.77" target="_blank" rel="noopener noreferrer">
                                            <FaFacebookF id='icon-social'/>
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