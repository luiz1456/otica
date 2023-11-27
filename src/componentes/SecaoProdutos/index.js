import './style.css';

export default function Produtos() {
    return (
        <section className="section-produtos" id='produtos'>
            <div className='limitar-secao'>
                <h1 className="subtitulos">Nossos produtos</h1>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
                <div className='container-cards-produtos'>
                    <div className='card'>
                        <h2>Óculos de grau</h2>
                        <img src="assets/oculos01.png" alt="oculos1" />
                        <p>R$ 500,00</p>
                    </div>
                    <div className='card'>
                        <h2>Óculos transition</h2>
                        <img src="assets/oculos02.png" alt="oculos2" />
                        <p>R$ 750,00</p>
                    </div>
                    <div className='card'>
                        <h2>Óculos de sol</h2>
                        <img src="assets/oculos03.png" alt="oculos3" />
                        <p>R$ 700,00</p>
                    </div>
                    <div className='card'>
                        <h2>Óculos Infantil</h2>
                        <img src="assets/oculos04.png" alt="oculos4" />
                        <p>R$ 700,00</p>
                    </div>
                </div>
                <p>Todos os nossos produtos incluem:</p>
                <ul className='lista-secao-produtos'>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}