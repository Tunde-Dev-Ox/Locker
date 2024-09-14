import Card from "./Card"

function Cards() {
    return(      
        <div className="cards-wrapper">
          <h1 className="cards-session-title">
            What makes your password strong?
          </h1>
          <div className="card-container">
            <Card 
            url="/assets/password-minimalistic-svgrepo-com.svg" title="Long" 
            text="The longer a password, the more secure it is. A strong password should be at least 10 characters long."/>           
            <Card 
            url="/assets/password-svgrepo-com.svg" 
            title="Complex" 
            text="Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names."/>         
            <Card 
            url="/assets/password-minimalistic-input-svgrepo-com.svg" title="Unique" 
            text="A strong password should be unique to each account to reduce vulnerability in the event of a hack."/>           
          </div>
        </div>
    )
}

export default Cards