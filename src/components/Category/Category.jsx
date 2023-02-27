import "./Category.scss"
import { useParams } from "react-router-dom";
import Products from "../Products/Products.jsx";
import useFetch from "../../hooks/useFetch";

const Category = () =>{

    const {id}= useParams();
    const{data}=useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
    return <div className="category-main-contain">
        <div className="layout">
            <div className="title">
                {data?.data?.[0]?.attributes.categories?.data?.[0]?.attributes.title}
            </div>
            <Products innerPage={true} products={data}/>
        </div>
        
    </div>
}

export default Category;