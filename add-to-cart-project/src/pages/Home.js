import ProductCard from "../components/ProductCard";

// IMPORT IMAGES
import shoe from "../assets/images/shoe.jpg";
import watch from "../assets/images/watch.jpg";
import headphone from "../assets/images/headphones.jpg";
import bag from "../assets/images/bag.jpg";

function Home() {

  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: 1999,
      image: shoe,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image: watch,
    },
    {
      id: 3,
      name: "Headphones",
      price: 1499,
      image: headphone,
    },
    {
      id: 4,
      name: "Backpack",
      price: 999,
      image: bag,
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products</h2>

      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;