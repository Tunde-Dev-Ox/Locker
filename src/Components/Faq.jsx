import { useState } from 'react'
import '/src/css/faq.css'


function Faq({title="", text=""}) {
    const [isOpen, setIsopen] = useState(false);

    const toggleFaq = () => {
         setIsopen(!isOpen);
    }


    return(
        <div className="faq-container">
           <div className="faq-inner-container" onClick={toggleFaq}>
              <h6 className="faq-title">{title}</h6>
              <button type="button">
                <span>{isOpen ? '-' : '+'}</span>
              </button>
           </div>
           <div className={`faq-collapse ${isOpen ? 'open' : ''}`}>
                <p className="faq-collapse-text">{text}</p>
            </div>
        </div>
    )
}

export default Faq