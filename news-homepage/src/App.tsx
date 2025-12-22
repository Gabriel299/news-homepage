import Header from './components/Header'
import Main from './components/Main'
import Aside from './components/Aside'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='flex lg:grid flex-col lg:grid-cols-3 xl:grid-cols-[repeat(3,22rem)] xl:grid-rows-[repeat(4,auto)]'>
        <Header />
        <Main />
        <Aside />
        <Footer />
      </div>
    </>
  )
}

export default App