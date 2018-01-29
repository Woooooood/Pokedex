window.onload = function () {
    document.querySelector('#myform').onsubmit = function () {
        var searchPkm = document.querySelector('input[name="pkdname"]').value.toLowerCase();
        var pokemon = document.querySelector('.screen');
        var imagepkm = document.querySelector('#img');
        var blockErrors = document.querySelector('#form-errors');
        blockErrors.innerHTML='';

        $.ajax({
            url: 'pokemons.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                for (var i in data) {
                 if (searchPkm === 'nidoran') {
                     $(blockErrors).text('Please, specify: \'nidoranm\' or \'nidoranf\'');
                    } else if(searchPkm === data[i].name.toLowerCase() || i === searchPkm)
                    {
                        var test = "http://www.pokestadium.com/sprites/xy/nidoranm.gif";
                        console.log(test);
                        imagepkm.style.display ="inherit";
                        imagepkm.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/' + data[i].name.toLowerCase()+ '.gif');
                        document.querySelector('.pokemonname').innerHTML = 'Name: '+data[i].name;
                        document.querySelector('.pokemontype').innerHTML = 'Type: '+data[i].type;

                    }
                }
            }
        });
        return false;
    }
}