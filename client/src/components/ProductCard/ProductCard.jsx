import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <Link to={`/products/${props.product.id}`}>
        <img
          className="product-card-image"
          src={props.product.image_url}
          alt={props.product.name}
        />
      </Link>
    </div>
  )
}
