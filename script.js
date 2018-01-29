window.onload = function () {
    var pokemon = document.querySelector('.screen');

    var imagepkm = document.querySelector('#img');
    var blockErrors = document.querySelector('#form-errors');
    blockErrors.innerHTML='';
    var data = '';
    var request = new XMLHttpRequest();
    request.open('GET', 'pokemons.json', true);
    request.onload = function () {
        data = JSON.parse(request.responseText);
        Mypokedex(data);
    };
    request.send();

    function Mypokedex(data) {
        document.querySelector('#myform').onsubmit = function () {
            var searchPkm = document.querySelector('input[name="pkdname"]').value.toLowerCase();
            console.log("test");
            for (var i in data) {
                if (searchPkm === 'nidoran') {
                    $(blockErrors).text('Please, specify: \'nidoranm\' or \'nidoranf\'');
                } else if (searchPkm === data[i].name.toLowerCase() || i === searchPkm) {
                    var test = "http://www.pokestadium.com/sprites/xy/nidoranm.gif";
                    console.log(test);
                    imagepkm.style.display = "inherit";
                    imagepkm.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/' + data[i].name.toLowerCase() + '.gif');
                    document.querySelector('.pokemonname').innerHTML = 'Name: ' + data[i].name;
                    document.querySelector('.pokemontype').innerHTML = 'Type: ' + data[i].type;

                }
            }
            return false;
        }
    }
}