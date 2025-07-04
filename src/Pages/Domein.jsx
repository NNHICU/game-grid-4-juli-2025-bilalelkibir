import '../index.scss'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function Domein() {
    return (
        <div>
            <Helmet>
                <title>Domeinregistratie & DNS-beheer - Betrouwbare Hosting | Game Grid</title>
                <meta name="description" content="Registreer jouw domeinnaam eenvoudig met betrouwbaar DNS-beheer en kies uit 21 beschikbare TLD's. Game Grid biedt stabiele prijzen en top support." />
                <meta name="keywords" content="domeinregistratie, DNS-beheer, TLD's, domein hosting, betrouwbare domeinnaam" />
            </Helmet>

            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h1><strong>De ultieme hosting voor jouw domein</strong></h1>
                    <span>Eenvoudige registratie en krachtig DNS-beheer</span>
                </div>
                <div className="col-md-8 text-center mt-4">
                    <p>
                        Registreer je domeinnaam met onze betrouwbare DNS-beheer service en kies uit een breed aanbod van 21 TLD's.
                    </p>
                </div>

                <div className="row justify-content-center my-2">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control form-control-lg rounded text-center"
                            placeholder="Registreer een domeinnaam..."
                            aria-label="Domeinnaam registratie"
                        />
                    </div>
                </div>

                <div className="row justify-content-center mt-5 g-4">
                    <div className="col-md-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-start d-flex align-items-start">
                            <div className="text-warning fs-2 me-3">
                                <i className="bi bi-compass"></i>
                            </div>
                            <div>
                                <h4 className="fw-bold">DNS-beheer</h4>
                                <p>Elk domein heeft gratis en gebruiksvriendelijk DNS-beheer, zodat je altijd de controle houdt.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-start d-flex align-items-start">
                            <div className="text-warning fs-2 me-3">
                                <i className="bi bi-cash-stack"></i>
                            </div>
                            <div>
                                <h4 className="fw-bold">Betrouwbare prijzen</h4>
                                <p>Onze stabiele en transparante prijzen maken domeinregistratie betaalbaar voor iedereen.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="bg-white rounded-4 shadow-sm p-4 h-100 text-start d-flex align-items-start">
                            <div className="text-warning fs-2 me-3">
                                <i className="bi bi-journal-text"></i>
                            </div>
                            <div>
                                <h4 className="fw-bold">21 beschikbare TLD's</h4>
                                <p>Kies uit onze uitgebreide lijst met top-level domeinen voor jouw website.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-5 text-center">
                    <h2 className="fw-bold fs-3">Registreer jouw domeinnaam nu</h2>
                    <p className="text-muted mx-auto mb-4" style={{ maxWidth: '700px' }}>
                        Maak gebruik van onze snelle en betrouwbare domeinregistratie met handige tools en top support.
                    </p>
                    <button className="btn btn-dark rounded-pill px-5">Direct registreren</button>
                </div>

                <div className="row mt-5 g-4">
                    <div className="col-lg-5">
                        <div className="p-4 bg-white rounded-4 shadow-sm">
                            <h4>Zelf je DNS beheren</h4>
                            <p>Met ons eenvoudige paneel beheer je gemakkelijk je DNS-instellingen en zorg je voor optimale bereikbaarheid van je website.</p>
                            <Link to="/minecraft" className="btn btn-outline-dark rounded-pill px-4 mt-3">
                                Bekijk Minecraft hosting <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img src="/media/screen2.png" alt="Domeinregistratie en DNS beheer bij Game Grid" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Domein
