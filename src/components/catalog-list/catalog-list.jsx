import CatalogItem from "../catalog-item/catalog-item.jsx";
import { itemsList } from "../../utils/itemsList.js";
import style from "./catalog-list.module.css"

function CatalogList() {
    return (
        <div className={style.catalog_list}>
            {itemsList.map((item, index) => (
                <CatalogItem 
                    key={index} 
                    id={item.id} 
                    name={item.name} 
                    discription={item.discription}
                    imgURL={item.url}
                />
            ))
        }
        </div>
    )
}

export default CatalogList;