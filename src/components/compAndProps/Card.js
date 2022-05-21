import {useState} from 'react'
import style from "../../module/index.module.css";
const Card = ({product} ) => {
    const [highlight, setLight] = useState(false)
    const flash = () => {
        !highlight?setLight(true):setLight(false)
    }

    return (
        <div className={style.productCard} onClick={flash} style={{ boxShadow: highlight ? '5px 5px 15px 5px #000000' : '' }} >
            {highlight && (
                <p style={{ padding:'2px 4px', margin:'0px 0px 4px 0px', borderRadius:'none', color:'red',fontWeight:'bold' }} onClick={flash}>Remove Highlight</p>
            )}
            <img src={product.productImage} alt="product image" style={{width:'200px', heigth:'200px' }} />
            <h1 style={{fontSize:'1rem', padding:'12px', textTransform:'Capitalize'}}>{product.productName}</h1>
            <div style={{display:'grid', gridTemplateColumns: 'repeat(2, 1fr)',placeItems:'center'}}>
                <p style={{textAlign:'center'}}>Product price {product.productPrice}</p>
                <p style={{textAlign:'center'}}> Sale Price {product.productSalePrice}</p>
                <p style={{textAlign:'center'}}> In Stock {product.productStock} st.</p>
                <p style={{textAlign:'center'}}> Rating {product.rating}</p>
            </div>


        </div>
    )
}


export default Card