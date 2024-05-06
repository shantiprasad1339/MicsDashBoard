import React, { useState } from 'react';
import Midbar from "../../dashboard/midbar/Midbar";
import { Link } from 'react-router-dom';

function BlogAdd() {
    const [blogData, setBlogData] = useState({
        author: "",
        title: "",
        sub_title: "",
        description: "",
        authorImage: null,
        blogImage: null
    });

    const [authorImagePreview, setAuthorImagePreview] = useState(null);
    const [blogImagePreview, setBlogImagePreview] = useState(null);

    const handleInputField = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    };

    const handleAuthorImageChange = (e) => {
        const file = e.target.files[0];
        setBlogData({ ...blogData, authorImage: file });

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAuthorImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBlogImageChange = (e) => {
        const file = e.target.files[0];
        setBlogData({ ...blogData, blogImage: file });

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBlogImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(blogData);
    }


    return (
        <>
            <Midbar>
                <div className="breadcrumb-css">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li
                                    className="breadcrumb-item active fs-4 fw-bold ms-2 mt-2"
                                    aria-current="page"
                                >
                                    {" "}
                                    Blog{" "}
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="d-flex justify-content-between">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb ms-3">
                                <li className="breadcrumb-item">
                                    <Link to='/'>
                                        {" "}
                                        <b> Home </b>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to='/blog'>
                                        {" "}
                                        <b> Blog </b>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    <b>Blog Add</b>
                                </li>
                            </ol>
                        </nav>
                        <Link to="/blog">
                            {" "}
                            <span className="badge text-bg-info text-white badge-button">
                                Blog List
                            </span>{" "}
                        </Link>
                    </div>
                </div>

                <section className="mid-content-css">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-12 user-border mb-4">
                                <h2 className='text-center mb-4'>Create Blog Form</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInputAuthor"
                                                    placeholder="Author"
                                                    name='author'
                                                    value={blogData.author}
                                                    onChange={handleInputField}
                                                />
                                                <label htmlFor="floatingInputTitle">Author Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleAuthorImageChange}
                                                    className='form-control'
                                                />
                                                <label htmlFor="floatingImage">Author Image Upload</label>
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
                                                    id="floatingInputTitle"
                                                    placeholder="Title"
                                                    name='title'
                                                    value={blogData.title}
                                                    onChange={handleInputField}
                                                />
                                                <label htmlFor="floatingInputTitle">Title</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInputSubTitle"
                                                    placeholder="Sub Title"
                                                    name='sub_title'
                                                    value={blogData.sub_title}
                                                    onChange={handleInputField}
                                                />
                                                <label htmlFor="floatingInputTitle">Sub Title</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleBlogImageChange}
                                                    className='form-control'
                                                />
                                                <label htmlFor="floatingImage">Upload Blog Image</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            {blogImagePreview && (
                                                <div className="col-md-4">
                                                    <img src={blogImagePreview} alt="Preview" style={{ width: "100%", height: "60px", borderRadius: "15px" }} />
                                                </div>
                                            )}
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-floating mb-3">
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInputDesc"
                                                    placeholder="Description"
                                                    name='description'
                                                    value={blogData.description}
                                                    onChange={handleInputField}
                                                />
                                                <label htmlFor="floatingInputTitle">Description</label>
                                            </div>
                                        </div>

                                        <div className="col text-center">
                                            <button type='submit' className="btn btn-primary">
                                                Add Blog
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

export default BlogAdd;