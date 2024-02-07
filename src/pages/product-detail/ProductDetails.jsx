import React from 'react'

const ProductDetails = () => {
  return (
    <div>
      <section id="aa-catg-head-banner">
   <img src="img/fashion/fashion-header-bg-8.jpg" alt="fashion img"></img>
   <div className="aa-catg-head-banner-area">
     <div className="container">
      <div className="aa-catg-head-banner-content">
        <h2>T-Shirt</h2>
        <ol className="breadcrumb">
          <li><a href="index.html">Home</a></li>         
          <li><a href="#">Product</a></li>
          <li className="active">T-shirt</li>
        </ol>
      </div>
     </div>
   </div>
  </section>
  

  
  <section id="aa-product-details">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-product-details-area">
            <div className="aa-product-details-content">
              <div className="row">
                
                <div className="col-md-5 col-sm-5 col-xs-12">                              
                  <div className="aa-product-view-slider">                                
                    <div id="demo-1" className="simpleLens-gallery-container">
                      <div className="simpleLens-container">
                        <div className="simpleLens-big-image-container"><a data-lens-image="img/view-slider/large/polo-shirt-1.png" className="simpleLens-lens-image"><img src="img/view-slider/medium/polo-shirt-1.png" className="simpleLens-big-image"></img></a></div>
                      </div>
                      <div className="simpleLens-thumbnails-container">
                          <a data-big-image="img/view-slider/medium/polo-shirt-1.png" data-lens-image="img/view-slider/large/polo-shirt-1.png" className="simpleLens-thumbnail-wrapper" href="#">
                            <img src="img/view-slider/thumbnail/polo-shirt-1.png"></img>
                          </a>                                    
                          <a data-big-image="img/view-slider/medium/polo-shirt-3.png" data-lens-image="img/view-slider/large/polo-shirt-3.png" className="simpleLens-thumbnail-wrapper" href="#">
                            <img src="img/view-slider/thumbnail/polo-shirt-3.png"></img>
                          </a>
                          <a data-big-image="img/view-slider/medium/polo-shirt-4.png" data-lens-image="img/view-slider/large/polo-shirt-4.png" className="simpleLens-thumbnail-wrapper" href="#">
                            <img src="img/view-slider/thumbnail/polo-shirt-4.png"></img>
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-7 col-sm-7 col-xs-12">
                  <div className="aa-product-view-content">
                    <h3>T-Shirt</h3>
                    <div className="aa-price-block">
                      <span className="aa-product-view-price">$34.99</span>
                      <p className="aa-product-avilability">Avilability: <span>In stock</span></p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi, veritatis quae repudiandae quod nulla porro quidem, itaque quis quaerat!</p>
                    <h4>Size</h4>
                    <div className="aa-prod-view-size">
                      <a href="#">S</a>
                      <a href="#">M</a>
                      <a href="#">L</a>
                      <a href="#">XL</a>
                    </div>
                    <h4>Color</h4>
                    <div className="aa-color-tag">
                      <a href="#" className="aa-color-green"></a>
                      <a href="#" className="aa-color-yellow"></a>
                      <a href="#" className="aa-color-pink"></a>                      
                      <a href="#" className="aa-color-black"></a>
                      <a href="#" className="aa-color-white"></a>                      
                    </div>
                    <div className="aa-prod-quantity">
                      <form action="">
                        <select id="" name="">
                          <option selected="1" value="0">1</option>
                          <option value="1">2</option>
                          <option value="2">3</option>
                          <option value="3">4</option>
                          <option value="4">5</option>
                          <option value="5">6</option>
                        </select>
                      </form>
                      <p className="aa-prod-category">
                        Category: <a href="#">Polo T-Shirt</a>
                      </p>
                    </div>
                    <div className="aa-prod-view-bottom">
                      <a className="aa-add-to-cart-btn" href="#">Add To Cart</a>
                      <a className="aa-add-to-cart-btn" href="#">Wishlist</a>
                      <a className="aa-add-to-cart-btn" href="#">Compare</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aa-product-details-bottom">
              <ul className="nav nav-tabs" id="myTab2">
                <li><a href="#description" data-toggle="tab">Description</a></li>
                <li><a href="#review" data-toggle="tab">Reviews</a></li>                
              </ul>

              
              <div className="tab-content">
                <div className="tab-pane fade in active" id="description">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, culpa!</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor qui eius esse!</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, modi!</li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, iusto earum voluptates autem esse molestiae ipsam, atque quam amet similique ducimus aliquid voluptate perferendis, distinctio!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ea, voluptas! Aliquam facere quas cumque rerum dolore impedit, dicta ducimus repellat dignissimos, fugiat, minima quaerat necessitatibus? Optio adipisci ab, obcaecati, porro unde accusantium facilis repudiandae.</p>
                </div>
                <div className="tab-pane fade " id="review">
                 <div className="aa-product-review-area">
                   <h4>2 Reviews for T-Shirt</h4> 
                   <ul className="aa-review-nav">
                     <li>
                        <div className="media">
                          <div className="media-left">
                            <a href="#">
                              <img className="media-object" src="img/testimonial-img-3.jpg" alt="girl image"></img>
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading"><strong>Marla Jobs</strong> - <span>March 26, 2016</span></h4>
                            <div className="aa-product-rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star-o"></span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="media">
                          <div className="media-left">
                            <a href="#">
                              <img className="media-object" src="img/testimonial-img-3.jpg" alt="girl image"></img>
                            </a>
                          </div>
                          <div className="media-body">
                            <h4 className="media-heading"><strong>Marla Jobs</strong> - <span>March 26, 2016</span></h4>
                            <div className="aa-product-rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star-o"></span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </li>
                   </ul>
                   <h4>Add a review</h4>
                   <div className="aa-your-rating">
                     <p>Your Rating</p>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                     <a href="#"><span className="fa fa-star-o"></span></a>
                   </div>
                   
                   <form action="" className="aa-review-form">
                      <div className="form-group">
                        <label for="message">Your Review</label>
                        <textarea className="form-control" rows="3" id="message"></textarea>
                      </div>
                      <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name"></input>
                      </div>  
                      <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="example@gmail.com"></input>
                      </div>

                      <button type="submit" className="btn btn-default aa-review-submit">Submit</button>
                   </form>
                 </div>
                </div>            
              </div>
            </div>
            
            <div className="aa-product-related-item">
              <h3>Related Products</h3>
              <ul className="aa-product-catg aa-related-item-slider">
                
                <li>
                  <figure>
                    <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-2.png" alt="polo shirt img"></img></a>
                    <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                     <figcaption>
                      <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                      <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                    </figcaption>
                  </figure>                     
                  <div className="aa-product-hvr-content">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                    <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                  </div>
                  
                  <span className="aa-badge aa-sale" href="#">SALE!</span>
                </li>
                 
                <li>
                  <figure>
                    <a className="aa-product-img" href="#"><img src="img/women/girl-2.png" alt="polo shirt img"></img></a>
                    <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                    <figcaption>
                      <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                      <span className="aa-product-price">$45.50</span>
                    </figcaption>
                  </figure>                      
                  <div className="aa-product-hvr-content">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                    <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                  </div>
                  
                   <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                </li>
                
                <li>
                  <figure>
                    <a className="aa-product-img" href="#"><img src="img/man/t-shirt-1.png" alt="polo shirt img"></img></a>
                    <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                  </figure>
                  <figcaption>
                    <h4 className="aa-product-title"><a href="#">T-Shirt</a></h4>
                    <span className="aa-product-price">$45.50</span>
                  </figcaption>
                  <div className="aa-product-hvr-content">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                    <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                  </div>
                  
                   <span className="aa-badge aa-hot" href="#">HOT!</span>
                </li>
                
                <li>
                  <figure>
                    <a className="aa-product-img" href="#"><img src="img/women/girl-3.png" alt="polo shirt img"></img></a>
                    <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                     <figcaption>
                      <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                      <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                    </figcaption>
                  </figure>                     
                  <div className="aa-product-hvr-content">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                    <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                  </div>
                </li>
                
                <li>
                  <figure>
                    <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-1.png" alt="polo shirt img"></img></a>
                    <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                    <figcaption>
                      <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                      <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                    </figcaption>
                  </figure>                      
                  <div className="aa-product-hvr-content">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                    <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                  </div>
                </li>
                
                <li>
                  <figure>
                    <a className="aa-product-img" href="#"><img src="img/women/girl-4.png" alt="polo shirt img"></img></a>
                    <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                    <figcaption>
                      <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                      <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                    </figcaption>
                  </figure>                     
                  <div className="aa-product-hvr-content">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                    <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                  </div>
                  
                  <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                </li>    
                
                <li>
                  <figure>
                    <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-4.png" alt="polo shirt img"></img></a>
                    <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                     <figcaption>
                      <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                      <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                    </figcaption>
                  </figure>                     
                  <div className="aa-product-hvr-content">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                    <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                  </div>
                  
                  <span className="aa-badge aa-hot" href="#">HOT!</span>
                </li> 
                
                <li>
                  <figure>
                    <a className="aa-product-img" href="#"><img src="img/women/girl-1.png" alt="polo shirt img"></img></a>
                    <a className="aa-add-card-btn"href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                     <figcaption>
                      <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
                      <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                    </figcaption>
                  </figure>                     
                  <div className="aa-product-hvr-content">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                    <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>                            
                  </div>
                  
                  <span className="aa-badge aa-sale" href="#">SALE!</span>
                </li>                                                                                   
              </ul>
              
              <div className="modal fade" id="quick-view-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">                      
                    <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <div className="row">
                        
                        <div className="col-md-6 col-sm-6 col-xs-12">                              
                          <div className="aa-product-view-slider">                                
                            <div className="simpleLens-gallery-container" id="demo-1">
                              <div className="simpleLens-container">
                                  <div className="simpleLens-big-image-container">
                                      <a className="simpleLens-lens-image" data-lens-image="img/view-slider/large/polo-shirt-1.png">
                                          <img src="img/view-slider/medium/polo-shirt-1.png" className="simpleLens-big-image"></img>
                                      </a>
                                  </div>
                              </div>
                              <div className="simpleLens-thumbnails-container">
                                  <a href="#" className="simpleLens-thumbnail-wrapper"
                                     data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                     data-big-image="img/view-slider/medium/polo-shirt-1.png">
                                      <img src="img/view-slider/thumbnail/polo-shirt-1.png"></img>
                                  </a>                                    
                                  <a href="#" className="simpleLens-thumbnail-wrapper"
                                     data-lens-image="img/view-slider/large/polo-shirt-3.png"
                                     data-big-image="img/view-slider/medium/polo-shirt-3.png">
                                      <img src="img/view-slider/thumbnail/polo-shirt-3.png"></img>
                                  </a>

                                  <a href="#" className="simpleLens-thumbnail-wrapper"
                                     data-lens-image="img/view-slider/large/polo-shirt-4.png"
                                     data-big-image="img/view-slider/medium/polo-shirt-4.png">
                                      <img src="img/view-slider/thumbnail/polo-shirt-4.png"></img>
                                  </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <div className="aa-product-view-content">
                            <h3>T-Shirt</h3>
                            <div className="aa-price-block">
                              <span className="aa-product-view-price">$34.99</span>
                              <p className="aa-product-avilability">Avilability: <span>In stock</span></p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi, veritatis quae repudiandae quod nulla porro quidem, itaque quis quaerat!</p>
                            <h4>Size</h4>
                            <div className="aa-prod-view-size">
                              <a href="#">S</a>
                              <a href="#">M</a>
                              <a href="#">L</a>
                              <a href="#">XL</a>
                            </div>
                            <div className="aa-prod-quantity">
                              <form action="">
                                <select name="" id="">
                                  <option value="0" selected="1">1</option>
                                  <option value="1">2</option>
                                  <option value="2">3</option>
                                  <option value="3">4</option>
                                  <option value="4">5</option>
                                  <option value="5">6</option>
                                </select>
                              </form>
                              <p className="aa-prod-category">
                                Category: <a href="#">Polo T-Shirt</a>
                              </p>
                            </div>
                            <div className="aa-prod-view-bottom">
                              <a href="#" className="aa-add-to-cart-btn"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <a href="#" className="aa-add-to-cart-btn">View Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>                        
                  </div>
                </div>
              </div>
              
            </div>  
          </div>
        </div>
      </div>
    </div>
  </section>
    
    </div>
  )
}

export default ProductDetails;
