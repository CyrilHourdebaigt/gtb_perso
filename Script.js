/* style sidebar */
const boutonFiltrer = document.querySelector(".monBouton")
console.log(boutonFiltrer);

boutonFiltrer.addEventListener("click", function () {

    // TO DO 
    // 1) Récupérer la valeur de l'input date
    // 2) Concaténer la valeur de l'input a l'endpoint gtb "http://srv.gtb-pa.fr/indicators/kwh/" + maValeurDeLinputDate

    fetch("http://srv.gtb-pa.fr/indicators/kwh/17-07-2023").then(function(response) {
        console.log(response);
        return response.json()
    }).then ( function (data) {
        
        
        // TO DO 
        // Mettre une condition pour Détecter si la varibale Data contient bien des données exploitables
        // Détecter s'il y a un message d'erreur

        // return permet d'arrêter l'exécution du script
        // console.log(data.message);
        // return


        for (let batiment in data) {
            let nomDuBatiement = batiment;

            // Je récupère les noms des batiments
            console.log(nomDuBatiement)
            // Je récupère pour chaque batiment la conso kwh
            console.log(data[nomDuBatiement])

            let elementTd = document.getElementById(nomDuBatiement)
            console.log(elementTd);
            elementTd.innerHTML = data[nomDuBatiement]
        }
        console.log( data)
    })

})


