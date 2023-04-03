import React from 'react';
import PropTypes from 'prop-types';

const Home = () => {

    return (
        <>
            <div className='body-contentet'>
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
                                    Olá, me chamo <strong>Matheus Vieira da Silva Santos,</strong> tenho 25 anos sou de naturalidade brasileira e atualmente moro na cidade de Maurilândia-GO, estou a 4 anos na área de tecnologia, trabalhando com desenvolvimento
                                    de sites e soluções para web, desenvolvendo mais especificamente a parte Front-End. Trabalhei algum tempo como freelancer, porém hoje, estou em atuação como Front-End Developer focado em ReactJS.{/*  em regime PJ para <a target="_blank" rel="noopener noreferrer" href="http://edusynch.com/">Edusynch</a> */}.
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
                                            Trabalhar de forma organizada, dinâmica, proativa e aprender sempre, melhorando a bagagem curricular e dessa forma obter mais experiência na área de tecnologia.
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
                                                Responsável pela construção e prototipação de modelos testáveis para as soluções produzidas na empresa.
                                            </li>
                                        </ul>
                                        <div>
                                            <strong>Digital S/A, Remoto </strong> - Desenvolvedor Front-End <br /> <i>FEVEREIRO DE 2020 – JUNHO DE 2021</i>
                                        </div>
                                        <ul>
                                            <li>
                                                Responsável pelo desenvolvimento da parte Front-End de aplicações desenvolvidas empresa.
                                            </li>
                                        </ul>
                                        <div>
                                            <strong>EduSynch, Remoto </strong> - Desenvolvedor Front-End <br /> <i>MAIO DE 2021 – MARÇO DE 2023</i>
                                        </div>
                                        <ul>
                                            <li>
                                                Responsável pelo desenvolvimento da parte Front-End dos produtos da empresa.
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
                                        <div>
                                            <strong>Universidade Estadual de Goiás, Santa Helena</strong><i><br /> 2016 – 2021</i>
                                        </div>
                                        <p>
                                            Bacharel em <strong>Sistemas de Informação.</strong><br />
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
                                                    <i className="fab fa-html5" id="icon-skill-html"></i>
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <i className="fab fa-css3" id="icon-skill-css"></i>
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <i className="fab fa-js-square" id="icon-skill-js"></i>
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <i className="fab fa-react" id="icon-skill-react"></i>
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <i className="fab fa-angular" id="icon-skill-angular"></i>
                                                </div>
                                            </div>
                                            <div className="matt-card-skill">
                                                <div className="item-skill-tool">
                                                    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="PS" />
                                                </div>
                                            </div>
                                            <div className="matt-card-skill">
                                                <div className="item-skill-tool">
                                                    <img src="https://logodownload.org/wp-content/uploads/2019/10/adobe-photoshop-logo-1.png" alt="PS" />
                                                </div>
                                            </div>
                                            <div className='matt-card-skill'>
                                                <div className="item-skill-tool">
                                                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="PS" />
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
                                        <i style={{ color: '#59c2ff', margin: '4px 8px 0 0' }} className="far fa-envelope"></i>
                                        <span>vssmatheus@gmail.com</span>
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', fontSize: '12pt' }}>
                                        <i style={{ color: '#59c2ff', margin: '4px 8px 0 0' }} className="far fa-phone"></i>
                                        <span>(64) 9 9334-2457</span>
                                    </span>
                                </div>
                                <div className="container">
                                    <div className="my-social">
                                        <a href="https://github.com/vssmatheus" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/matheus-vieira-ss/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="https://www.instagram.com/vssmatheus/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                        <a href="https://m.facebook.com/matheus.vieiradasilva.77" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook-f"></i>
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