import Image from 'next/image';
import { getProducts } from "../utills/shopify";
import styles from "./home.module.css";
import Navbar from "../component/Navbar";

export default async function Home() {
  let pro = await getProducts();
  let products = pro.data.products;

  const handleAddToCart = (productId) => {
    // Handle add to cart logic here
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div>
     <Navbar />
      <ul className={styles['product-list']}>
        {products.map((product) => (
          <li key={product.id} className={styles['product-item']}>
            <div className={styles['product-image']}>
              <Image
                src={product.images[0].src}
                alt={product.title}
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
            <div className={styles['product-details']}>
              <h2 className={styles['product-title']}>{product.title}</h2>
              <h3 className={styles['product-brand']}>Brand: {product.vendor}</h3>
              <p className={styles['product-price']}>Discounted Price: ${product.variants[0].price}</p>
              {product.variants[0].compare_at_price && (
                <p className={styles['product-discounted-price']}>
                  Price: ${product.variants[0].compare_at_price}
                </p>
              )}
              <p className={styles['product-quantity']}>Available Quantity: {product.variants[0].inventory_quantity}</p>
              <button
                className={styles['add-to-cart-button']}
              
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
