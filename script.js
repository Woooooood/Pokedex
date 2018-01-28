window.onload = function () {
    document.querySelector('#myform').onsubmit = function () {
        var searchPkm = document.querySelector('input[name="pkdname"]').value.toLowerCase();
        var pokemon = document.querySelector('.screen');
        var imagepkm = document.querySelector('#img');

        $.ajax({
            url: 'pokemons.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                for (var i in data) {
                    if (searchPkm === data[i].name.toLowerCase() || i === searchPkm) {
                        imagepkm.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/' + data[i].name.toLowerCase()+ '.gif');

                    }
                }
            }
        });
        return false;
    }
}