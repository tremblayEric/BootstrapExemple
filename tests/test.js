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






