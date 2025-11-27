import Header from './components/Header'
import Main from './components/Main'
import Aside from './components/Aside'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <div className='grid grid-cols-3 grid-template-rows: repeat(3, 1/3) gap-x-7.5'> */}
      <div className='grid grid-cols-3 grid-template-rows:repeat(4, auto) h-full'>
      <Header />
        <Main />
        <Aside />
        <Footer />
      </div>
    </>
  )
}

export default App