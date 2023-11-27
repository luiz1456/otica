import './style.css';

export default function Contato() {
    return (
        <section id="contato">
            <div className='limitar-secao'>
                <h2 className="subtitulos">fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
                </p>
                <div className='container-contato'>
                    <div className='links-contato'>
                        <h3>Contato</h3>
                        <div>
                            <div className='container-link'>
                                <img src="assets/local.png" alt="img local" />
                                <p>Nova Iguaçu,RJ</p>
                            </div>
                            <div className='container-link'>
                                <img src="assets/telefone.png" alt="img local" />
                                <p>(21) 9999-9999</p>
                            </div>
                            <div className='container-link'>
                                <img src="assets/email.png" alt="img local" />
                                <p>contato@oticavida.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='links-contato'>
                        <h3>Nossas Redes Sociais</h3>
                        <div>
                            <div className='container-link'>
                                <img src="assets/fb.png" alt="facebook" />
                                <p>/OticaVida</p>
                            </div>
                            <div className='container-link'>
                                <img src="assets/ig.png" alt="facebook" />
                                <p>@oticavidarj</p>
                            </div>
                            <div className='container-link'>
                                <img src="assets/tt.png" alt="facebook" />
                                <p>@oticavidarj</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}