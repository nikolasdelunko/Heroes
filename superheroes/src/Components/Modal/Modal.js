import './Style.css'
import React from 'react';
import AddHero from "../Form/Forms/AddHero"



const Modal = (props) => {
    const {onClick, header, text, actions, action} = props;

    const handleCloseClick = (e) => {
        if (
            e.target.getAttribute("class") === "modal" ||
            e.target.getAttribute("class") === "modalContent__modalClose"
        ) {
            onClick();
        }
    };
    return (
        <div className="modal"  onClick={handleCloseClick}>
            <div className="modal-container">
                <div className="modal-header">
                    <span className='modal-header-title'>{header}</span>
                    <span className="modal-header-close"  onClick={onClick}/>
                </div>
                <div className="modal-content">
                    <p className="modal-content-text">{text}</p>
										{action === "add" && <AddHero textBtn={"Add"} edit={false} />}
										{action === "edit" && <AddHero textBtn={"Edit"} edit={true} />}
                    <div className='modal-control'>
                        {actions}
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Modal;

