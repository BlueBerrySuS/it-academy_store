import CatalogList from './components/catalog-list/catalog-list.jsx'
import CatalogItem from './components/catalog-item/catalog-item.jsx'
import './App.css'
import CatalogPage from './pages/catalog-page/catalog-page.jsx'
import Header from './components/header/header.jsx'

function App() {

  return (
    <>
      <Header isGuest={true}/>
      <CatalogPage/>
    </>
  )
}

export default App
