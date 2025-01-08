import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("her zaman çalışır")
  })

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır.")
    //veritabanından verileri getir ve listele... ... ...
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve FIRSTNAME veya LASTNAME state değeri değiştiğinde çalışır")
  }, [firstName], [lastName])

  // useEffect(() => {
  //   console.log("ilk render edildiğinde ve LASTNAME state değeri değiştiğinde çalışır")
  // }, [lastName])


  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Boray")}>Adı Değiştir</button>
        <br />
        <button onClick={() => setLastName("Gülpınar")}>Soyad Değiştir</button>
      </div>
    </div>
  )
}

export default App
