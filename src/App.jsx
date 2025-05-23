import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'
import Search from './components/Search/Search'

const countryAllPromise = fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())

function App() {
  return (
    <div>
      <section className="w-1/3 mx-auto text-center">
        <img className="rounded-2xl h-56 w-96" src="/nadir.webp" alt="travel buddy" />
        <h3 className="font-bold text-3xl">Nadir on the Go</h3>
        <Search></Search>
      </section>
      <Suspense fallback={<p>Yes Mama its loading....</p>}>
        <Countries countryAllPromise={countryAllPromise}></Countries>
      </Suspense>
    </div>
  )
}

export default App
