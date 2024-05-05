import React from "react";

const Models = () => {
  return (
    <>
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content text-center">
            <div className="modal-header p-4">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Best pet Food Service Website
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="search_input pt-5">
                      <input
                        type="search"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="SEARCH PRODUCTS ..."
                      />
                    </div>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Models;
