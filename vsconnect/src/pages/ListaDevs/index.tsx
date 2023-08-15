//estilização
import "./style.css";

//components
import CardDev from "../../components/CardDev";

//hooks
import { useState } from "react";

function ListaDevs() {

    //STATE DEVS
    const [devs, setDevs] = useState<any[]>([
        {
            img_perfil: "https://github.com/Thiago-Nascimento.png",
            nome: "Thiago Nascimento",
            email: "thiago@email.com",
            skills: ["HTML", "CSS", "REACT"]
        },
        {
            img_perfil: "https://github.com/JessicaSanto.png",
            nome: "Jessica Franzon",
            email: "jessica@email.com",
            skills: ["HTML", "CSS", "React"]
        },
        {
            img_perfil: "https://github.com/odirlei-assis.png",
            nome: "Odirlei Sabella",
            email: "odirlei@email.com",
            skills: ["HTML", "CSS", "React"]
        },
        {
            img_perfil: "https://github.com/alexiamelhado18.png",
            nome: "Aléxia Vitória",
            email: "alexia@email.com",
            skills: ["PYTHON", "VUE", "React"]
        }
    ]);

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(devs);

    const [skillDigitado, setSkillDigitado] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoSkill(event: any) {
        if (event.target.value === "") {
            setListaDevsFiltrados(devs);
        }
        setSkillDigitado(event.target.value);
    }

    function buscarDevPorSkill(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        const devsFiltrados = devs.filter((dev: any) => dev.skills.includes(skillDigitado.toLocaleUpperCase()));

        if (devsFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            setListaDevsFiltrados(devsFiltrados);
        }


    }

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
                                    listaDevsFiltrados.map((dev: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardDev
                                                foto={dev.img_perfil}
                                                nome={dev.nome}
                                                email={dev.email}
                                                listaTechs={dev.skills}
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