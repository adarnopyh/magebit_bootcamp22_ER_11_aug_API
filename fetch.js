async function fetchAPI(url, callback) {
    //const response = await fetch(url, { method: 'POST', body: data });
    const response = await fetch(url);
    const response_json = await response.json();
    console.log(response_json);
    if (response.status == 200) {
        callback(response_json);
    }
}

document.querySelector('.fetch_btn').onclick = function () {
    fetchAPI('https://dog.ceo/api/breeds/image/random', function (response) {
        addImg(response.message);
    });
    fetchAPI('https://uselessfacts.jsph.pl/random.json', function (response) {
        addTxt(response.text);
    });
    fetchAPI('https://randomuser.me/api/', function (response) {
        addAuthor(response.results);
    });
};

