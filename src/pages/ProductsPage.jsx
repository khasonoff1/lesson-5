import { Col, Container, Row } from "react-bootstrap";

import ProductsHeader from "../components/header/ProductsHeader";
import ProductsTable from "../components/table/ProductsTable";
import ProductsForm from "../components/form/ProductsForm";

import useCRUD from "../hooks/useCRUD";
import { useState } from "react";

const ProductsPage = () => {
  const {
    data: product,
    allData: products,
    validated,
    handleSubmit,
    handleData: handleProduct,
    editData: editProduct,
    deleteData: deleteProduct,
    selected,
    search,
    handleSearch,
  } = useCRUD({
    localStorageKey: "Products",
    initialData: {
      name: "",
      price: "",
      description: "",
      category: "",
    },
  });

  const [category, setCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState("");

  const productFormProps = {
    products,
    product,
    validated,
    selected,
    handleSubmit,
    handleProduct,
    deleteProduct,
    editProduct,
  };

  const productTableProps = {
    products,
    deleteProduct,
    editProduct,
    search,
    sortPrice,
    category,
  };

  const productHeaderProps = {
    search,
    handleSearch,
    category,
    setCategory,
    sortPrice,
    setSortPrice,
  };

  return (
    <section className="pt-3">
      <Container>
        <Row>
          <Col md="4">
            <ProductsForm {...productFormProps} />
          </Col>
          <Col md="8">
            <ProductsHeader {...productHeaderProps} />
            <ProductsTable {...productTableProps} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductsPage;
