// Hàm để lấy dữ liệu từ API bằng callback
function fetchDataFromAPI(callback) {
    // Giả sử đây là URL của API
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

    // Gửi request để lấy dữ liệu từ API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Gọi callback và truyền dữ liệu nhận được từ API vào
            callback(null, data);
        })
        .catch(error => {
            // Nếu có lỗi, gọi callback với thông báo lỗi
            callback(error, null);
        });
}

// Hàm callback để xử lý dữ liệu nhận được từ API
function handleAPIData(error, data) {
    if (error) {
        console.log('Đã xảy ra lỗi khi lấy dữ liệu từ API:', error);
    } else {
        console.log('Dữ liệu từ API:', data);
    }
}

// Gọi hàm để lấy dữ liệu từ API và truyền hàm callback để xử lý dữ liệu
fetchDataFromAPI(handleAPIData);
