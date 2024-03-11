import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const UpdateProducts = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);
  const [formdata, setFormdata] = useState({
    ProductName: "",
    ProductDescription: "",
    discoundPrice: "",
    prices: "",
    tag: "",
    sizes: [],
    color: "",
    image: "",
    inStock: "",
    category: "",
    keyword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "sizes") {
      // Handle the sizes array separately
      const updatedSizes = formdata.sizes.map((size, index) => {
        if (index === parseInt(value, 10)) {
          // Assuming value is the index of the size to be updated
          return { ...size, [name]: !size[name] }; // Toggle the value
        }
        return size;
      });

      setFormdata((prevFormData) => ({
        ...prevFormData,
        sizes: updatedSizes,
      }));
    } else {
      // For other fields, update as usual
      setFormdata((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const token = sessionStorage.getItem('token');

  const handleAddSize = () => {
    setFormdata((prevFormData) => ({
      ...prevFormData,
      sizes: [...prevFormData.sizes, { SizeNumber: "", StockNumber: 10 }],
    }));
  };

  const handleSizeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSizes = [...formdata.sizes];
    updatedSizes[index] = { ...updatedSizes[index], [name]: value };
    setFormdata((prevFormData) => ({
      ...prevFormData,
      sizes: updatedSizes,
    }));
  };

  const handleRemoveSize = (index) => {
    const updatedSizes = [...formdata.sizes];
    updatedSizes.splice(index, 1);
    setFormdata((prevFormData) => ({
      ...prevFormData,
      sizes: updatedSizes,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      const response = await axios.patch(
        `https://motion-63l4.onrender.com/api/v1/update-product/${id}`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      toast.success('Product-update');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleFetch = async () => {
    try {
      const response = await axios.post(
        `https://motion-63l4.onrender.com/api/v1/single-product/${id}`
      );
      console.log(response.data.data);
      setProduct(response.data.data);
      const productData = response.data.data;
      setFormdata({
        ProductName: productData.ProductName || "",
        ProductDescription: productData.ProductDescription || "",
        discountPrice: productData.discountPrice || "",
        prices: productData.prices || "",
        tag: productData.tag || "",
        sizes: productData.sizes || "",
        color: productData.color || "",
        image: productData.image || "",
        inStock: productData.inStock || "",
        category: productData.category || "",
        keyword: productData.keyword || "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [id]);

  useEffect(() => {
    handleFetch();
  }, [id]);

  return (
    <div className="edit-product">
      <div className="Old-Product">
        {/* ... your existing Old-Product code ... */}
      </div>

      <div className="Edit-Product">
        <div className="product-add-heading">
          <h3>Edit-Products</h3>
        </div>
        <div className="forms-product">
          <form onSubmit={handleSubmit} className="form-main">
            {Object.keys(formdata).map((key) => (
              <div className="form-group" key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-gray-700">
                  {key}
                </label>
                {key === "ProductDescription" ? (
                  <textarea
                    onChange={handleChange}
                    value={formdata[key]}
                    name={key}
                    rows="4"
                    className="form-control"
                  />
                ) : key === "inStock" ? (
                  <select onChange={handleChange} value={formdata[key]} name={key} className="form-select">
                    <option value={true}>True</option>
                    <option value={false}>False</option>
                  </select>
                ) : key === "sizes" ? (
                  <>
                    <div className="form-control">
                      {formdata.sizes.map((size, index) => (
                        <div key={index} className="mb-3">
                          <label htmlFor={`SizeNumber-${index}`} className="form-label">Size Number</label>
                          <input type="text" className="form-control" id={`SizeNumber-${index}`} name="SizeNumber" value={size.SizeNumber} onChange={(e) => handleSizeChange(index, e)} required />

                          <label htmlFor={`StockNumber-${index}`} className="form-label">Stock Number</label>
                          <input type="text" className="form-control" id={`StockNumber-${index}`} name="StockNumber" value={size.StockNumber} onChange={(e) => handleSizeChange(index, e)} required />

                          <button type="button" className="btn btn-danger" onClick={() => handleRemoveSize(index)}>Remove Size</button>
                        </div>
                      ))}
                    </div>
                    <button type="button" className="btn btn-secondary mb-3" onClick={handleAddSize}>Add Size</button>
                  </>
                ) : (
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formdata[key]}
                    name={key}
                    className="form-control"
                  />
                )}
              </div>
            ))}
            <div className="button-add">
              <button type="submit" className="btn btn-primary">Update Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
