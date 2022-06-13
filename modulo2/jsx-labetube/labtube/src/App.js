import './App.css';
import logo from "./img/logo.png"
import { MagnifyingGlass, House, Fire, Play, ClockCounterClockwise, Queue } from "phosphor-react"

function App() {
    const titulo = "Título do vídeo"

    const reproduzVideo = () => {
        alert("O vídeo está sendo reproduzido")
    }

return (
    <div>
        <div className="tela-inteira">
            <header>
                <img src={logo} alt="Logo marca do site" />

                <div className='search-button'>
                    <input type="text" placeholder="Busca" id="campoDeBusca" />
                    <button><MagnifyingGlass size={20} color="#fff" weight="bold" /></button>
                </div>
            </header>

            <main>
                <nav className="menu-vertical">
                    <ul>
                        <li className="menu-flex botoes-meunu-vertical"><span><House size={20} color="#f6b042" /></span>Início
                        </li>
                        <li className="menu-flex botoes-meunu-vertical"><span><Fire size={20} color="#f6b042" /></span>Em alta</li>
                        <li className="menu-flex botoes-meunu-vertical"><span><Play size={20} color="#f6b042" /></span>Inscrições</li>
                        <hr/>
                        <li className="menu-flex botoes-meunu-vertical"><span><Queue size={20} color="#f6b042" /></span>Playlist</li>
                        <li className="menu-flex botoes-meunu-vertical"><span><ClockCounterClockwise size={20} color="#f6b042" /></span>Histórico</li>
                    </ul>
                </nav>

                <section className="painel-de-videos">
                    <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=1 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=2 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=3 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=4 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=5 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=6 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=7 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                    <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                        <img src="https://picsum.photos/400/400?a=8 " alt="" />
                        <h4>{titulo}</h4>
                    </div>
                </section>
            </main>

            <footer>
                <h4>Oi! Eu moro no footer!</h4>
            </footer>
        </div>
    </div>
);
}

export default App;
