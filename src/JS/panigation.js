const productPerPage = 9;

var pageNumber;
var products = `http://localhost:3000/products?_page=1&_limit=${productPerPage}`;

async function fetchProducts() {
  fetch(products)
    .then((res) => res.json())
    .then(function (posts) {
      showProducts(posts);
    });
}

const getId = (clicked_id) => {
  pageNumber = clicked_id;
  products = `http://localhost:3000/products?_page=${pageNumber}&_limit=${productPerPage}`;
  fetchProducts();
};

const getIdCate = (id) => {
  idCate = id;
  products = `http://localhost:3000/category/${idCate}/products?_page=${pageNumber}&_limit=${productPerPage}`;
  fetchProducts();
};

const getTag = (id) => {
  tag = id;
  document.getElementById(tag).classList.toggle("active");
  products = `http://localhost:3000/tag/${tag}/products?_page=${pageNumber}&_limit=${productPerPage}`;
  fetchProducts();
};

// Lọc theo tăng giảm
// http://localhost:3000/tag/1/products?_sort=id&_order=desc

// Tìm kiếm theo keyword
// http://localhost:3000/products?q=keyword
