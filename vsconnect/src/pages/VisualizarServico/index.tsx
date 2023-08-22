//estilização
import "./style.css";


function VisualizarServico() {

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>Desenvolvimento de site institucional - Gateway de Pagamento / Fintech</h2>
                        <span>R$ 1300,00</span>
                    </div>
                    <p>Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.</p>
                    <div className="techs">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>React</span>
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;