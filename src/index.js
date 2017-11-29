function filterByTitle () {
    var input = document.getElementById('search');
    var filter = input.value.toLowerCase();
    var titles = document.getElementsByTagName('h2')[0];

    for (var i = 0; i < titles.length; i++) {
        var p = titles[i].getElementsByTagName('p')[0];
        if (p.innerHTML.toLowerCase().indexOf(filter) > -1) {
            titles[i].style.display = '';
        } else {
            titles[i].style.display = 'none';
        }
    }
}