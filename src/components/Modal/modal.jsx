import "./modal.css"
import HomeKit from "../../assets/images/home-kit.webp";
import HomeKitJersey from "../../assets/images/Carrusel_Home.webp";

import AwayKit from "../../assets/images/away-kit.webp";
import AwayKitJersey from "../../assets/images/Carrousel-Colecciones-Away.webp";


import ThirdKit from "../../assets/images/third-kit.webp";
import ThiedKitJersey from "../../assets/images/Carrousel-Colecciones-Third-Kit.webp";

import { useState } from "react";

const Modal = () => {

const [openModal, setOpenModal] =useState(false);

const Open = () =>{
setOpenModal(!openModal)
}
return (
<>
    <div className="modal">
        <div className="container">
            <div className="modal-inner">
                <h1>Barça Store Spotify Camp Nou</h1>
                <div className="card-list">
                    <div className="card">
                        <img className="card-img" src={HomeKit} alt="Home Kit" />
                        <div className="card-body">
                            <img className="card-img-bottom" src={HomeKitJersey} alt="" />
                            <div className="card-content">
                                <h2>23/24 HOME KIT</h2>
                                <p> Here to lead the way </p>
                                <button className="card-button" type="button" onClick={Open}>Shop now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img" src={AwayKit} alt="Home Kit" />
                        <div className="card-body">
                            <img className="card-img-bottom" src={AwayKitJersey} alt="" />
                            <div className="card-content">
                                <h2>23/24 AWAY KIT</h2>
                                <p>  The jersey that the 1920s and 1970s  </p>
                                <button className="card-button" type="button" onClick={Open}>Shop now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img" src={ThirdKit} alt="Home Kit" />
                        <div className="card-body">
                            <img className="card-img-bottom" src={ThiedKitJersey} alt="" />
                            <div className="card-content">
                                <h2>23/24 THIRD KIT</h2>
                                <p>  Get the kit created from Barça DNA  </p>
                                <button className="card-button" type="button" onClick={Open}>Shop now</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <div className={`modal-wrapper ${openModal ? 'active-modal' : "" }`}>
        <div className="modal-list">
            <button className="close-btn" onClick={Open}>
                CLOSE
            </button>
            <p className="modal-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum velit officia, maxime, voluptatem minus labore exercitationem voluptas
                veritatis vitae ea, cum quidem magnam quaerat ullam! Perferendis velit, saepe ut
                provident quibusdam harum asperiores delectus in similique incidunt aliquam
                distinctio a.</p>
        </div>
    </div>
</>
)
}

export default Modal;