import { useState } from 'react'
import Header from './Components/Header'
import Hero from './layouts/Hero'
import Cards from './Components/Cards'
import Faqs from './Components/Faqs'
import Footer from './Components/Footer'
import CopyModal from './Components/CopyModal'
import '/src/index.css'
import './css/card.css'
import './App.css'
import './css/faq.css'

function App() {
  const [copyModalVisible, setCopyModalVisible] = useState(false);

  const handleCopyModal = () => {
    setCopyModalVisible(true);
    setTimeout(() => {
        setCopyModalVisible(false);
    }, 15000);
};


  return (
    <div className='app'>
      <Header />
      <Hero copyModalVisible={copyModalVisible} handleCopyModal={handleCopyModal}/>
      {copyModalVisible && <CopyModal copyModalVisible={copyModalVisible} closeModal={() => setCopyModalVisible(false)}/>}
      <section className='cards-session'>
        <Cards />
      </section>
      <section className='faq-session'>
        <Faqs />
      </section>
      <Footer />
    </div>
  )
}

export default App
