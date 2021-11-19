const url = "/translator"
async function UploadFile() {
    let data = {text : document.querySelector('.code').textContent}
    try {
        const response = await fetch(url, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
        ShowInfo(json)
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
function ShowInfo(Json){
    console.log(Json['ObjectCode']['code'])
    document.querySelector('#tab_01').firstChild.data = Json['ObjectCode']['code']
    document.querySelector('#tab_02').firstChild.data = JSON.stringify(Json['lexeme'])
    console.log(Json['Result_of_work'])
    document.querySelector('#tab_03').firstChild.data = Json['Result_of_work']
}
