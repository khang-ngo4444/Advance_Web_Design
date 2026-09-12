// Hàm thêm dữ liệu vào API từ URL và gọi callback khi hoàn thành
function addDataToAPI(url, data, callback) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Lỗi khi thêm dữ liệu vào API');
            }
            return response.json();
        })
        .then(result => {
            callback(null, result);
        })
        .catch(error => {
            callback(error, null);
        });
}

// Hàm callback để xử lý kết quả sau khi thêm dữ liệu thành công
function handleAddDataResponse(error, result) {
    if (error) {
        console.error('Lỗi:', error.message);
    } else {
        console.log('Dữ liệu đã được thêm vào API thành công:', result);
    }
}

// URL của API cần thêm dữ liệu
const apiUrl = 'https://656d3ffbbcc5618d3c22ee91.mockapi.io/product';

// Dữ liệu cần thêm vào API
const newData = {
    name: 'John Doe_Mr DInh _VTC',
    price: 30,
};

// Gọi hàm để thêm dữ liệu vào API từ URL và truyền hàm callback để xử lý kết quả
addDataToAPI(apiUrl, newData, handleAddDataResponse);
