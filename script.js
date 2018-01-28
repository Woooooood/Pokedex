window.onload = function () {
    document.querySelector('#myform').onsubmit = function () {
        var searchPkm = document.querySelector('input[name="pkdname"]').value;
        var pokemon = document.querySelector('.screen');

            $.ajax({
                url: 'pokemons.json',
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    for (var i in data) {
                       searchPkm += data[i].name;
                        console.log("test");

                    }
                }
            });
    }
}