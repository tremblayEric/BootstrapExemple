/*
Test TP3 
*/
casper.test.begin("Chargement de la page", 1, function(test) {
  // Chargement de la page
  casper.start('http://localhost:8000/vue.html', function(){
    test.assertTitle('Dossier Comptable');
    test.assertExists('#page');
    test.assertExists('#numeroDossier');
    test.assertNotVisible('#page');
    test.assertVisible('#numeroDossier');
  });

  casper.run(function(){
    test.done();
  }
    );
});