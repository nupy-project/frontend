import React from 'react'
import { computer, Colash1, Colash2, targeta, Beneficio, wallet, Visa, Efecty, Tron, Baloto, cel, Footer } from '../features/assets/ts';
import HeaderLanding from './components/HeaderLanding';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="grid-container">
        <div className="grid-item item-combined">
          <HeaderLanding />
        </div>
        <div className="grid-item item-2-3-col2">
          <div className="p-2 h-70 d-flex justify-content-end">
            <img src={computer} alt="Computadora mostrando soluciones de pago" className="img-fluid h-60" style={{ marginRight: '-22%' }} />
          </div>
        </div>

        <div className="grid-item item-combined-2-3 d-flex flex-column align-items-start justify-content-start p-8 text-center text-md-start">
          <h1 className="display-4 mb-3">Soluciones <br /> de <b style={{ color: '#0beea6' }}>pago rápidas</b><br /> y confiables</h1>
          <span className="lead text-left mb-3">Con NuPay, accede a tecnologías avanzadas,<br />
           soporte continuo y flexibilidad de pagos <br />
            en USDT</span>
          <button className="btn btn-primary mt-3" style={{ backgroundColor: '#0beea6', color: '#000', borderRadius: '20px', padding: '10px 30px' }}>Comienza ahora</button>
        </div>

        <div className="grid-item item-combined-col1-row1-2 p-8 d-flex flex-column align-items-start justify-content-start text-center text-md-start">
          <h1 className='display-4 mb-3'>Recibe y gestiona <br /> pagos desde tu <br />Dashboard</h1>
          <span className="lead text-left mb-3">En NuPay, tus necesidades de recaudo <br /> están cubiertas de manera ágil y segura</span>
        </div>

        <div className="grid-item item-combined-col1-2-row2 p-8 d-flex flex-column align-items-start justify-content-center text-center text-md-start">
          <h2 className='display-4 mb-4' style={{ color: '#0beea6', fontSize: '3rem' }}>Cash In</h2>
          <ol className="fs-4" style={{ fontSize: '1.5rem', paddingLeft: '2rem' }}>
            <li>Depósitos a través de <br /> transferencia bancaria</li><br />
            <li>Pagos con tarjetas de crédito <br />y débito</li><br />
            <li>Depósitos en efectivo en puntos <br />autorizados</li><br />
          </ol>
        </div>

        <div className="grid-item item-4-5-col2">
          <div className="p-2 h-80 d-flex align-items-start justify-content-center" style={{ position: 'relative' }}>
            <img src={Colash1} alt="Colash 1" className="img-fluid" style={{ maxHeight: '100%', maxWidth: '100%', marginRight: '22%' }} />
          </div>
        </div>

        <div className="grid-item item-5-6-col1">
          <div className="p-2 d-flex justify-content-end align-items-end w-100 h-100">
            <img src={Colash2} alt="Colash 2" className="img-fluid w-50 mb-3" style={{ position: 'relative', left: '20%', top: '-50px',width: '100%', height: '60%'}} />
          </div>
        </div>

        <div className="grid-item item-8-9-col1 d-flex flex-column align-items-start justify-content-center p-5 text-center text-md-start w-100 h-100">
          <h1 className='display-4 mb-3'>Retira o paga <br /> fácilmente con <br />nuestra plataforma.</h1>
          <span className="lead text-left mb-3">NuPay Resuelve tus necesidades de retiro <br />y pago de fondos de manera rápida y confiable</span>
        </div>

        <div className="grid-item item-7-8-col1">
          <div className="p-2 w-70">
            <img src={targeta} alt="Targeta" className="img-fluid" />
          </div>
        </div>

        <div className="grid-item item-8-9-col1 d-flex flex-column align-items-start justify-content-center p-5 text-center text-md-start w-100 h-100">
          <h1 className='display-4 mb-3'><b style={{ color: '#0beea6' }}>Cash Out</b></h1>
          <span className="lead text-left mb-3">
            <ol className="fs-4" style={{ fontSize: '1.5rem', paddingLeft: '2rem' }}>
              <li><b>Transferencias directas a cuentas <br />bancarias.</b></li><br />
              <li><b>Retiros de efectivo en puntos <br />autorizados.</b></li><br />
              <li><b>Cargas de fondos en targetas de credito <br />prepagadas.</b></li><br />
            </ol>
          </span>
        </div>

        <div className="grid-item item-9-col1-col2 shadow-sm d-flex flex-column align-items-start justify-content-around p-4 rounded text-center text-md-start w-100 h-100">
          <h2 className="mb-4"><b>Beneficios NuPay</b></h2>
          <div className="d-flex align-items-center justify-content-space-around" style={{ backgroundColor: '#d1d1d1', borderRadius: '60px', paddingLeft: '30px', width: '90%', height: '30vh', position: 'relative' }}>
            <div className="mb-4">
              <h1 className="display-4 text-start">Pagos <br />Automatizados <br /> en USDT</h1>
            </div>
            <div className="text-center" style={{ width: '90%', height: '100%' }}>
              <img src={Beneficio} alt="Beneficio NuPay" className="img-fluid rounded" style={{ width: '30%', position: 'absolute', top: '-90px' }} />
            </div>
          </div>
        </div>

        <div className="grid-item item-10-col1-col2 d-flex align-items-center justify-content-between p-4 w-100 h-100">
          <div className="d-flex align-items-center justify-content-between" style={{ width: '100vw' }}>
            <div className="d-flex align-items-center">
              <img src={wallet} alt="Wallet" className="img-fluid mb-3" style={{ maxWidth: '100px' }} />
              <p className="mb-0 me-3"><b>Solo debes registrar tus Wallets</b> una vez <br /> y podrás efectuar los pagos fácilmente <br /> con la guía del sistema</p>
            </div>
            <button className="btn btn-primary mt-3" style={{ marginRight: '10%' }}>Comienza ahora</button>
          </div>
        </div>

        <div className="grid-item item-11-col1-col2 d-flex justify-content-around align-items-center text-center text-md-start">
          <img src={Visa} alt="Visa" style={{ width: '15%' }} />
          <img src={Efecty} alt="Efecty" style={{ width: '15%' }} />
          <img src={Tron} alt="Tron" style={{ width: '15%' }} />
          <img src={Baloto} alt="Baloto" style={{ width: '15%' }} />
        </div>

        <div className="grid-item item-12-13-col1">
          <div className="p-2 h-100">
            <img src={cel} alt="Cel" className="img-fluid h-100" />
          </div>
        </div>

        <div className="grid-item item-12-13-col2 d-flex flex-column align-items-start justify-content-center p-5 text-center text-md-start">
          <h2 className="display-4 mb-3"><b>Compras e intercambios internacionales (OTC)</b></h2>
          <p className="lead text-left mb-3"><b style={{ color: '#0beea6' }}>NuPay</b> se encarga de facilitar tus <br /> compras e intercambios de forma rápida y segura.</p>
        </div>

        <div className="grid-item item-12-13-col3 d-flex flex-column align-items-start justify-content-center p-5 text-center text-md-start">
          <h2 className="display-4 mb-3"><b>Acceso a mejores <br /> oportunidades</b></h2>
          <p className="lead text-left mb-3"><b style={{ color: '#0beea6' }}>Beneficios NuPay</b> <br />tienen en cuenta tus necesidades de pago <br />y te brindan las mejores oportunidades.</p>
        </div>

        <div className="grid-item item-14-col1-col2">
          <div className="p-2 d-flex justify-content-center align-items-center h-100 w-100">
            <img src={Footer} alt="Footer" className="img-fluid" style={{ width: '30%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage