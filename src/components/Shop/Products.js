import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const Dummy_Products = [
    {
      id:'p1',
      title: "Test Item 1",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id:'p2',
      title: "Test Item 2",
      price: 4,
      description: "This is a second product - amazing!",
    },
    {
      id:'p3',
      title: "Test Item 3",
      price: 10,
      description: "This is a third product - amazing!",
    },
  ];

  const productList = (
    <ul>
      {Dummy_Products.map((data) => (
        <ProductItem
          id={data.id}
          title={data.title}
          price={data.price}
          description={data.description}
        />
      ))}
    </ul>
  );
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {productList}
    </section>
  );
};

export default Products;
