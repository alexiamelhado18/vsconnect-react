//imagens
import imgLogo from "../../assets/images/logo.svg";
import imgDev from "../../assets/images/dev.png";
import iconFace from "../../assets/images/facebook.svg";
import iconInsta from "../../assets/images/instagram.svg";
import iconLinkedin from "../../assets/images/linkedin.svg";

//estilização
import "./style.css";

//rotas
import { Link } from "react-router-dom";

function Footer() {
    return (
        //codigo do footer
        <footer>
            <div className="container rodape">
                <div className="span_dicas">
                    <img src={imgDev} alt="" />
                    <div className="span_dicas_texto">
                        <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                            recomendações para saber mais.</p>
                        <a className="botao botao_dicas" href="#">mais dicas</a>
                    </div>
                </div>
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas">
                        <h2>Páginas</h2>
                        <ul>
                            <li>
                                <Link to={""}>Login</Link>
                            </li>
                            <li>
                                <Link to={""}>Home</Link>
                            </li>
                            <li>
                                <Link to={""}>Listar Serviços</Link>
                            </li>
                            <li>
                                <Link to={""}>Cadastrar Cliente</Link>
                            </li>
                            <li>
                                <Link to={""}>Cadastrar Desenvolvedor</Link>
                            </li>
                        </ul>
                    </div>
                    <img src={imgLogo} alt="" />
                    <div className="rodape_conteudo_contatos">
                        <h2>Contatos</h2>
                        <div>
                            <Link to={"#"}><img src={iconFace} alt="" /></Link>

                            <Link to={"#"}><img src={iconInsta} alt="" /></Link>

                            <Link to={"#"}>
                                <img src={iconLinkedin} alt="" />
                            </Link>

                        </div>
                        <Link to={"mailto:"}>contato@vsconnect.com</Link>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>
    );
}

export default Footer;