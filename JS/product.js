document.addEventListener("DOMContentLoaded", function() {

  const products = [
    {
      "brand": "ROADSTER",
      "name": "Men Burgundy Solid Polo Collar T-shirt",
      "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10984594/2020/4/6/7e7570b8-9ff1-448a-b8e1-f5fbadf232d51586163159057-Nautica-Men-Tshirts-2011586163156988-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "674",
      "originalPrice": "1299",
      "discountPercentage": "(50%OFF)",
      "similarLink": "#",
      "gender": "men",
      "category": "Tshirts"
  },
  {
      "brand": "WROGN",
      "name": "Mens Slim Fit Casual",
      "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "2599",
      "originalPrice": "1999",
      "discountPercentage": "(60%OFF)",
      "similarLink": "#",
      "gender": "men",
      category: "Tshirts"
  },
  {
      "brand": "HIGHLANDER",
      "name": "Mens Slim Fit Casual",
      "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13345634/2021/4/15/69137fc4-cfbf-434a-8258-e70ee2ac5a4a1618489702779-Mast--Harbour-Men-Tshirts-7491618489701949-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "555",
      "originalPrice": "1099",
      "discountPercentage": "(50%OFF)",
      "similarLink": "#",
      "gender": "men"
  },
  {
      "brand": "WROGN",
      "name": "Mens Slim Fit Casual Shirt",
      "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17160636/2022/3/4/4c9cadc1-2e34-4393-a5d8-202dead2c03d1646391599546-Kook-N-Keech-Batman-Unisex-Tshirts-5121646391599051-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "1434",
      "originalPrice": "2299",
      "discountPercentage": "(60%OFF)",
      "similarLink": "#",
      "gender": "men"
  },
  {
      "brand": "Dennis Lingo",
      "name": "Mens Slim Fit Casual",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
      "sizes": ["S"],
      "discountedPrice": "684",
      "originalPrice": "1899",
      "discountPercentage": "(50%OFF)",
      "similarLink": "#",
      "gender": "men",
      category: "Shirts"
  },
  {
      "brand": "Dennis Lingo",
      "name": "Mens Slim Fit Casual Shirt",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/18/9578fd70-ff10-4924-ac27-776a20bc59301624019881748-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "1799",
      "originalPrice": "2099",
      "discountPercentage": "(60%OFF)",
      "similarLink": "#",
      "gender": "men"
  },
  {
      "brand": "ROADSTER",
      "name": "Men Cotton Casual Shirt",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10398211/2019/11/25/7ab8bc06-f264-45e3-82bf-7c79f02812211574658986116-Roadster-Men-Shirts-8711574658983724-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "539",
      "originalPrice": "1099",
      "discountPercentage": "(50%OFF)",
      "similarLink": "#",
      "gender": "men"
  },
  {
      "brand": "HIGHLANDER",
      "name": "Mens Slim Fit Casual",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "1582",
      "originalPrice": "1699",
      "discountPercentage": "(60%OFF)",
      "similarLink": "#",
      "gender": "men"
  },
  {
      "brand": "Dennis Lingo",
      "name": "Mens Slim Fit Casual",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488105/2018/9/26/8939e9b9-6dd7-4ba3-9021-7280a8b517f51537944957748-Dennis-Lingo-Men-Dusty-green-Slim-Fit-Solid-Casual-Shirt-801537944957546-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "675",
      "originalPrice": "1399",
      "discountPercentage": "(50%OFF)",
      "similarLink": "#",
      "gender": "men"
  },
  {
      "brand": "Arrow Sport",
      "name": "Vertical Striped Casual Shirt",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17417694/2022/3/7/2763547a-ed8b-4f8a-a1a5-26706562bb501646650265200ArrowSportMenPurpleStripedCasualShirt1.jpg",
      "sizes": ["S"],
      "discountedPrice": "2299",
      "originalPrice": "9999",
      "discountPercentage": "(60%OFF)",
      "similarLink": "#",
      "gender": "men"
  },
  {
      "brand": "ROADSTER",
      "name": "Printed Casual Shirt",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "499",
      "originalPrice": "1599",
      "discountPercentage": "(50%OFF)",
      "similarLink": "#",
      "gender": "men"
  },  
   
    {
      "brand": "JS Collection",
      "name": "Floral Embroidered Mini Dress",
      "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/3/18/1ab6d9e3-e5c3-46e6-adc0-6066105b01a81616060924389-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "4599",
      "originalPrice": "5699",
      "discountPercentage": "(20%OFF)",
      "similarLink": "#",
      "gender": "women"
  },
  {
      "brand": "Athena",
      "name": "Slit Sleeves Maxi Dress",
      "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17625356/2022/3/24/8b634e87-acf3-439f-916e-2ffa540b89381648105843403PRENEAGreenJacquardMaxiDress1.jpg",
      "sizes": ["S"],
      "discountedPrice": "3499",
      "originalPrice": "7699",
      "discountPercentage": "(43%OFF)",
      "similarLink": "#",
      "gender": "women"
  },
  {
      "brand": "JS Collection",
      "name": "Floridal Midi Dress",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17397952/2022/3/5/0428d269-a85f-4a7c-9a4f-6946dbf979f21646466506191JCCollectionBlackFloralDress1.jpg",
      "sizes": ["S"],
      "discountedPrice": "4719",
      "originalPrice": "5599",
      "discountPercentage": "(20%OFF)",
      "similarLink": "#",
      "gender": "women"
  },
  {
      "brand": "Tokyo Talkies",
      "name": "Abstract Dress",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16831912/2022/2/7/16124115-d96a-43b2-b647-ad76086ee48e1644248211536-Tokyo-Talkies-Pink--Blue-Sheath-Dress-3281644248210712-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "999",
      "originalPrice": "2399",
      "discountPercentage": "(67%OFF)",
      "similarLink": "#",
      "gender": "women"
  },
  {
      "brand": "Athena",
      "name": "Embellished Sheath Midi Dress",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16002894/2021/11/23/f79fd42e-4465-4fb3-92bd-aa574b2e6e991637661384353-Athena-Green-Sequin-party-midi-dress-with-cape-sleeves-95163-1.jpg",
      "sizes": ["S"],
      "discountedPrice": "2799",
      "originalPrice": "3999",
      "discountPercentage": "(23%OFF)",
      "similarLink": "#",
      "gender": "women"
  },
  {
      "brand": "JS Collection",
      "name": "Ethnic Motifs A-Line Midi Dress",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17426090/2022/3/7/f95deaac-dda4-4df0-bd0f-5cfdefa2a8321646674896418JCCollectionGreenEthnicMotifsA-LineMidiDress1.jpg",
      "sizes": ["S"],
      "discountedPrice": "5399",
      "originalPrice": "7599",
      "discountPercentage": "(29%OFF)",
      "similarLink": "#",
      "gender": "women"
  },
  
    {
      brand: "HELLCAT",
      name: "Boys Pack Of 3 Cotton T-shirt",
      image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22204272/2023/5/2/e4df577a-6725-43de-bac3-3c8280c24fb61683017842296-HELLCAT-Boys-Blue-Typography-3-Printed-T-shirt-5116830178418-1.jpg",
      sizes: ["3-4Y"],
      discountedPrice: 584,
      originalPrice: 3897,
      discountPercentage: 85,
      similarLink: "#",
      gender: "boys"
    },
    {
      brand: "H&M",
      name: "Boys Blue Printed T-Shirt",
      image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18084516/2022/4/29/06b001bb-7e3e-4594-890c-f4c787f3fdd91651202546693PrintedT-shirt1.jpg",
      sizes: ["2-5Y"],
      discountedPrice: 599,
      originalPrice: 1299,
      discountPercentage: 44,
      similarLink: "#",
      gender: "boys"
  },
  {
      brand: "MINI KLUB",
      name: "Boys Graphic Printed T-Shirt",
      image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15161192/2021/11/24/b96ec19f-0cc2-4602-9ca8-f5400694aeb31637753693158PumaUnisexKidsRedBrandLogoPureCottonFerrariRaceT-shirt1.jpg",
      sizes: ["3-5Y"],
      discountedPrice: 1059,
      originalPrice: 1999,
      discountPercentage: 43,
      similarLink: "#",
      gender: "boys"
  },
  {
      brand: "Tommy Hilfiger",
      name: "Green Printed Oversized Cotton T-Shirt",
      image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17883506/2022/4/14/f3ced4ff-3487-4fab-9932-832d82f5c3901649905620356OversizedcottonT-shirt1.jpg",
      sizes: ["5-9Y"],
      discountedPrice: 2299,
      originalPrice: 3299,
      discountPercentage: 23,
      similarLink: "#",
      gender: "boys"
  },
  {
      brand: "H$M",
      name: "Boys Scanton Slim Fit Jeans",
      image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/14503896/2021/7/23/0235c6b5-4e1e-4698-b227-68ba101054141627031421330-HERENOW-Boys-Jeans-4791627031420983-1.jpg",
      sizes: ["5-9Y"],
      discountedPrice: 1499,
      originalPrice: 2999,
      discountPercentage: 30,
      similarLink: "#",
      gender: "boys"
  },
  {
      brand: "Tommy Hilfiger",
      name: "Boys Printed Cotton",
      image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18084536/2022/4/29/50cd2cb7-56e6-401a-8a34-853d8fc655d61651202524469PrintedT-shirt1.jpg",
      sizes: ["5-9Y"],
      discountedPrice: 899,
      originalPrice: 1599,
      discountPercentage: 33,
      similarLink: "#",
      gender: "boys"
  },
    {
      brand: "Stylo Bug",
      name: "Girls Kurti With Palazzos",
      image: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/23828952/2023/6/30/14564bf0-4978-4d22-8c73-3991b0028def1688127466518KurtaSets1.jpg",
      sizes: ["11-12Y"],
      discountedPrice: 1199,
      originalPrice: 2998,
      discountPercentage: 60,
      similarLink: "#",
      gender: "girls"
    },
    {
      "brand": "Bella Moda",
      "name": "Floral Embroidered Dress",
      "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16957696/2022/3/21/0c58f62f-eaf6-4531-a77d-e83aa9e827f51647853321644-JUSTICE-Girls-Green-Solid-Pure-Cotton-T-shirt-36716478533209-1.jpg",
      "sizes": [],
      "discountedPrice": "499",
      "originalPrice": "2299",
      "discountPercentage": "(90%OFF)",
      "similarLink": "#",
      "gender": "girls"
  },
  {
      "brand": "Aarika",
      "name": "Net Midi Off-shoulder Dress",
      "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15184938/2022/3/16/245e8756-a9bf-4554-95a4-9010867bdf171647423688178-UTH-by-Roadster-Girls-Black-Solid-Pure-Cotton-Drop-Shoulder--1.jpg",
      "sizes": [],
      "discountedPrice": "999",
      "originalPrice": "2699",
      "discountPercentage": "(67%OFF)",
      "similarLink": "#",
      "gender": "girls"
  },
  {
      "brand": "Wish Karo",
      "name": "Colourblocked Net Dress",
      "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/5/6/efcd96b3-e516-4993-b76b-2dea238a1bf91620286359863-5.jpg",
      "sizes": [],
      "discountedPrice": "1549",
      "originalPrice": "2873",
      "discountPercentage": "(40%OFF)",
      "similarLink": "#",
      "gender": "girls"
  },
  {
      "brand": "Bella Moda",
      "name": "Girls Fit Flared Dress",
      "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17179252/2022/2/17/a9fc5fd8-8a79-474d-a2cd-3edab27859491645071574540CutiekinsRedTie-UpNeckRufflesTop1.jpg",
      "sizes": [],
      "discountedPrice": "399",
      "originalPrice": "1999",
      "discountPercentage": "(95%OFF)",
      "similarLink": "#",
      "gender": "girls"
  },
  {
      "brand": "CUTECUMBER",
      "name": "Sequined Fit and Flared Dress",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14550060/2021/7/15/0e2b86b5-73f5-4f10-8f13-335accfa660e1626347938457CUTECUMBERBlackSequinedGeorgetteFitandFlareDress1.jpg",
      "sizes": [],
      "discountedPrice": "789",
      "originalPrice": "1799",
      "discountPercentage": "(59%OFF)",
      "similarLink": "#",
      "gender": "girls"
  },
  {
      "brand": "CUTECUMBER",
      "name": "Checked Georgette Sheath Dre..",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17273788/2022/2/24/27084ac7-7118-401a-b1cc-a8fb552c351c1645705049816CUTECUMBERRedCheckedGeorgetteSheathDress1.jpg",
      "sizes": [],
      "discountedPrice": "1390",
      "originalPrice": "1800",
      "discountPercentage": "(25%OFF)",
      "similarLink": "#",
      "gender": "girls"
  },
  {
      "brand": "Wish Karo",
      "name": "Baby Girls Flora; Satin Dress",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/29/d15cccee-d064-458e-8e09-c9aed44b1ded1624958826140-1.jpg",
      "sizes": [],
      "discountedPrice": "2999",
      "originalPrice": "4499",
      "discountPercentage": "(60%OFF)",
      "similarLink": "#",
      "gender": "girls"
  },
  {
      "brand": "Bella Moda",
      "name": "Georgette Dress",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15583966/2022/1/27/e2303415-65f9-4839-b67b-862993b48e9e1643279926256-Bella-Moda-Black-Georgette-Dress-7631643279926113-1.jpg",
      "sizes": [],
      "discountedPrice": "799",
      "originalPrice": "1799",
      "discountPercentage": "(65%OFF)",
      "similarLink": "#",
      "gender": "girls"
  },
  {
      "brand": "Aarika",
      "name": "Net Dress",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17844398/2022/4/11/2667f7e0-7e9b-4d12-927c-33bbbe92c9b51649658757793AarikaTurquoiseBlueNetDress1.jpg",
      "sizes": [],
      "discountedPrice": "859",
      "originalPrice": "2399",
      "discountPercentage": "(60%OFF)",
      "similarLink": "#",
      "gender": "girls"
  },
  {
      "brand": "Wish Karo",
      "name": "Girls Satin Dress",
      "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16025662/2021/11/8/4668ae2f-cadc-4762-ab96-a4d5e81b6eec1636370379154Dresses1.jpg",
      "sizes": [],
      "discountedPrice": "1649",
      "originalPrice": "3299",
      "discountPercentage": "(50%OFF)",
      "similarLink": "#",
      "gender": "girls"
  }
    
  ];

  function generateProductHTML(product) {
    return `
      <li class="product-base">
        <div class="product-thumbShim"></div>
        <div class="product-imageSliderContainer">
          <div class="product-sliderContainer" style="display: block;">
            <div style="background: rgb(229, 241, 255);">
              <div style="height: 280px; width: 100%;">
                <picture draggable="false" class="img-responsive" style="width: 100%; height: 100%; display: block;">
                  <source srcset="${product.image}" type="image/webp">
                  <img draggable="false" src="${product.image}" class="img-responsive product-image" alt="${product.name}" title="${product.name}" style="width: 100%; display: block;" onclick="redirectToProductDetails('${product.name}')">
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div class="product-productMetaInfo">
          <h3 class="product-brand">${product.brand}</h3>
          <h4 class="product-product">${product.name}</h4>
          <h4 class="product-sizes">Sizes: ${product.sizes.join(', ')}</h4>
          <div class="product-price">
            <span class="product-discountedPrice">Rs. ${product.discountedPrice}</span>
            <span class="product-strike">Rs. ${product.originalPrice}</span>
            <span class="product-discountPercentage">(${product.discountPercentage}% OFF)</span>
          </div>
        </div>
        <div class="image-grid-similarColorsCta product-similarItemCta">
          <span class="myntraweb-sprite image-grid-similarColorsIcon sprites-similarProductsIcon"></span>
          <span class="image-grid-iconText">VIEW SIMILAR</span>
        </div>
        <div class="product-actions ">


          <span class="product-wishlistFlex product-actionsButton product-wishlist " style="width: 100%; text-align: center;">
            <span class="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span>wishlist
          </span>
          
          <div class="product-sizeDisplayDiv">
            <div class="product-sizeDisplayHeader">
              <span>Select a size</span>
              <span class="myntraweb-sprite product-sizeDisplayRemoveMark sprites-remove"></span>
            </div>
            <div class="product-sizeButtonsContaier">
              ${product.sizes.map(size => `<button class="product-sizeButton">${size}</button>`).join('')}
            </div>
          </div>
        </div>
      </li>
    `;
  }
  
  // Function to redirect to product details page
  function redirectToProductDetails(productName) {
    // Construct the URL dynamically based on the product name
    const productDetailsUrl = `ProductDetails.html?productName=${productName}`;
    // Redirect to the product details page
    window.location.href = productDetailsUrl;
  }
  
  
  
// Render products based on selected criteria
function renderProducts(filterFunction) {
  const productList = document.getElementById('productList');
  const filteredProducts = products.filter(filterFunction);
  const productHTML = filteredProducts.map(generateProductHTML).join('');
  productList.innerHTML = productHTML;
}

// Function to handle checkbox and radio button click events
function handleSelection(selector, event, filterFunction) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.addEventListener(event, function () {
      const selectedValues = Array.from(elements)
        .filter(el => el.checked)
        .map(el => el.value);
      if (selectedValues.length > 0) {
        renderProducts(product => selectedValues.includes(filterFunction(product)));
      } else {
        renderProducts(() => true); // Render all products if no filter applied
      }
    });
  });
}




// Render all products initially
renderProducts(() => true);

// Call the function to handle brand selection
handleSelection('input[type="checkbox"][name="brand"]', 'change', product => product.brand);

// Call the function to handle category selection
handleSelection('input[type="checkbox"][value]', 'change', product => product.category);

// Call the function to handle gender selection
handleSelection('input[type="radio"][name="gender"]', 'click', product => product.gender);



   const wishListData = JSON.parse(localStorage.getItem("wishListObj")) || [];

    function displayPage(productData) {
        document.getElementById("container").innerHTML = "";

        productData.forEach(function(elem) {
            var box = document.createElement("div");
            box.style.cursor = "pointer";

            var img = document.createElement("img");
            img.src = elem.image_url;

            var contentBox = document.createElement('div');
            contentBox.setAttribute('class', 'contentBox');

            var brand = document.createElement("h4");
            brand.textContent = elem.brand;

            var productname = document.createElement("p");
            productname.textContent = elem.name;

            var mix = document.createElement("div");
            mix.setAttribute("class", "mixbox");

            var price = document.createElement("p");
            price.textContent = elem.price;

            var strprice = document.createElement("p");
            strprice.textContent = elem.strikedoffprice;
            strprice.setAttribute("class", "strikep");

            var offer = document.createElement("p");
            offer.textContent = elem.offer;
            offer.setAttribute("class", "offerp");

            mix.append(price, strprice, offer);

            var wishlistSpan = document.createElement("span");
            wishlistSpan.setAttribute("class", "product-wishlistFlex product-actionsButton product-wishlist");
            wishlistSpan.style.width = "100%";
            wishlistSpan.style.textAlign = "center";
            wishlistSpan.innerHTML = '<span class="myntraweb-sprite product-notWishlistedIcon sprites-notWishlisted"></span> wishlist';

            wishlistSpan.addEventListener("click", function() {
                addToWishlist(elem);
                wishlistSpan.innerHTML = '<span class="myntraweb-sprite product-wishlistedIcon sprites-wishlisted"></span> added';
            });

            var atc = document.createElement("p");
            atc.setAttribute("class", "addToCartp");
            atc.textContent = "Add to Cart";

            contentBox.append(brand, productname, mix, wishlistSpan, atc);

            box.append(img, contentBox);

            document.querySelector("#container").append(box);
        });
    }

    function addToWishlist(product) {
        wishListData.push(product);
        localStorage.setItem("wishListObj", JSON.stringify(wishListData));
    }

    displayPage(products);


});