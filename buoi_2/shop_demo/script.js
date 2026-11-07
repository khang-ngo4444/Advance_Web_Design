var man = [
    {
        id: 1,
        name: "The Cosmo (Đen) Quần short khaki",
        code: "TC1025011BA",
        price: "250.000",
        oldPrice: "350.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa56E3zzo3lte5psaavWgz3d4__Dc7fpwR13yAzADBkQ&s=10"
    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng QQ",
        code: "TC1025012BA",
        price: "398.000",
        oldPrice: "498.000",
        image: "https://cdn.hstatic.net/products/1000096703/_nh_b_a_shopee_24_6b3fe437c2524a1cb7b25fb03461eb40_grande.jpg"
    },
    {
        id: 3,
        name: "Áo thun nam",
        code: "TC1025013BA",
        price: "300.000",
        oldPrice: "400.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTB9GlFVJKsYQtfNobVuHo17g215CtyqkJliSFvyeXQ&s=10"
    },
    {
        id: 4,
        name: "Áo sơ mi nam",
        code: "TC1025014BA",
        price: "300.000",
        oldPrice: "380.000",
        image: "https://pos.nvncdn.com/492284-9176/ps/20241110_XPtFFsk0yL.jpeg?v=1731229165"
    }
];
 
var woment = [
    {
        id: 1,
        name: "Quần jean nữ",
        code: "KO0002",
        price: "269.000",
        oldPrice: "370.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFiimPKNI75yhZ5cXFGTjxFli5lEDHhWT1PJ04tEUIw&s=10"
    },
    {
        id: 2,
        name: "Áo khoác nữ",
        code: "VN0002",
        price: "249.000",
        oldPrice: "369.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS54BiNOOS08MINgDgI_nWo_aOw7TWcYh-JRL5g06usAw&s=10"
    },
    {
        id: 3,
        name: "Áo phông nữ",
        code: "US0002",
        price: "159.000",
        oldPrice: "390.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVYPBShd9V1wUplHM-HTdcmuoZLzKhDo4R5vcX6lrCA&s"
    },
    {
        id: 4,
        name: "Váy nữ",
        code: "VN0003",
        price: "299.000",
        oldPrice: "399.000",
        image: "https://down-vn.img.susercontent.com/file/cn-11134207-7ras8-m3bousgkntnz2e"
    }
];

function listProducts() {
    for (let i = 0; i <= man.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + man[i].image + '" class="card-img-top">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + man[i].name + '</h5>';
        demo += '<p class="card-text">';
        demo += '<span class="price-new">' + man[i].price + ' đ</span> ';
        demo += '<span class="price-old">' + man[i].oldPrice + ' đ</span>';
        demo += '</p>';
        demo += '<a href="#" class="btn" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }

    for (let i = 0; i <= woment.length - 1; i++) {
        var demo = '<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="' + woment[i].image + '" class="card-img-top">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">' + woment[i].name + '</h5>';
        demo += '<p class="card-text">';
        demo += '<span class="price-new">' + woment[i].price + ' đ</span> ';
        demo += '<span class="price-old">' + woment[i].oldPrice + ' đ</span>';
        demo += '</p>';
        demo += '<a href="#" class="btn" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}
 
function oder() {
    alert("thank you your order");
}
 