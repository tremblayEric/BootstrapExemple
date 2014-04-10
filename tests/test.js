/*
exemple du cours à éffacer et mettre nos tests 
*/
casper.test.begin("Test pour TP3", 1, function(test) {
  // Chargement de la page
  casper.start('http://localhost:8000/vue.html', function(){
    test.assertTitle('Dossier Comptable');
  }).run(function(){
    test.done();
  }
    );
});