import { useState } from 'react';
import Faq from '/src/Components/Faq'
import '/src/css/faq.css'

function Faqs() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };



    return(
        <>
        <div className="faqs-wrapper">
            <h2 className="faqs-header">
                Got Questions?
            </h2>
            <p className="faqs-subtitle">
            Questions about this random password generator? Answers below!
            </p>
        </div>
        <div className="faq">
            <Faq 
            title="What is Locker?"
            text="Locker is a secure password generator designed to help you create strong, unique passwords for all your online accounts."
            isOpen={openFaq === 0}
            onToggle={() => toggleFaq(0)}
            />
            <Faq 
            title="Why should I use Locker?"
            text="Locker helps protect your online accounts from unauthorized access by generating strong, random passwords."
            isOpen={openFaq === 1} 
            onToggle={() => toggleFaq(1)}
            />
            <Faq 
            title="How does Locker create random passwords?"
            text="Locker uses a combination of algorithms and random number generators to produce unique sequences of characters."
            isOpen={openFaq === 2} 
            onToggle={() => toggleFaq(2)}
            />
            <Faq 
            title="Can I customize the passwords generated by Locker?"
            text="Yes, Locker allows you to customize the length, character types (uppercase, lowercase, numbers, symbols), and other options to suit your specific needs."
            isOpen={openFaq === 3}
            onToggle={() => toggleFaq(3)}
            />
            <Faq 
            title="Is it safe to use Locker?"
            text="Yes, Locker is a secure password generator designed to protect your privacy. It does not store any of your passwords."
            isOpen={openFaq === 4}
            onToggle={() => toggleFaq(4)}
            />
            <Faq 
            title="Does Locker store my passwords?"
            text="No, Locker does not store the passwords it generates. They are produced on-the-fly and displayed directly to you."
            isOpen={openFaq === 5}
            onToggle={() => toggleFaq(5)}
            />
            <Faq 
            title="How often should I change my passwords?"
            text="It's recommended to change your passwords regularly, especially for important accounts. A good rule of thumb is to change them every three months."
            isOpen={openFaq === 6}
            onToggle={() => toggleFaq(6)}
            />
            <Faq 
            title="Can I use the same password for multiple accounts?"
            text="No, you should never use the same password for multiple accounts. If one account is compromised, your other accounts could also be at risk."
            isOpen={openFaq === 7}
            onToggle={() => toggleFaq(7)}
            />
            <Faq 
            title="What is a passphrase, and is it better than a password?"
            text="A passphrase is a longer, more memorable password that uses words instead of random characters. Passphrases can be easier to remember but may be less secure than truly random passwords."
            isOpen={openFaq === 8}
            onToggle={() => toggleFaq(8)}
            />
        </div>
        </>
    )
}

export default Faqs