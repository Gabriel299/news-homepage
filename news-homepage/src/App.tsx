import Header from './components/Header'
import Main from './components/Main'
import Aside from './components/Aside'

function App() {

  return (
    <>
      <Header />
      <div className='grid grid-cols-3 grid-rows-3 gap-x-7.5'>
        <Main />
        <Aside />
      </div>
    </>
  )
}

export default App