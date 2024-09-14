// import Hero from '../layouts/Hero'
import '../css/copymodal.css'

function CopyModal({copyModalVisible, closeModal}) {

    return(
        <div className={`modal ${copyModalVisible ? 'show' : 'hide'}`}>
            <div className="modal-wrapper">
                <button className="close" onClick={closeModal}>
                    <img src="/assets/wrong-cancel-close-svgrepo-com.svg" alt="close" />
                </button>
                <div className="copytext">
                    <h2>Copied!</h2>
                    <p>Your password has been copied to your clipboard</p>
                    <span>To paste the password someplace else, press CTRL + V on your keyboard.</span>
                </div>
                <div className="copyimage">
                    <img src="/assets/illustration-modal.svg" alt="clipboard" />
                </div>
            </div>
        </div>
    )
}

export default CopyModal