import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <h4 className="text-center text-danger">Your cart is empty</h4>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="card mb-3 shadow" key={item.id}>
              <div className="row g-0 align-items-center">
                <div className="col-md-3">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start cart-img"
                    alt={item.name}
                  />
                </div>

                <div className="col-md-9">
                  <div className="card-body">
                    <h5>{item.name}</h5>
                    <p className="text-success fw-bold">₹{item.price}</p>

                    <div className="d-flex align-items-center gap-3">
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>

                      <h5>{item.quantity}</h5>

                      <button
                        className="btn btn-success"
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>

                      <button
                        className="btn btn-outline-danger ms-3"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-end mt-4">
            <h3>Total: ₹{totalAmount}</h3>
           <button
  className="btn btn-primary btn-lg mt-2"
  onClick={() => {
    alert("Order Placed Successfully!");

    dispatch(clearCart());

    navigate("/");
  }}
>
  Place Order
</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;