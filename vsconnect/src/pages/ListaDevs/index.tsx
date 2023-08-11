//estilização
import "./style.css";

function ListaDevs() {
    return (
        <>
            <main id="main_listadevs">
                <div className="container container_lista_devs">
                    <div className="lista_devs_conteudo">
                        <h1>Lista de Devs</h1>
                        <hr />
                        <form method="post">
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar desenvolvedores</label>
                                <div className="campo-label">
                                    <input
                                        type="search"
                                        name="campo-busca"
                                        id="busca"
                                        placeholder="Buscar desenvolvedores por tecnologias..."
                                    />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/Thiago-Nascimento.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Thiago Nascimento</h3>
                                                <p>thiago@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/JessicaSanto.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Jessica Franzon</h3>
                                                <p>jessica@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/odirlei-assis.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Odirlei Sabella</h3>
                                                <p>odirlei@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/alexiamelhado18.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Aléxia Vitória</h3>
                                                <p>alexia@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default ListaDevs;