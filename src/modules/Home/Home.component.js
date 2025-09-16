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
} from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <div className="body-contentet">
        <main className="container-main">
          <section>
            <div className="container">
              <div className="matt-txt sobre-mim">
                <div className="title">
                  <h2>Sobre</h2>
                  <div className="traco-azul"></div>
                </div>
                <br />
                <p>
                  <strong>Sou Desenvolvedor front-end,</strong> apaixonado por
                  criar páginas web, aplicações e interfaces visualmente
                  amigáveis. Tenho 3 anos de experiência na área de tecnologia.
                  Minha Principal característica é ser atencioso aos detalhes
                  visuais, com essa habilidade consigo desenvolver fielmente no
                  front-end o que foi proposto para as interfaces pelo time de
                  design, além de identificar e resolver divergências visuais
                  entre o front-end e o design. Capaz de atuar com excelência
                  principalmente em ReactJS, NextJS, HTML5, CSS, JavaScript, e
                  TypeScript, atualmente tenho buscado aprofundar meus
                  conhecimentos em Angular Framework. Valorizo a colaboração em
                  equipe e acredito a boa comunicação e coordenação são peças
                  fundamentais para o sucesso de qualquer projeto. Me sinto
                  animado para explorar novas oportunidades referentes a
                  desenvolvimento front end, novas tecnologias e ampliar meus
                  conhecimentos nessa profissão tão fascinante!
                  {/*  em regime PJ para <a target="_blank" rel="noopener noreferrer" href="http://edusynch.com/">Edusynch</a> */}
                  .
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
                      <h3>Endereço</h3>
                      <div className="traco-azul"></div>
                    </div>
                    <br />
                    <div>Bairro Nossa Senhora da Guia</div>
                    <div>Avenida. Bahia, Número 537</div>
                    <div>Maurilândia-GO</div>
                    <div>CEP: 75930-000</div>
                  </div>
                </div>
                <div className="col col-xs-12 col-md-6">
                  <div className="matt-card objetivos">
                    <div className="title">
                      <h3>Objetivo Profissional</h3>
                      <div className="traco-azul"></div>
                    </div>
                    <br />
                    <p>Atuar como Desenvolvedor front-end.</p>
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

                    {/* Stefanini em primeiro lugar */}
                    <div>
                      <strong>Stefanini Brasil</strong> - Desenvolvedor Front-End Sênior <br /> 
                      <span>JAN 2024 - O MOMENTO · 1 ano 9 meses</span>
                    </div>
                    <br />
                    <p>
                      A Stefanini é uma das maiores multinacionais brasileiras de soluções digitais, com presença em 41 países e mais de 32.000 profissionais altamente capacitados. Atuo alocado na <strong>Caixa Econômica</strong>.
                    </p>
                    <ul>
                      <li>Implementação de novas features e manutenção do sistema Cartão Cidadão (SICID);</li>
                      <li>Atuação em time de desenvolvimento, assumindo itens de trabalho para melhoria de UX;</li>
                      <li>Desenvolvimento de front-end com foco em TDD;</li>
                      <li>Melhoria contínua da experiência do usuário final.</li>
                    </ul>

                    {/* EduSynch */}
                    <div>
                      <strong>EduSynch</strong> - Front-end Developer <br /> 
                      <span>MAIO 2021 - MARÇO 2023</span>
                    </div>
                    <br />
                    <p>
                      A EduSynch é líder no desenvolvimento e fornecimento de tecnologias de avaliação e supervisão remota, com mais de
                      680.000 usuários e 14 milhões de perguntas respondidas nos setores educacional e corporativo. Atuei no
                      desenvolvimento de novas funcionalidades para um projeto de CMS voltado para gestão do conteúdo geral do sistema
                      E-Proctoring da empresa.
                    </p>
                    <ul>
                      <li>Desenvolvimento e manutenção da parte front-end;</li>
                      <li>Resolução de bugs e implementação de novas telas e componentes;</li>
                      <li>Consumo de APIs REST;</li>
                      <li>Revisão de Código;</li>
                      <li>Tradução da aplicação utilizando i18n.</li>
                    </ul>

                    {/* Digital S/A */}
                    <div>
                      <strong>Digital S/A</strong> - Front-End Developer <br /> 
                      <span>FEVEREIRO DE 2020 - JUNHO DE 2021</span>
                    </div>
                    <br />
                    <p>
                      A Digital S/A é uma agência voltada para o desenvolvimento Web e App, sistemas e soluções de tecnologia de marketing.
                      Desenvolvimento de sistemas de estatística e estratégia de marca. Consultoria estratégica, incluindo plano de negócios e
                      desenvolvimento de estratégia de vendas.
                    </p>
                    <ul>
                      <li>Desenvolvimento e manutenção de todas as telas do site, utilizando HTML, CSS e JS;</li>
                      <li>Integração com sistemas CAPTCHA para autenticações;</li>
                      <li>Controle de versionamento com Gitflow.</li>
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
                      Bacharel em{' '}
                      <strong className="curso">Sistemas de Informação.</strong>
                      <br />
                    </p>
                    <p>
                      <strong>
                        Universidade Estadual de Goiás (UEG), Santa Helena-GO
                      </strong>
                      <span>
                        <br /> Conclusão – 2021
                      </span>
                    </p>
                    <p>
                      Atividades e grupos: Desenvolvi projetos de Design para
                      mídias sociais para o WTM-Rio Verde (Women Techmakers) o
                      evento conta com a participação de alguns alunos da
                      universidade. no decorrer do período em que estive
                      vinculado a instituição desenvolvi vários projetos neste
                      sentido.
                    </p>
                    <p>
                      No intuito de somar à área de tecnologia, decidi ingressar
                      no curso de Sistemas de Informação, com foco no
                      desenvolvimento front-end e design de UI.
                    </p>
                    <p>
                      Um projeto pelo qual me orgulho bastante, é o projeto que
                      fiz para um meu TCC, trata-se de um sistema para
                      monitoramento de de dados de um tensiômetro digital, cujo
                      o intuito era captar dados de temperatura, umidade e
                      pressão do solo. Foi o primeiro projeto complexo que fiz e
                      foi o que fez eu me apaixonar por essa profissão. Receber
                      a nota 9.8 no TCC marcou este projeto como o grande
                      projeto da minha vida. Que deu início a minha carreira.
                    </p>
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
                    <h5>Minhas competências se baseiam nas seguintes ferramentas e linguagens:</h5>
                    <br />
                    <div className="skills-container">
                      <div className="matt-card-skill">
                        <div className="item-skill-tool">
                          <FaHtml5 id="icon-skill-html" />
                          <p>HTML</p>
                        </div>
                      </div>
                      <div className="matt-card-skill">
                        <div className="item-skill-tool">
                          <FaCss3Alt id="icon-skill-css" />
                          <p>CSS</p>
                        </div>
                      </div>
                      <div className="matt-card-skill">
                        <div className="item-skill-tool">
                          <FaSass id="icon-skill-sass" />
                          <p>SASS</p>
                        </div>
                      </div>
                      <div className="matt-card-skill">
                        <div className="item-skill-tool">
                          <FaJsSquare id="icon-skill-js" />
                          <p>JavaScript</p>
                        </div>
                      </div>
                      <div className="matt-card-skill">
                        <div className="item-skill-tool">
                          <FaReact id="icon-skill-react" />
                          <p>React</p>
                        </div>
                      </div>
                      <div className="matt-card-skill">
                        <div className="item-skill-tool">
                          <FaAngular id="icon-skill-angular" />
                          <p>Angular</p>
                        </div>
                      </div>
                      <div className="matt-card-skill">
                        <div className="item-skill-tool">
                          <FaGitAlt id="icon-skill-git" />
                          <p>Git</p>
                        </div>
                      </div>
                      <div className="matt-card-skill">
                        <div className="item-skill-tool">
                          <FaNodeJs id="icon-skill-node" />
                          <p>Node.JS</p>
                        </div>
                      </div>
                      <div className="matt-card-skill">
                        <div className="item-skill-tool">
                          <FaFigma id="icon-skill-figma" />
                          <p>Figma</p>
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
                <div className="contatos">
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '12pt'
                    }}
                  >
                    <FaEnvelope
                      style={{ color: '#59c2ff', margin: '4px 8px 0 0' }}
                      className="far fa-envelope"
                    />
                    <span>vssmatheus@gmail.com</span>
                  </span>
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '12pt'
                    }}
                  >
                    <FaPhoneAlt
                      style={{ color: '#59c2ff', margin: '4px 8px 0 0' }}
                      className="far fa-phone"
                    />
                    <span>(64) 9 9334-2457</span>
                  </span>
                </div>
                <div className="container">
                  <div className="my-social">
                    <a
                      href="https://github.com/vssmatheus"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub id="icon-social" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/matheus-vieira-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn id="icon-social" />
                    </a>
                    <a
                      href="https://www.instagram.com/vssmatheus/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram id="icon-social" />
                    </a>
                    <a
                      href="https://m.facebook.com/matheus.vieiradasilva.77"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF id="icon-social" />
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
  routes: PropTypes.array
};

export default Home;
