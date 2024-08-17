const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `

    <header class="top-header">
        <nav class="navbar navbar-expand-xl w-100 navbar-dark container gap-3">
          <a class="navbar-brand d-none d-xl-inline" href="index.html" previewlistener="true"><img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/logo.webp" class="logo-img" alt=""></a>
          <a class="mobile-menu-btn d-inline d-xl-none" href="javascript:;" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <i class="bi bi-list"></i>
          </a>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
            <div class="offcanvas-header">
              <div class="offcanvas-logo"><img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/logo.webp" class="logo-img" alt="">
              </div>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body primary-menu active">
              <ul class="navbar-nav justify-content-start flex-grow-1 gap-1 show">
                <li class="nav-item active">
                  <a class="nav-link active" href="index.html" previewlistener="true">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="tv-shows.html" data-bs-toggle="dropdown" previewlistener="true">
                    Categories
                  </a>
                  <div class="dropdown-menu dropdown-large-menu">
                    <div class="row">
                      <div class="col-12 col-xl-4">
                        <h6 class="large-menu-title">Fashion</h6>
                        <ul class="list-unstyled">
                          <li><a href="javascript:;">Casual T-Shirts</a>
                          </li>
                          <li><a href="javascript:;">Formal Shirts</a>
                          </li>
                          <li><a href="javascript:;">Jackets</a>
                          </li>
                          <li><a href="javascript:;">Jeans</a>
                          </li>
                          <li><a href="javascript:;">Dresses</a>
                          </li>
                          <li><a href="javascript:;">Sneakers</a>
                          </li>
                          <li><a href="javascript:;">Belts</a>
                          </li>
                          <li><a href="javascript:;">Sports Shoes</a>
                          </li>
                        </ul>
                      </div>
                      <!-- end col-3 -->
                      <div class="col-12 col-xl-4">
                        <h6 class="large-menu-title">Electronics</h6>
                        <ul class="list-unstyled">
                          <li><a href="javascript:;">Mobiles</a>
                          </li>
                          <li><a href="javascript:;">Laptops</a>
                          </li>
                          <li><a href="javascript:;">Macbook</a>
                          </li>
                          <li><a href="javascript:;">Televisions</a>
                          </li>
                          <li><a href="javascript:;">Lighting</a>
                          </li>
                          <li><a href="javascript:;">Smart Watch</a>
                          </li>
                          <li><a href="javascript:;">Galaxy Phones</a>
                          </li>
                          <li><a href="javascript:;">PC Monitors</a>
                          </li>
                        </ul>
                      </div>
                      <!-- end col-3 -->
                      <div class="col-12 col-xl-4 d-none d-xl-block">
                        <div class="pramotion-banner1">
                          <img src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/menu-img.webp" class="img-fluid" alt="">
                        </div>
                      </div>
                      <!-- end col-3 -->
                    </div>
                    <!-- end row -->
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="Cart.html" previewlistener="true">Shop Cart</a></li>
                    <li><a class="dropdown-item" href="wishlist.html" previewlistener="true">Wishlist</a></li>
                    <li><a class="dropdown-item" href="product-details.html" previewlistener="true">Product Details</a></li>
                    <li><a class="dropdown-item" href="payment-method.html" previewlistener="true">Payment Method</a></li>
                    <li><a class="dropdown-item" href="billing-details.html" previewlistener="true">Billing Details</a></li>
                    <li><a class="dropdown-item" href="address.html" previewlistener="true">Addresses</a></li>
                    <li><a class="dropdown-item" href="shop-grid.html" previewlistener="true">Shop Grid</a></li>
                    <li><a class="dropdown-item" href="shop-grid-type-4.html" previewlistener="true">Shop Grid 4</a></li>
                    <li><a class="dropdown-item" href="shop-grid-type-5.html" previewlistener="true">Shop Grid 5</a></li>
                    <li><a class="dropdown-item" href="search.html" previewlistener="true">Search</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about-us.html" previewlistener="true">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact-us.html" previewlistener="true">Contact</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                    Account
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="account-dashboard.html" previewlistener="true">Dashboard</a></li>
                    <li><a class="dropdown-item" href="account-orders.html" previewlistener="true">My Orders</a></li>
                    <li><a class="dropdown-item" href="account-profile.html" previewlistener="true">My Profile</a></li>
                    <li><a class="dropdown-item" href="account-edit-profile.html" previewlistener="true">Edit Profile</a></li>
                    <li><a class="dropdown-item" href="account-saved-address.html" previewlistener="true">Addresses</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="./Login.html" previewlistener="true">Login</a></li>
                    <li><a class="dropdown-item" href="./SignUp.html" previewlistener="true">Register</a></li>
                    <li><a id="logoutLink" class="dropdown-item" href="#" previewlistener="true">Logout</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javascript:;" data-bs-toggle="dropdown">
                    Blog
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="blog-post.html" previewlistener="true">Blog Post</a></li>
                    <li><a class="dropdown-item" href="blog-read.html" previewlistener="true">Blog Read</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <ul class="navbar-nav secondary-menu flex-row">
          
            <li class="nav-item">
              <a class="nav-link" href="search.html" previewlistener="true"><i class="bi bi-search"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="wishlist.html" previewlistener="true"><i class="bi bi-suit-heart"></i></a>
            </li>
            <li class="nav-item" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
              <a class="nav-link position-relative" href="Cart.html">
                <div class="cart-badge">8</div>
                <i class="bi bi-basket2"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="account-dashboard.html" previewlistener="true"><i class="bi bi-person-circle"></i></a>
            </li>
          </ul>
        </nav>
      </header>


    `;

    
$(function() {
	"use strict";


// slider

$(document).ready(function(){
 $('.product-thumbs').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      }
    ]
  });


});






$(document).ready(function(){
  $('.cartegory-box').slick({
     dots: false,
     arrows: true,
     infinite: true,
     speed: 300,
     slidesToShow: 5,
     slidesToScroll: 1,
     autoplay: true,
     prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
     nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
     responsive: [
       {
         breakpoint: 1025,
         settings: {
           slidesToShow: 4,
           slidesToScroll: 1,
           infinite: true,
         }
       },
       {
         breakpoint: 769,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           arrows: false,
         }
       },
       {
         breakpoint: 500,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           arrows: false,
         }
       }
     ]
   });
 
 
 });
  




});









$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
	centerMode: false,
    focusOnSelect: true,
    asNavFor: '.slider-nav',
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
  })
  
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-chevron-right'></i></button>",
  })
});

$('.modal').on('shown.bs.modal', function (e) {
  $('.slider-for').slick('setPosition');
  $('.slider-nav').slick('setPosition');
  $('.wrap-modal-slider').addClass('open');
})



}