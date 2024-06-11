import React, { useState, useEffect } from "react";
import Midbar from "../../dashboard/midbar/Midbar";
import { Link } from "react-router-dom";
import img from "./milogo.png";
import axios from "axios";
function Blog() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://mountinfosys.com/Blog").then((res) => {
      console.log(res);
      setData(res.data.data);
    });
  }, []);
  function deleteBlog(id) {
    const deleteUrl = "https://mountinfosys.com/Blog/";

    // Display a confirmation dialog box
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    // If user confirms deletion, proceed with the delete operation
    if (confirmDelete) {
      axios
        .delete(deleteUrl + id)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
          // Handle error response
        });
    } else {
      // User canceled deletion
      console.log("Deletion canceled.");
    }
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
                  Blog
                </li>
              </ol>
            </nav>
          </div>

          <div className="d-flex justify-content-between">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ms-3">
                <li className="breadcrumb-item">
                  <Link to="/">
                    
                    <b> Home </b>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <b>Blog List</b>
                </li>
              </ol>
            </nav>
            <Link to="/blog-add">
            
              <span className="badge text-bg-info text-white badge-button">
                Add Blog
              </span>
            </Link>
          </div>
        </div>

        <section className="mid-content-css">
          <div className="container mt-3">
            <div className="row">
              <div className="col-12 mb-3 mb-lg-5">
                <div className="overflow-hidden card table-nowrap table-card">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="small text-uppercase bg-body text-muted">
                        <tr>
                          <th>Author Name</th>
                          <th>Title</th>
                          <th>Sub-Title</th>
                          <th>Description</th>
                          <th>Image</th>
                          <th>Created Date</th>
                          <th className="text-danger">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.map((item, index) => {
                            const truncateText = (text) => {
                              if (text) {
                                const words = text.split(" ");
                                if (words.length > 5) {
                                  return words.slice(0, 4).join(" ") + "...";
                                }
                                return text;
                              }
                              return "";
                            };

                            return (
                              <>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={item.bloggerImg}
                                        className="avatar sm rounded-pill me-3 flex-shrink-0"
                                        alt="Customer"
                                      />
                                      <div>
                                        <div className="h6 mb-0 lh-1">
                                          {item.blogger}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>{truncateText(item.titel)}</td>{" "}
                                  {/* Truncate title to 5 words */}
                                  <td>{truncateText(item.field)}</td>{" "}
                                  {/* Truncate field to 5 words */}
                                  <td>{truncateText(item.description)}</td>{" "}
                                  {/* Truncate description to 5 words */}
                                  <td>
                                    <img
                                      src={
                                       
                                        item.blogImg
                                      }
                                      alt=""
                                      style={{ width: "70px", height: "50px" }}
                                    />
                                  </td>
                                  <td>{item.createdAt}</td>
                                  <td className="text-center">
                                    <i
                                      className="bi bi-trash-fill text-danger fs-4"
                                      style={{ cursor: "pointer" }}
                                      onClick={() => deleteBlog(item._id)}
                                    ></i>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Midbar>
    </>
  );
}

export default Blog;
