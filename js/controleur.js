//inf4150-TP3
//Eric Tremblay TREE13057906
//Ricardo Solon SOLJ06048503

var oldData = undefined;
var callback = function(event){
	event.preventDefault();
	oldData = $("#result");
	$( "#result" ).replaceWith(dataTable);
}


$("#facturer").on('click', callback);

$(".close").on('click',function(event){
	event.preventDefault();
	if(oldData != undefined){
		$("#table1").replaceWith(oldData);
		oldData = undefined;
		$("#facturer").on('click', callback);
	}
});



//$('#numeroDossier').on('input', function(){
//console.log('this actually works');
//});


/*
A faire
reactivite au moment de jouer dans le tableau ?
feedback visuel au moment de la facture
*/



//NOT SAFE FOR PRODUCTION 
//var dataTable = 
  
  
  
//  <div class="row">
//                                <table class="table table-hover table-condensed">
//                                    <thead>
//                                        <tr>
//                                            <th>Date</th>
//                                            <th>Nom du Produit</th>
//                                            <th>Prix Unitaire</th>
//                                            <th>Quantite</th>
//                                            <th>Montant</th>
//                                        </tr>
//                                    </thead>
//                                    <tbody>
//                                        <tr class="info">
//                                            <th>2014-01-12</th>
//                                            <th>Le Seigneur des Anneaux</th>
//                                            <th>50.00</th>
//                                            <th>1</th>
//                                            <th>50.00</th>
//                                        </tr>
//                                        <tr class="active">
//                                            <th>2014-01-12</th>
//                                            <th>Les recettes de Tante Hilda</th>
//                                            <th>15.00</th>
//                                            <th>1</th>
//                                            <th>5.00</th>
//                                        </tr>
//                                        <tr class="info">
//                                            <th>2014-01-12</th>
//                                            <th>Le Hobbit</th>
//                                            <th>15.00</th>
//                                            <th>1</th>
//                                            <th>15.00</th>
//                                        </tr>
//                                        <tr class="active">
//                                            <th>2014-01-12</th>
//                                            <th>Coder Proprement</th>
//                                            <th>10.00</th>
//                                            <th>3</th>
//                                            <th>30.00</th>
//                                        </tr>
//                                    </tbody>
//                                    <tfoot>
//                                        <tr class="active">
//                                            <th colspan="4" class="text-right">Grand Total</th>
//                                            <th>100.00</th>
//                                        </tr>
//                                    </tfoot>
//
//                                </table>
//
//
//                            </div>