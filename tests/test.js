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







