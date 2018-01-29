window.onload = function () {
    var pokemon = document.querySelector('.screen');
    var imagepkm = document.querySelector('#img');
    var textpkmtype = document.querySelector('.pokemontype');
    var textpkmname = document.querySelector('.pokemonname');
    var blockErrors = document.querySelector('#form-errors');
    blockErrors.innerHTML = "";
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
                    } else if (searchPkm === 'mr. mime') {
                        blockErrors.innerText = "Do you mean Mr-mime?";
                        imagepkm.style.display = "none";
                        textpkmtype.style.display = "none";
                        textpkmname.style.display = "none";
                    } else if (1 > searchPkm || 152 < searchPkm) {
                        blockErrors.innerText = 'pokemon number not found, please enter a number between 1 and 151.';
                        imagepkm.style.display = "none";
                        textpkmtype.style.display = "none";
                        textpkmname.style.display = "none";
                    } //else if ( searchPkm !== data[i].name.toLowerCase()) {
                        //blockErrors.innerText = 'pokemon name not found';
                        //imagepkm.style.display = "none";
                        //textpkmtype.style.display = "none";
                       // textpkmname.style.display = "none";
                    //}
                    else if (searchPkm === data[i].name.toLowerCase() || i === searchPkm) {
                        imagepkm.style.display = "inherit";
                        textpkmtype.style.display = "inherit";
                        textpkmname.style.display = "inherit";
                        imagepkm.setAttribute('src', 'http://www.pokestadium.com/sprites/xy/' + data[i].name.toLowerCase() + '.gif');
                        document.querySelector('.pokemonname').innerHTML = 'Name: ' + data[i].name;
                        document.querySelector('.pokemontype').innerHTML = 'Type: ' + data[i].type;
                        blockErrors.innerText = '';
                        var type = data[i].type;
                        if (type === 'electric') {
                            textpkmtype.style.color = "yellow";
                        }
                        if (type === 'normal') {
                            textpkmtype.style.color = "grey";
                        }
                        if (type === 'fairy') {
                            textpkmtype.style.color = "hotpink";
                        }
                        if (type === 'fighting') {
                            textpkmtype.style.color = "brown";
                        }
                        if (type === 'fire') {
                            textpkmtype.style.color = "orange";
                        }
                        if (type === 'grass') {
                            textpkmtype.style.color = "#42ff2d";
                        }
                        if (type === 'poison') {
                            textpkmtype.style.color = "#781a70";
                        }
                        if (type === 'water') {
                            textpkmtype.style.color = "#2c8ebf";
                        }
                        if (type === 'ground') {
                            textpkmtype.style.color = "#ac9d85";
                        }
                        if (type === 'rock') {
                            textpkmtype.style.color = "#705f19";
                        }
                        if (type === 'psychic') {
                            textpkmtype.style.color = "#bf4395";
                        }
                        if (type === 'ice') {
                            textpkmtype.style.color = "#0abfaf";
                        }
                        if (type === 'bug') {
                            textpkmtype.style.color = "#7fbf25";
                        }
                        if (type === 'dragon') {
                            textpkmtype.style.color = "#3310bf";
                        }
                        if (type === 'ghost') {
                            textpkmtype.style.color = "#350f53";
                        }
                        if (type === 'steel') {
                            textpkmtype.style.color = "#a19ba0";
                        }
                        if (type === 'dark') {
                            textpkmtype.style.color = "#000000";
                        }
                        if (type === 'flying') {
                            textpkmtype.style.color = "#afc0ff";
                        }

                    }
                }
                return false;
            }
        }
    }