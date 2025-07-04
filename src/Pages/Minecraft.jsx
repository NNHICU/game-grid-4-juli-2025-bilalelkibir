import '../index.scss'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Minecraft() {
    return (
        <div>
            <Helmet>
                <title>Minecraft Server Hosting - Snel & Betrouwbaar | Game Grid</title>
                <meta name="description" content="Ontdek krachtige Minecraft server hosting met modpack ondersteuning, automatische back-ups en onbeperkte servers. Kies jouw pakket bij Game Grid." />
                <meta name="keywords" content="Minecraft server hosting, Minecraft modpacks, Minecraft VPS, game hosting, Minecraft servers" />
            </Helmet>

            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h1><strong>Minecraft Server Hosting</strong></h1>
                    <span>De beste hosting voor jouw Minecraft server</span>
                </div>
                <div className="col-md-8 text-center mt-4">
                    <p>
                        Snel, stabiel en eenvoudig je eigen Minecraft server opzetten met ondersteuning voor alle modpacks en versies. Java & Bedrock compatibel.
                    </p>
                </div>
                <div className="col-md-8 text-center mt-3">
                    <button className="btn btn-dark rounded-pill mx-2 px-4">
                        Bekijk Minecraft pakketten
                    </button>
                    <button className="btn btn-light rounded-pill mx-2 px-4">
                        Bekijk alle Minecraft features
                    </button>
                </div>
            </div>

            <div className="row mt-5 g-4">
                <div className="col-lg-5">
                    <div className="h-100 p-4 bg-white rounded-4 shadow-sm d-flex flex-column justify-content-between">
                        <div>
                            <h4>Alle modpacks & versies</h4>
                            <p>Je eigen Minecraft server met alle populaire mods, versies en plugins, zowel Java als Bedrock.</p>
                        </div>
                        <img className="img-fluid img-minecraft mt-2" src="/media/minecraft6.png" alt="Minecraft server met modpacks en versies" />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="row h-100 g-4">
                        <div className="col-12">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-sm d-flex flex-row justify-content-between align-items-center">
                                <div>
                                    <h4>Plugin ondersteuning</h4>
                                    <p>Krachtige VPS hosting voor Minecraft met AMD Ryzen 9 of Intel Xeon CPU’s, perfect voor plugins en mods.</p>
                                </div>
                                <img className="img-fluid d-none d-md-block img-rocket" src="/media/minecraft4.png" alt="Minecraft plugin ondersteuning" />
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="h-100 p-4 bg-white rounded-4 shadow-sm d-flex flex-column justify-content-between">
                                        <h4>Onbeperkt aantal servers</h4>
                                        <p>Eerlijke prijzen en onbeperkte Minecraft servers voor elke gamer of community.</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="h-100 p-4 bg-white rounded-4 shadow-sm d-flex flex-row align-items-center">
                                        <div className="flex-grow-1 me-4">
                                            <h4>Automatische back-ups</h4>
                                            <p>Altijd veilige back-ups van je Minecraft wereld en bestanden, zodat je niets verliest.</p>
                                        </div>
                                        <div className="d-none d-md-block">
                                            <img className="img-fluid img-chest" src="/media/minecraft5.webp" alt="Minecraft automatische back-ups" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center my-5">
                <h2 className="fw-bold fs-3">Kies je Minecraft server hosting pakket</h2>
                <p className="text-muted mx-auto mb-4" style={{ maxWidth: '700px' }}>
                    Pakketten voor elke server, met de RAM die bij jouw gameplay past. Alles onbeperkt behalve het geheugen.
                </p>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {[
                        { name: "Wood", ram: "1 GB", price: "€ 3,50" },
                        { name: "Stone", ram: "2 GB", price: "€ 6,50" },
                        { name: "Coal", ram: "3 GB", price: "€ 9,50" },
                        { name: "Iron", ram: "4 GB", price: "€ 12,50" },
                        { name: "Lapis", ram: "5 GB", price: "€ 15,00" },
                        { name: "Gold", ram: "6 GB", price: "€ 18,00" },
                        { name: "Diamond", ram: "8 GB", price: "€ 24,00" },
                        { name: "Emerald", ram: "10 GB", price: "€ 30,00" },
                        { name: "Sand", ram: "12 GB", price: "€ 35,00" },
                        { name: "Clay", ram: "14 GB", price: "€ 40,00" },
                        { name: "Granite", ram: "16 GB", price: "€ 45,00" },
                        { name: "Diorite", ram: "20 GB", price: "€ 55,00" },
                    ].map((pkg, i) => (
                        <div className="col" key={i}>
                            <div className="card h-100 shadow-sm custom-card">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-semibold">{pkg.name}</h5>
                                    <p className="mb-3 text-muted">⚙ {pkg.ram} RAM</p>
                                    <h4 className="fw-bold mb-1">{pkg.price}</h4>
                                    <small className="text-muted mb-3">per maand</small>
                                    <div className="mt-auto">
                                        <button className="btn btn-dark w-100 custom-btn">Bestel nu</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-6 order-1">
                    <img src="/media/screen2.png" alt="Minecraft support team experts" className="img-fluid img-rounded" />
                </div>

                <div className="col-lg-6 order-2">
                    <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-headset fs-3 me-2"></i>
                        <h4 className="fw-semibold">Support</h4>
                    </div>
                    <h2 className="fw-bold mb-3">Krijg geweldige hulp van een team experts</h2>
                    <p>
                        Heb je vragen over het installeren van modpacks of serverbeheer? Ons expertteam helpt je graag met Minecraft server hosting, VPS en meer.
                    </p>
                    <Link to="/domein" className="btn btn-outline-dark rounded-pill px-4 mt-3">
                        Bekijk domein hosting <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>

            <div className="section-container">
                <div className="section-text">
                    <div className="col-lg-6 text-center mb-4 mb-lg-0"></div>
                    <div className="col-lg-6 ms-3">
                        <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-gear fs-3 me-2"></i>
                            <h4 className="fw-semibold">Beheren</h4>
                        </div>
                        <h2 className="fw-bold mb-3">In controle met ons fantastische paneel</h2>
                        <p>
                            Met ons gebruiksvriendelijke Minecraft hosting paneel beheer je eenvoudig je servers, mods en instellingen, zonder gedoe.
                        </p>
                        <Link to="/domein" className="btn btn-outline-dark rounded-pill px-4 mt-3">
                            Bestel Minecraft server hosting <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                <img src="/media/minecraft3.png" alt="Minecraft server beheer paneel" className="section-image mt-3" />
            </div>
        </div>
    )
}

export default Minecraft
