import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countryAllPromise = fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())

function App() {
  return (
    <div>
      <section className="w-1/3 mx-auto text-center">
        <img className="rounded-2xl h-56 w-96" src="../public/nadir.webp" alt="travel buddy" />
        <h3 className="font-bold text-3xl">Nadir on the Go</h3>
      </section>
      <Suspense fallback={countryAllPromise}>
        <Countries countryAllPromise={countryAllPromise}></Countries>
      </Suspense>
    </div>
  )
}

export default App
