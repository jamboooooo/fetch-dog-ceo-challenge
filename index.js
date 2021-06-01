document.addEventListener('DOMContentLoaded', () => {
    // количество загружаемых изображений
    const IMAGES_COUNT = 4;

    // ссылка для загрузки изображений
    const IMAGES_URL = `https://dog.ceo/api/breeds/image/random/${IMAGES_COUNT}`;

    // ссылка для загрузки списка пород
    const BREEDS_URL = "https://dog.ceo/api/breeds/list";

    // узел, в котором будет список изображений
    const imagesContainer = document.querySelector('.images');

    // узел, в котором будет список пород
    const breedsContainer = document.querySelector('.breeds');

    // узел кнопки обновления
    const button = document.querySelector('button');

    // загружаем список пород
    const fetchBreedsList = () => {
        const data = fetch(BREEDS_URL)
            .then(res => res.json())
            .then(breeds => {
                breeds.message.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item
                    breedsContainer.append(li)
                })
            })
    }
    fetchBreedsList();

    // еще раз загружаем изображения, если кликнули на кнопку обновления
    button.addEventListener('click', () => {
        fetchAndRenderImages();
    });

    // ТВОЙ КОД
    // сразу загружаем изображения

    const fetchAndRenderImages = () => {
        const data = fetch(IMAGES_URL)
            .then(res => res.json())
            .then(imgs => {
                imgs.message.forEach(item => {
                    const img = document.createElement('img')
                    img.src = item;
                    img.style.width = '250px'
                    img.style.height = '250px'
                    imagesContainer.append(img)
                });
            })
    }
    fetchAndRenderImages()
})