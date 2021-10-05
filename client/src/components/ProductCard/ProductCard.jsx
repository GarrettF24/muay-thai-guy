import "./ProductCard.css"
import { Link } from "react-router-dom"
import Pictures from "../../assets/logo.png"
export default function ProductCard(props) {
  return (
    <div className="product-card">
      <Link to={`/products/${props.product.id}`}>
        <img src={Pictures} alt={props.name} />
      </Link>
    </div>
  )
}
