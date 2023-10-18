import { memo } from "react";

import PropTypes from "prop-types";

const ProductCard = ({
  order,
  id,
  name,
  price,
  category,
  description,
  editProduct,
  deleteProduct,
}) => {
  return (
    <tr>
      <td>{order}</td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td className="text-end">
        <button
          className="btn btn-primary me-3"
          onClick={() => editProduct(id)}
        >
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => deleteProduct(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

ProductCard.propTypes = {
  order: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,

  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
};

const ProductCardMemo = memo(ProductCard);

export default ProductCardMemo;
