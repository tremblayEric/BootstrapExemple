/*
Test TP3 
*/
casper.test.begin("Chargement de la page", 1, function(test) {
 
    casper.start('../vue.html', function(){
        test.assertTitle('Dossier Comptable');
    });

    casper.run(function(){
        test.done();
    }
    );
});


casper.test.begin("Validation du selecteur de client", 2, function(test) {
 
    casper.start('../vue.html', function(){
        test.assertExists('#numeroDossier');
        test.assertVisible('#numeroDossier');
    });

    casper.run(function(){
        test.done();
    }
    );
});

casper.test.begin("Validation des accordeons", 2, function(test) {
 
    casper.start('../vue.html', function(){
        test.assertExists('#page');
        test.assertNotVisible('#page');
    });
    casper.run(function(){
        test.done();
    }
    );
});


casper.test.begin('Test des Liens des onglets du Dossier 1',2, function suite(test) {
    casper.start("../index.html", function() {
        test.assertExists('a[href="#aRecevoir"]');
        test.assertExists('a[href="#aPayer"]');
    });
    
    casper.run(function() {
        test.done();
    });
});

casper.test.begin('Test des Liens de l\'onglet \'A recevoir\' du Dossier 1',5, function suite(test) {
    casper.start("../index.html", function() {
        test.assertExists('a[href="#livre"]');
        test.assertExists('a[href="#abonnement"]');
        test.assertExists('a[href="#mobilier"]');
        test.assertExists('a[href="#divers"]');
        test.assertExists('a[href="#materiaux"]');
    });
    
    casper.run(function() {
        test.done();
    });
});

casper.test.begin('Test  ouverture de la facture', 19, function suite(test) {
    casper.start("../index.html", function() {
        //    	test.assertExists('a[href="#livre"]');
        this.click('a[href="#livre"]');
        this.wait(500, function() {
            
            test.assertVisible("#popupLivre","La modale de la facture est visible");
            //item1
            test.assertVisible("#qteItem1","Le champs de quantite  l'item1 est visible");
            test.assertVisible("#item1Prix","Le champs de prix  l'item1 est visible");
            test.assertVisible("#montant1","Le champs du montant  l'item1 est visible");
                
            //require('utils').dump(this.getElementInfo('#montant1'));\\cette ligne est utlie pour connaitre les info d'un element'
            
            test.assertEquals(this.getElementAttribute('input[id="montant1"]', 'disabled'),"","Le montant de l'item 1 n'est pas modifiable");
            test.assertNotVisible("#credit1","Le champs de note de credit  l'item1 est non visible");
            //item2
            test.assertVisible("#qteItem2","Le champs de quantite  l'item2 est visible");
            test.assertVisible("#item2Prix","Le champs de prix  l'item2 est visible");
            test.assertVisible("#montant2","Le champs du montant  l'item2 est visible");
            test.assertNotVisible("#credit2","Le champs de note de credit  l'item2 est non visible");
            //item3
            test.assertVisible("#qteItem3","Le champs de quantite  l'item3 est visible");
            test.assertVisible("#item3Prix","Le champs de prix  l'item3 est visible");
            test.assertVisible("#montant3","Le champs du montant  l'item3 est visible");
            test.assertNotVisible("#credit3","Le champs de note de credit  l'item3 est non visible");
	   
            //taxe et total
            test.assertVisible("#tps","Le champs de la tps est visible");
            test.assertVisible("#tvq","Le champs de la tvq est visible");
            test.assertVisible("#sousTotal","Le champs du sous total est visible");
            test.assertVisible("#total","Le champs du total est visible");
            test.assertVisible("#idProjet","Le champs du projet est visible");
        });             
    });
    
    casper.run(function() {
        test.done();
    });
});








