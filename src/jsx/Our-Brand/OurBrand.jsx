import React, { useState } from 'react';
import Midbar from "../../dashboard/midbar/Midbar";
import { Link } from "react-router-dom";
import axios from 'axios';
axios
function OurBrand() {
    const [authorImagePreview, setAuthorImagePreview] = useState(null);
    const [brandData, setBrandData] = useState({
        name: "",
        url: "",
        image: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBrandData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleAuthorImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAuthorImagePreview(reader.result);
                setBrandData(prevData => ({
                    ...prevData,
                    [e.target.name]: file
                }));
            };
            reader.readAsDataURL(file);
        }
    };
    const AddBrand = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', brandData.name);
        formData.append('url', brandData.url);
        if (brandData.image) {
            formData.append('image', brandData.image);
        }
        console.log(brandData);
        axios.post('https://mountinfosys.com/OurBrand/create',formData)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error("There was an error adding the brand!", error);
            });
    };
    return (
        <>
            <Midbar>
                <div className="breadcrumb-css">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active fs-4 fw-bold ms-2 mt-2" aria-current="page">
                                    Brand
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <section className="mid-content-css">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-12 user-border mb-4">
                                <h2 className='text-center mb-4'>Add Brand</h2>
                                <form onSubmit={AddBrand}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInputAuthor"
                                                    placeholder="Brand Name"
                                                    name="name"
                                                    value={brandData.name}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="floatingInputAuthor">Brand Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="file"
                                                    name='image'
                                                    accept="image/*"
                                                    onChange={handleAuthorImageChange}
                                                    className='form-control'
                                                />
                                                <label htmlFor="floatingImage">Brand Image Upload</label>
                                            </div>
                                        </div>
                                        <div className="col-md-1">
                                            {authorImagePreview && (
                                                <div className="col">
                                                    <img src={authorImagePreview} alt="Preview" style={{ width: "50px", height: "50px", borderRadius: "50px" }} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInputUrl"
                                                    placeholder="Url"
                                                    name="url"
                                                    value={brandData.url}
                                                    onChange={handleInputChange}
                                                />
                                                <label htmlFor="floatingInputUrl">Url</label>
                                            </div>
                                        </div>
                                        <div className="col text-center">
                                            <button type='submit' className="btn btn-primary">
                                                Add Brand
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Midbar>
        </>
    );

}

export default OurBrand
