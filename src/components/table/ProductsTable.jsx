import { Fragment, memo } from "react";

import PropTypes from "prop-types";

import { Table } from "react-bootstrap";
import ProductCard from "../card/ProductCard";

const ProductsTable = ({
  products,
  deleteProduct,
  editProduct,
  search,
  category,
  sortPrice,
}) => {
  let results = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );

  if (category !== "all") {
    results = results.filter((result) => result.category === category);
  }

  if (sortPrice === "low") {
    results = results.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (sortPrice === "high") {
    results = results.sort((a, b) => (a.price < b.price ? 1 : -1));
  }

  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {results.length !== 0 ? (
            results.map((product, i) => (
              <ProductCard
                order={i + 1}
                key={product.id}
                deleteProduct={deleteProduct}
                editProduct={editProduct}
                {...product}
              />
            ))
          ) : (
            <tr>
              <td className="text-center" colSpan={6}>
                No products
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Fragment>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array,
  search: PropTypes.string,
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
  category: PropTypes.string,
  sortPrice: PropTypes.string,
};

const ProductsTableMemo = memo(ProductsTable);

export default ProductsTableMemo;
