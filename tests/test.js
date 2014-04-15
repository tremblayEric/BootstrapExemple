/*
Test TP3 
*/

casper.test.begin("Chargement de la page", 1, function(test) {
 
    casper.start('http://localhost:8000/vue.html', function(){
        test.assertTitle('Dossier Comptable');
    });

    casper.run(function(){
        test.done();
    }
    );
});



casper.test.begin("Validation du selecteur de client", 2, function(test) {
 
    casper.start('http://localhost:8000/vue.html', function(){
        test.assertExists('#numeroDossier');
        test.assertVisible('#numeroDossier');
    });

    casper.run(function(){
        test.done();
    }
    );
});

casper.test.begin("Validation des accordeons", 2, function(test) {
 
    casper.start('http://localhost:8000/vue.html', function(){
        test.assertExists('#page');
        test.assertNotVisible('#page');
    });
    casper.run(function(){
        test.done();
    }
    );
});


casper.test.begin('remplir le formulaire membres',5, function suite(test) {
    casper.options.viewportSize = {width: 1200, height: 800};
    casper.start("http://localhost:8000/vue.html", function() {
        this.evaluate(function(){
            document.querySelector('#numeroDossier').value = "12345";
        });
        this.click('#memberLabel');
        this.wait(500,function(){
            test.assertFieldCSS("#numeroDossier", "12345");
            this.capture('test.png');
            this.click('#accordeonDossierUn');
            this.wait(500,function(){
                test.assertVisible('#page');
                this.capture('test1a.png');
                this.click('#aPopupLivre');
                this.wait(500,function(){
                    this.capture('test1b.png');
                    this.click('#btnNoteCredit');
                    this.wait(500,function(){
                        test.assertVisible('#noteCredit');
                        this.capture('test1c.png');
                        this.evaluate(function(){
                            document.querySelector('#item1Prix').value = "6";
                        });
                        this.click('#total');
                        this.wait(500,function(){
                            this.capture('test1d.png');
                            var newTotal = this.evaluate(function(){
                                return document.querySelector('#total').value;
                            });
                            test.assertMatch(newTotal,/^172.86/);
                            this.evaluate(function(){
                                document.querySelector('#idProjet').value = "projet10";
                            });
                            this.click('#total');
                            this.wait(500,function(){
                                this.click('#facturer');
                                this.wait(900,function(){
                                    this.capture('test1f.png');
                                });
                                test.assertMatch('projet10',/^projet10/);
                                this.wait(2000,function(){
                                    this.capture('test1g.png');
                                });
                                

                            });
                        });
                        
                    });
                });
            });
            
        });


    });
    
    casper.run(function() {
        test.done();
    });
});



casper.test.begin('Test des Liens des onglets du Dossier 1',2, function suite(test) {
    casper.start("http://localhost:8000/vue.html", function() {
        test.assertExists('a[href="#aRecevoir"]');
        test.assertExists('a[href="#aPayer"]');

    });
    
    casper.run(function() {
        test.done();
    });
});

casper.test.begin('Test des Liens de l\'onglet \'A recevoir\' du Dossier 1',5, function suite(test) {
    casper.start("http://localhost:8000/vue.html", function() {
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

casper.test.begin('Test  ouverture de la facture', 35, function suite(test) {
    casper.options.viewportSize = {width: 1200, height: 800};
    casper.start("http://localhost:8000/vue.html", function() {
        //    	test.assertExists('a[href="#livre"]');
        this.click('a[href="#livre"]');
        this.wait(500, function() {
            test.assertExists("#popupLivre",'La modale de la facture des livres existe');
            test.assertVisible("#popupLivre","La modale de la facture est visible");
            test.assertExists("#uneAdresse","L'adresse existe");
            test.assertVisible("#uneAdresse","L'adresse est visible");
            test.assertExists('a[href="mailto:#"]',"Il existe un courriel");

            test.assertExists("#result","L'entete de la facture existe");
            test.assertVisible("#result","L'entete de la facutre est visible");
            test.assertVisible("#tableFacture","La table contenant la facture existe ");
            test.assertVisible("#tableFacture","La table conetnant la facture est visible");
            //item1
            test.assertVisible("#qteItem1","Le champs de quantite  l'item1 est visible");
            test.assertVisible("#item1Prix","Le champs de prix  l'item1 est visible");
            test.assertVisible("#montant1","Le champs du montant  l'item1 est visible"); 
            //require('utils').dump(this.getElementInfo('#montant1'));\\cette ligne est utlie pour connaitre les info d'un element
            test.assertEquals(this.getElementAttribute('#montant1', 'disabled'),"","Le montant de l'item 1 n'est pas modifiable");
            test.assertNotVisible("#credit1","Le champs de note de credit  l'item1 est non visible");
            //item2
            test.assertVisible("#qteItem2","Le champs de quantite  l'item2 est visible");
            test.assertVisible("#item2Prix","Le champs de prix  l'item2 est visible");
            test.assertVisible("#montant2","Le champs du montant  l'item2 est visible");
            test.assertEquals(this.getElementAttribute('#montant2', 'disabled'),"","Le montant de l'item 2 n'est pas modifiable");
            test.assertNotVisible("#credit2","Le champs de note de credit  l'item2 est non visible");
            //item3
            test.assertVisible("#qteItem3","Le champs de quantite  l'item3 est visible");
            test.assertVisible("#item3Prix","Le champs de prix  l'item3 est visible");
            test.assertVisible("#montant3","Le champs du montant  l'item3 est visible");
            test.assertEquals(this.getElementAttribute('#montant3', 'disabled'),"","Le montant de l'item 3 n'est pas modifiable");
            test.assertNotVisible("#credit3","Le champs de note de credit  l'item3 est non visible");
	   
            //taxe et total
            test.assertVisible("#tps","Le champs de la tps est visible");
            test.assertEquals(this.getElementAttribute('#tps', 'disabled'),"","La TPS n'est pas modifiable");
            test.assertVisible("#tvq","Le champs de la tvq est visible");
            test.assertEquals(this.getElementAttribute('#tvq', 'disabled'),"","La TVQ n'est pas modifiable");
            test.assertVisible("#sousTotal","Le champs du sous total est visible");
            test.assertEquals(this.getElementAttribute('#sousTotal', 'disabled'),"","Le sous-total n'est pas modifiable");
            test.assertVisible("#total","Le champs du total est visible");
            test.assertEquals(this.getElementAttribute('#total', 'disabled'),"","Le total n'est pas modifiable");
            test.assertVisible("#idProjet","Le champs du projet est visible");
        
            //bouton note de credit
            test.assertExists('#btnNoteCredit',"Il existe un element  note de credit");
            test.assertEquals(this.getElementAttribute('#btnNoteCredit', 'type'),"button","L'element btnNoteCredit est un bouton");
           this.capture('test3.png');


});             
    });
    
    casper.run(function() {
        test.done();
    });
});












