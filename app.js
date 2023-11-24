// const content = document.querySelector('.content');

// content.addEventListener('click', function () {
//     if (!content.classList.contains('active')) {
//         content.classList.add('active');
//     } else {
//         content.classList.remove('active');
//     }



// })




function toggleContent(contentId) {
    let content = document.getElementById(contentId);
    let otherContentId = (contentId === 'credits') ? 'products' : 'credits';
    let otherContent = document.getElementById(otherContentId);

    content.classList.toggle('active');
    otherContent.classList.remove('active');
}

document.getElementById('creditsLink').addEventListener('click', function () {
    toggleContent('credits');
});

document.getElementById('productsLink').addEventListener('click', function () {
    toggleContent('products');
});