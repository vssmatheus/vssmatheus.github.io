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
                        <br/>
                        <p>
                            Olá, me chamo <strong>Matheus Vieira da Silva Santos,</strong> tenho 25 anos sou de naturalidade brasileira e atualmente moro na cidade de Maurilândia-GO, estou a 4 anos na área de tecnologia, trabalhando com desenvolvimento
                            de sites e soluções para web, desenvolvendo mais especificamente a parte Front-End. Trabalhei algum tempo como freelancer, porém hoje, estou em atuação como Front-End Developer em regime PJ para <a target="_blank" rel="noopener noreferrer" href="http://edusynch.com/">Edusynch</a>.
                        </p>
                    </div>
                    <hr/>
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
                                <br/>
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
                                <br/>
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
                                <br/>
                                <div>
                                    <strong>Maxxsoft Tecnologia</strong> - Estagiário <br/> <i>JUNHO DE 2019 – OUTUBRO DE 2019</i>
                                </div>
                                <ul>
                                    <li>
                                        Responsável pela construção e prototipação de modelos testáveis para as soluções produzidas na empresa.
                                    </li>
                                </ul>
                                <div>
                                    <strong>Digital S/A, Remoto </strong> - Desenvolvedor Front-End <br/> <i>FEVEREIRO DE 2020 – JUNHO DE 2021</i>
                                </div>
                                <ul>
                                    <li>
                                        Responsável pelo desenvolvimento da parte Front-End de aplicações desenvolvidas empresa.
                                    </li>
                                </ul>
                                <div>
                                    <strong>EduSynch, Remoto </strong> - Desenvolvedor Front-End <br/> <i>MAIO DE 2021 – ATUALMENTE</i>
                                </div>
                                <ul>
                                    <li>
                                        Responsável pelo desenvolvimento da parte Front-End de aplicações desenvolvidas empresa.
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
                                <br/>
                                <div>
                                    <strong>Universidade Estadual de Goiás, unidade de Santa Helena</strong><i>AGOSTO DE 2016 – EM ANDAMENTO</i>
                                </div>
                                <p>
                                    Graduação: 8º Período - Bacharelado <br/>
                                    <strong style={{fontSize: '18px'}}>Sistemas de Informação.</strong>
                                </p>
                                <div className="illustracao-e-frase">
                                    <div className="row">
                                        <div>
                                            <p><i>"Creio firmemente em uma lei de compensação. As verdadeiras recompensas são sempre proporcionais aos esforços feitos."</i><br/><span>- Nikola Tesla -</span></p>
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
                            <div className="matt-card formacao">
                                <div className="title">
                                    <h3>Skills</h3>
                                    <div className="traco-azul"></div>
                                </div>
                                <br/>
                                <h5>
                                    <ul>
                                        <li>
                                            <h5>Conhecimento e domínio em linguagens e frameworks</h5>
                                        </li>
                                    </ul>
                                </h5>
                                <br/>
                                <div className="row">
                                    <div className="col col-md-6 col-12">
                                        <div className="item-skill-tool">
                                            <i className="fab fa-html5" id="icon-skill-html"></i>
                                            <div className="level-bar-html" style={{width: '50%'}}></div>
                                        </div>
                                        <div className="item-skill-tool">
                                            <i className="fab fa-css3" id="icon-skill-css"></i>
                                            <div className="level-bar-css" style={{width: '45%'}}></div>
                                        </div>
                                        <div className="item-skill-tool">
                                            <i className="fab fa-react" id="icon-skill-react"></i>
                                            <div className="level-bar-react" style={{width: '35%'}}></div>
                                        </div>
                                        {/* <div className="item-skill-tool">
                                            <i className="fab fa-angular" id="icon-skill-angular"></i>
                                            <div className="level-bar-angular" style={{width: '20%'}}></div>
                                        </div> */}
                                    </div>
                                    <div className="col col-md-6 col-sm-12">
                                        <div className="item-skill-tool">
                                            <i className="fab fa-js-square" id="icon-skill-js"></i>
                                            <div className="level-bar-js" style={{width: '25%'}}></div>
                                        </div>
                                        <div className="item-skill-tool">
                                            <i className="fab fa-node-js" id="icon-skill-node-js"></i>
                                            <div className="level-bar-node-js" style={{width: '30%'}}></div>
                                        </div>
                                        <div className="item-skill-tool">
                                            <i className="fab fa-git" id="icon-skill-node-js"></i>
                                            <div className="level-bar-node-js" style={{width: '30%'}}></div>
                                        </div>
                                        {/* <div className="item-skill-tool">
                                            <img src="./assets/svgs/1051px-Adobe_Photoshop_CC_icon.svg.png" alt="PS" />
                                            <div className="level-bar-photoshop" style={{width: '50%'}}></div>
                                        </div>
                                        <div className="item-skill-tool">
                                            <img src="./assets/svgs/1200px-Adobe_XD_CC_icon.svg.png" alt="PS" />
                                            <div className="level-bar-xd" style={{width: '35%'}}></div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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