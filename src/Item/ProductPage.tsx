import React from 'react';

const ProductDetails: React.FC = () => {
    return (
        <div className="container-fluid bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="h-100 rounded-lg bg-secondary mb-4">
                            <img className="w-100 h-100 object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-dark btn-block mb-2">Add to Cart</button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-light btn-block mb-2">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h2 className="h2 text-dark font-weight-bold mb-2">Product Name</h2>
                        <p className="text-secondary text-sm mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.
                        </p>
                        <div className="row mb-4">
                            <div className="col-6">
                                <span className="font-weight-bold text-dark">Price:</span>
                                <span className="text-secondary">$29.99</span>
                            </div>
                            <div className="col-6">
                                <span className="font-weight-bold text-dark">Availability:</span>
                                <span className="text-secondary">In Stock</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-weight-bold text-dark">Select Color:</span>
                            <div className="d-flex mt-2">
                                <button className="w-6 h-6 rounded-circle bg-dark mr-2"></button>
                                <button className="w-6 h-6 rounded-circle bg-danger mr-2"></button>
                                <button className="w-6 h-6 rounded-circle bg-primary mr-2"></button>
                                <button className="w-6 h-6 rounded-circle bg-warning mr-2"></button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-weight-bold text-dark">Select Size:</span>
                            <div className="d-flex mt-2">
                                <button className="btn btn-dark rounded-pill font-weight-bold mr-2">S</button>
                                <button className="btn btn-dark rounded-pill font-weight-bold mr-2">M</button>
                                <button className="btn btn-dark rounded-pill font-weight-bold mr-2">L</button>
                                <button className="btn btn-dark rounded-pill font-weight-bold mr-2">XL</button>
                                <button className="btn btn-dark rounded-pill font-weight-bold mr-2">XXL</button>
                            </div>
                        </div>
                        <div>
                            <span className="font-weight-bold text-dark">Product Description:</span>
                            <p className="text-secondary text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ProductDetails;
