window.onload = function () {
    document.querySelector('#form').onsubmit = function () {
        var searchPkm = document.querySelector('input').value;
}

    searchPkm.onclick = function () {
}

    $.ajax({
        url: 'pokemons.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            for (var i in data) {
                searchPkm = data[i].toLowerCase();
                if searchPkm ===
                    }
        }
    }
}
