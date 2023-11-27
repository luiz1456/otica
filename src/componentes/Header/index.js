import './style.css';

export default function Header() {
    return (
        <header>
            <div className="limitar-secao container-header">
                <img src="assets/logo.png" alt="logo" className='logo' />
                <nav className='links-topo'>
                    <a href="#produtos">produtos</a>
                    <a href="#sobre">sobre</a>
                    <a href="#contato">contato</a>
                </nav>
            </div>
        </header>
    )
}