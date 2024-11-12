import CatalogList from '../../components/catalog-list/catalog-list'
import style from './catalog-page.module.css'

function CatalogPage() {
    return (
        <>
        <h1 className={style.title}>Каталог товаров</h1>
        <CatalogList/>
        </>
    )
}

export default CatalogPage