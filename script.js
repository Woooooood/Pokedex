window.onload = function () {
    var pokemon = document.querySelector('.screen');
    var imagepkm = document.querySelector('#img');
    var textpkmtype = document.querySelector('.pokemontype');
    var textpkmname = document.querySelector('.pokemonname');
    var blockErrors = document.querySelector('#form-errors');
    blockErrors.innerHTML ="";
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
            for (var i in data) {
                if (searchPkm === 'nidoran') {
                    imagepkm.style.display = "none";
                    textpkmtype.style.display = "none";
                    textpkmname.style.display = "none";
                    blockErrors.innerText = "Please, specify: \'nidoranm\' or \'nidoranf\'";
                } else if (searchPkm === 'farfetch\'d') {
                    blockErrors.innerText = "Do you mean Farfetchd ?";
                    imagepkm.style.display = "none";
                    textpkmtype.style.display = "none";
                    textpkmname.style.display = "none";
                } else if (searchPkm === 'mr. mime'){
                    blockErrors.innerText = "Do you mean Mr-mime?";
                    imagepkm.style.display = "none";
                    textpkmtype.style.display = "none";
                    textpkmname.style.display = "none";
                } else if (searchPkm === data[i].name.toLowerCase() || i === searchPkm) {

                    imagepkm.style.display = "inherit";
                    textpkmtype.style.display = "inherit";
                    textpkmname.style.display = "inherit";
                    imagepkm.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/' + data[i].name.toLowerCase() + '.gif');
                    document.querySelector('.pokemonname').innerHTML = 'Name: ' + data[i].name;
                    document.querySelector('.pokemontype').innerHTML = 'Type: ' + data[i].type;
                    $(blockErrors).text('');
                    if (data[i].type === 'electric') {
                        textpkmtype.style.color = "yellow";
                    }
                    if (data[i].type === 'normal') {
                        textpkmtype.style.color = "grey";
                    }
                    if (data[i].type === 'fairy') {
                        textpkmtype.style.color = "hotpink";
                    }
                    if (data[i].type === 'fighting') {
                        textpkmtype.style.color = "brown";
                    }
                    if (data[i].type === 'fire') {
                        textpkmtype.style.color = "orange";
                    }
                    if (data[i].type === 'grass') {
                        textpkmtype.style.color = "#42ff2d";
                    }
                    if (data[i].type === 'poison') {
                        textpkmtype.style.color = "#781a70";
                    }
                    if (data[i].type === 'water') {
                        textpkmtype.style.color = "#2c8ebf";
                    }
                    if (data[i].type === 'ground') {
                        textpkmtype.style.color = "#ac9d85";
                    }
                    if (data[i].type === 'rock') {
                        textpkmtype.style.color = "#705f19";
                    }
                    if (data[i].type === 'psychic') {
                        textpkmtype.style.color = "#bf4395";
                    }
                    if (data[i].type === 'ice') {
                        textpkmtype.style.color = "#0abfaf";
                    }
                    if (data[i].type === 'bug') {
                        textpkmtype.style.color = "#7fbf25";
                    }
                    if (data[i].type === 'dragon') {
                        textpkmtype.style.color = "#3310bf";
                    }
                    if (data[i].type === 'ghost') {
                        textpkmtype.style.color = "#350f53";
                    }
                    if (data[i].type === 'steel') {
                        textpkmtype.style.color = "#a19ba0";
                    }
                    if (data[i].type === 'dark') {
                        textpkmtype.style.color = "#000000";
                    }
                    if (data[i].type === 'flying') {
                        textpkmtype.style.color = "#afc0ff";
                    }

                }
            }
            return false;
        }
    }
}