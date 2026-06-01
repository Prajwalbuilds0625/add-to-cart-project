import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import $ from "jquery";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    $("#popup").fadeIn();

    setTimeout(() => {
      $("#popup").fadeOut();
    }, 3000);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-lg">
        <img src={product.image} className="card-img-top" alt={product.name} />

        <div className="card-body text-center">
          <h5>{product.name}</h5>
          <p className="text-success fw-bold">₹{product.price}</p>
          <p>⭐⭐⭐⭐⭐</p>

          <button onClick={handleAddToCart} className="btn btn-primary w-100">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;