(function() {

    let elLigue = document.querySelector('[data-js-ligue]'),
        elForm = elLigue.querySelector('[data-js-form]'),
        elSelectTeams = elForm.querySelector('[data-js-teams]');

        elSelectTeams.addEventListener('change', afficheJoueurs);

    function afficheJoueurs() {
        let idEquipe = encodeURIComponent(elSelectTeams.value);
        
        let myInit = {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: `idEquipe=${idEquipe}`
    }
        fetch('requetes/requeteJoueurs.php', myInit)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            }
            )


}})()