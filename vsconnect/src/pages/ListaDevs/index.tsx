//estilização
import "./style.css";

//components
import CardDev from "../../components/CardDev";

//hooks
import { useEffect, useState } from "react";

import api from "../../utils/api";

function ListaDevs() {

    //STATE DEVS
    const [devs, setDevs] = useState<any[]>([]);

    const [skillDigitado, setSkillDigitado] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoSkill(event: any) {
        if (event.target.value === "") {
            listarDesenvolvedores();
        }
        setSkillDigitado(event.target.value);
    }

    function buscarDevPorSkill(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        const devsFiltrados = devs.filter((dev: any) => dev.hardSkills.includes(skillDigitado.toLocaleUpperCase()));

        if (devsFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            setDevs(devsFiltrados);
        }


    }

    function listarDesenvolvedores() {

        api.get("users")
            .then((response: any) => {
                console.log(response);
                setDevs(response.data)
            })
            .catch((error: any) => {
                console.log("Error ao realizar um requisição:", error);
            })
    }

    useEffect(() => {
        //executa uma ação após o componente ser recarregado
        listarDesenvolvedores();
    }, [])

    return (
        <>
            <main id="main_listadevs">
                <div className="container container_lista_devs">
                    <div className="lista_devs_conteudo">
                        <h1>Lista de Devs</h1>
                        <hr />
                        <form method="post" onSubmit={buscarDevPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar desenvolvedores</label>
                                <div className="campo-label">
                                    <input
                                        type="search"
                                        name="campo-busca"
                                        id="busca"
                                        placeholder="Buscar desenvolvedores por tecnologias..."
                                        autoComplete="off"
                                        onChange={verificarCampoSkill}
                                    />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    devs.map((dev: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardDev
                                                foto={dev.user_img}
                                                nome={dev.nome}
                                                email={dev.email}
                                                listaTechs={dev.hardSkills}
                                            />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default ListaDevs;