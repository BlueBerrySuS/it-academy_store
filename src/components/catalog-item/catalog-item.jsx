import style from "./catalog-item.module.css"

function CatalogItem({ id, name, discription, imgURL}) {
    return (
        <div className={style.item} id={id}>
            <img className={style.item_image} src={imgURL} />
            <div className={style.item_content}>
                <h3 className={style.item_name}>{name}</h3>
                <button className={style.item_button}>В корзину</button>
            </div>
        </div>
    )
}

export default CatalogItem;