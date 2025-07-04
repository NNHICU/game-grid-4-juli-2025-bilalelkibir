import '../index.scss';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container mt-5">

            <Helmet>
                <title>Game Grid | Minecraft Server Hosting en VPS</title>
                <meta name="description" content="Host jouw eigen Minecraft server of VPS met Game Grid. Snel, betrouwbaar en met uitstekende klantenservice." />
            </Helmet>

            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h1><strong>De ultieme hosting</strong></h1>
                    <span>voor jouw Minecraft project</span>
                </div>
                <div className="col-md-8 text-center mt-4">
                    <p>
                        Lanceer vandaag nog je Minecraft server of VPS. Geniet van geweldige klantenservice, fantastische prestaties en het beste controlepaneel.
                    </p>
                </div>
                <div className="col-md-8 text-center mt-3">
                    <Link to="/minecraft" className="btn btn-dark rounded-pill mx-2 px-4">
                        Bekijk server hosting
                    </Link>
                    <Link to="/vps" className="btn btn-light rounded-pill mx-2 px-4">
                        Lanceer jouw VPS
                    </Link>
                </div>
            </div>

            <div className="row mt-5 g-4">
                <div className="col-lg-5">
                    <div className="h-100 p-4 bg-white rounded-4 shadow-sm d-flex flex-column justify-content-between">
                        <div>
                            <h4>Minecraft server hosting</h4>
                            <p>Je eigen Minecraft server met alle mods, versies en plugins. Java & Bedrock ondersteuning.</p>
                            <Link to="/minecraft" className="btn rounded-pill border-dark mb-3">
                                Bestel jouw server <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                        <img className="img-fluid img-minecraft mt-2" src="/media/minecraft.webp" alt="Minecraft server hosting afbeelding" />
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="row h-100 g-4">
                        <div className="col-12">
                            <div className="h-100 p-4 bg-white rounded-4 shadow-sm d-flex flex-row justify-content-between align-items-center">
                                <div>
                                    <h4>Virtual private servers</h4>
                                    <p>Schaalbare en krachtige VPS hosting voor elk project. Kies tussen AMD Ryzen 9 of Intel Xeon CPU's.</p>
                                    <Link to="/vps" className="btn rounded-pill border-dark">
                                        Bestel jouw VPS <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                                <img className="img-fluid d-none d-md-block img-rocket" src="/media/rocket.svg" alt="Virtual private server VPS" />
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="h-100 p-4 bg-white rounded-4 shadow-sm d-flex flex-column justify-content-between">
                                        <h4>Domeinnamen</h4>
                                        <p>Eerlijke en stabiele prijzen. Kies uit onze uitgebreide lijst met TLD's.</p>
                                        <Link to="/domein" className="btn rounded-pill border-dark">
                                            Registreer jouw domein <i className="bi bi-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="h-100 p-4 bg-white rounded-4 shadow-sm d-flex flex-column justify-content-between">
                                        <h4>Webhosting</h4>
                                        <p>Onbeperkte webhosting. Kies je opslaglimiet en niets anders.</p>
                                        <Link to="/webhosting" className="btn rounded-pill border-dark">
                                            Je website hosten <i className="bi bi-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container">
                <div className="section-text">
                    <div className="col-lg-6 text-center mb-4 mb-lg-0"></div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center mb-2">
                            <i className="bi bi-gear fs-3 me-2"></i>
                            <h4 className="fw-semibold">Beheren</h4>
                        </div>
                        <h2 className="fw-bold mb-3">In controle met ons fantastische paneel</h2>
                        <p>
                            Beheer je Minecraft server hosting, VPS en andere diensten met ons gebruiksvriendelijke controlepaneel. Ons paneel is in-house ontwikkeld om de beste ervaring te garanderen.
                        </p>
                        <div className="mb-2">
                            <i className="bi bi-star-fill me-2"></i>
                            <b>Rijk aan features.</b> We voegen voortdurend nieuwe features toe. Heb je een suggestie? Laat het ons weten!
                        </div>
                        <div className="mb-2">
                            <i className="bi bi-fast-forward-fill"></i>
                            <b>Snel.</b> Geen enkele vertraging bij het beheren van je Minecraft server, VPS of andere hosting dienst.
                        </div>
                        <a href="#" className="btn btn-outline-dark rounded-pill px-4 mt-3">
                            Bekijk de Demo <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <img src="/media/screen1.png" alt="Beheren Minecraft server met controlepaneel" className="section-image mt-3" />
            </div>

            <div className="row align-items-center">
                <div className="col-lg-6 order-1">
                    <img src="/media/screen2.png" alt="Klantenservice Minecraft hosting" className="img-fluid img-rounded" />
                </div>

                <div className="col-lg-6 order-2">
                    <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-headset fs-3 me-2"></i>
                        <h4 className="fw-semibold">Support</h4>
                    </div>
                    <h2 className="fw-bold mb-3">Krijg geweldige hulp van een team experts</h2>
                    <p>
                        Of je nu een vraag hebt over het installeren van een mod pack voor je Minecraft server of de beste tips wilt. Ons team van experts staat klaar om je vragen te beantwoorden. We hebben ook een kennisbank vol met tutorials over Minecraft server hosting, VPS en nog veel meer.
                    </p>
                    <a href="#" className="btn btn-outline-dark rounded-pill px-4 mt-3">
                        Bekijk de kennisbank <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="container py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                        <h1 className="fw-bold mb-3">De beste Minecraft server hosting</h1>
                        <p className="mb-4">
                            Game Grid is de Nederlandse Minecraft server hosting. Sinds 2013 combineren we snelle servers, klantenservice van Minecraft server experts en een fantastisch control panel tot de ultieme Minecraft hosting ervaring. Een Game Grid MC server betekent geen lag, lage ping en de beste support.
                        </p>
                        <a href="#" className="btn btn-outline-dark rounded-pill px-4">
                            Bestel Minecraft server hosting <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src="/media/minecraft2.png" alt="Minecraft server hosting Nederland" className="img-fluid hero-minecraft" />
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                            <h5 className="fw-bold mb-2">Minecraft server</h5>
                            <p className="mb-4">Start je eigen Minecraft server in een paar seconden, direct online.</p>
                            <a href="#" className="btn btn-dark w-100 rounded-pill">Start je minecraft server</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                            <h5 className="fw-bold mb-2">Virtual Private Server</h5>
                            <p className="mb-4">Krachtige en schaalbare VPS hosting voor elk project.</p>
                            <a href="#" className="btn btn-dark w-100 rounded-pill">Lanceer jouw VPS</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                            <h5 className="fw-bold mb-2">Webhosting</h5>
                            <p className="mb-4">Betrouwbare websitehosting zonder onnodige beperkingen.</p>
                            <a href="#" className="btn btn-dark w-100 rounded-pill">Je website hosten</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
