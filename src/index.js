function filterByTitle () {
    var input = document.querySelector('#search');
    var filter = input.value.toLowerCase();
    var articles = document.querySelectorAll('article');

    for (var i = 0; i < articles.length; i++) {
        var title = articles[i].querySelector('.title');
        if (title.innerText.toLowerCase().indexOf(filter) > -1) {
            articles[i].style.display = '';
        } else {
            articles[i].style.display = 'none';
        }
    }
}