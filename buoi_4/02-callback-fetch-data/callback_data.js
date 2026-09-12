function fetchDataFromAPI(callback) {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
}

function handleAPIData(error, data) {
    if (error) {
        console.log('Đã xảy ra lỗi khi lấy dữ liệu từ API:', error);
    } else {
        console.log('Dữ liệu từ API:', data);
    }
}

fetchDataFromAPI(handleAPIData);
