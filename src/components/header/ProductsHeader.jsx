import { memo } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { categories } from "../../data/categories";

import PropTypes from "prop-types";

const ProductsHeader = ({ search, handleSearch, category, setCategory, sortPrice, setSortPrice }) => {
    return (
        <InputGroup className="mb-3">
            <Form.Control className="form-control" value={search} onChange={handleSearch} type="text" placeholder="Search" />
            <InputGroup.Text>
                <Form.Select className="me-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="all">All</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </Form.Select>
                <Form.Select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)}>
                    <option>Sort</option>
                    <option value="low">Low To High</option>
                    <option value="high">High To Low</option>
                </Form.Select>
            </InputGroup.Text>
        </InputGroup>
    );
};

ProductsHeader.propTypes = {
    search: PropTypes.string,
    handleSearch: PropTypes.func,
    category: PropTypes.string,
    setCategory: PropTypes.func,

    sortPrice: PropTypes.string,
    setSortPrice: PropTypes.func,
};

const ProductsHeaderMemo = memo(ProductsHeader);

export default ProductsHeaderMemo;
