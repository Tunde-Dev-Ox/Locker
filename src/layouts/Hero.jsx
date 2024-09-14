import { useState, useEffect, useCallback } from 'react'
import CopyModal from '../Components/CopyModal'
import '/src/css/hero.css'

function Hero({copyModalVisible, handleCopyModal}) {
    const [length, setLength] = useState(30);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [number, setNumber] = useState(true);
    const [symbol, setSymbol] = useState(true);
    const [password, setPassword] = useState('');
    const [strengthColor, setStrengthColor] = useState('red');


    const handleCheckboxChange = (setter, current) => {
        const totalActive = [uppercase, lowercase, number, symbol].filter(Boolean).length;

        if(totalActive === 1 && current) {
            return;
        }
        setter(!current);
    }

    const handleSubtract = (setter, current) => {
        if (current === 1) {
            return;
        }
        setter(current - 1);
    }

    const handleAdd = (setter, current) => {
        if(current === 30) {
            return
        }
        setter(current + 1);
    }


    const passwordStrength = () => {
        if(password.length < 8) {
            return 'Weak';
        } else if (password.length < 12) {
            return 'Medium';
        } else {
            return 'Strong';
        }
    }

    const generatePassword = useCallback(() => {
        let characterList = '';
        
        if(uppercase) characterList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if(lowercase) characterList += 'abcdefghijklmnopqrstuvwxyz';
        if(number) characterList += '0123456789';
        if(symbol) characterList += '!@#$%^&*()_+';
        let generatedPassword = '';
        for(let i = 0; i < length; i++) {
            const character = Math.floor(Math.random() * characterList.length);
            generatedPassword += characterList.charAt(character);
        }

        setPassword(generatedPassword);
    }, [length, uppercase, lowercase, number, symbol]);

    useEffect(() => {
        generatePassword();
    }, [length, uppercase, lowercase, number, symbol]);


    return(
        <div className="hero">
            <div className="hero-wrapper">
                <div className="hero-text">
                    <h1 className="hero__heading">
                        Generate Random Password With <span>Locker</span>
                    </h1>
                    <p className="hero__title">
                    Create strong and secure passwords to keep all your accounts safe online.
                    </p>
                </div>
                <div className="hero-form">
                  <form action="" className="password-form">
                    <div className="form-control-wrapper">
                        <input 
                        type="text" 
                        className="form-control"
                        value={password}
                        placeholder='Your Secure Password'
                        readOnly
                        />
                        <label htmlFor=""
                        className="labelform"
                        >{passwordStrength()}</label>
                        <div className="reset-password" onClick={generatePassword}>
                            <img src="/assets/reset-svgrepo-com.svg" alt="reset-icon" />
                        </div>
                    </div>
                    <div className="copy-btn-wrapper">
                        <button type="button" onClick={(
                            handleCopyModal
                        )}>Copy</button>
                    </div>
                  </form>
                </div>
                <div className="password-character">
                    <div className="password-number">
                        <span className="number-text">Password length</span>
                        <div className="password-length-wrapper">
                            <button className="minus" onClick={() => handleSubtract(setLength, length)}>-</button>
                            <span className="password-length">{length}</span>
                            <button className="plus" onClick={() => handleAdd(setLength, length)}>+</button>
                        </div>
                    </div>
                    <div className="characters-used">
                        <span className="character-used-text">
                            Characters used
                        </span>
                        <div className="characters-input-wrapper">
                            <div className="characters-input">
                                <input 
                                type="checkbox" 
                                name="uppercase" 
                                id="letter" 
                                checked={uppercase}
                                onChange={() => 
                                    handleCheckboxChange(setUppercase, uppercase)
                                }
                                />
                                <label htmlFor="letters">ABC</label>
                            </div>
                            <div className="characters-input">
                                <input 
                                type="checkbox" 
                                name="lowercase" 
                                id="letter"
                                checked={lowercase}
                                onChange={() => 
                                    handleCheckboxChange(setLowercase, lowercase)
                                } />
                                <label htmlFor="letters">abc</label>
                            </div>
                            <div className="characters-input">
                                <input type="checkbox"
                                name="number" 
                                id="number"
                                checked={number}
                                onChange={() =>
                                     handleCheckboxChange(setNumber, number)
                                } />
                                <label htmlFor="number">123</label>
                            </div>
                            <div className="characters-input">
                                <input type="checkbox" 
                                name="symbol" 
                                id="symbol"
                                checked={symbol}
                                onChange={() => 
                                    handleCheckboxChange(setSymbol, symbol)
                                } />
                                <label htmlFor="symbol">$#%</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-img">
                    <img src="/assets/4498897.jpg" alt="password illustration" />
                </div>
            </div>
        </div>
    )
}

export default Hero