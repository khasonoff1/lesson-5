import { Fragment, memo } from "react";
import { Button, Form } from "react-bootstrap";

import PropTypes from "prop-types";
import { categories } from "../../data/categories";

const ProductsForm = ({
  validated,
  handleSubmit,
  product: { name, price, category, description },
  handleProduct,
  selected,
}) => {
  return (
    <Fragment>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleProduct}
            value={name}
            required
            type="text"
            placeholder="Name"
          />
          <Form.Control.Feedback type="invalid">
            Please fill this field!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            required
            onChange={handleProduct}
            type="number"
            placeholder="Price"
          />
          <Form.Control.Feedback type="invalid">
            Please fill this field!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            onChange={handleProduct}
            value={description}
            as="textarea"
            type="text"
            placeholder="Description"
          />
          <Form.Control.Feedback type="invalid">
            Please fill this field!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Select category</Form.Label>
          <Form.Select onChange={handleProduct} required value={category}>
            <option></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit">
          {selected === "null" ? "Add" : "Save"} product
        </Button>
      </Form>
    </Fragment>
  );
};

ProductsForm.displayName = "ProductsForm";

ProductsForm.propTypes = {
  validated: PropTypes.bool,
  handleSubmit: PropTypes.func,
  products: PropTypes.array,
  selected: PropTypes.string,
  product: PropTypes.object,
  handleProduct: PropTypes.func,
};

const ProductsFormMemo = memo(ProductsForm);

export default ProductsFormMemo;
