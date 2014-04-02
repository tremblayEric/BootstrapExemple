//inf4150-TP3
//Eric Tremblay TREE13057906
//Ricardo Solon SOLJ06048503


$("#facturer").on('click', function(event) {
	event.preventDefault();
	$( "#result" ).replaceWith(dataTable);
});


/*
A faire
sauvegarder contenu original
reactiviter au moment de cliquer sur X du modal pour remettre contenu original et revenir a zero
reactivite au moment de jouer dans le tableau ?
*/



//NOT SAFE FOR PRODUCTION 
var dataTable = "<div class='row'>"+
      "<div class='table-responsive'>"+
        "<table class='table table-striped'>"+
          "<thead>"+
            "<tr>"+
              "<th>"+
              "#"+
              "</th>"+
              "<th>Item</th>"+
              "<th>Quantité</th>"+
              "<th>Prix Unitaire</th>"+
               "<th>Montant</th>"+
            "</tr>"+
          "</thead>"+
          "<tbody>"+
            "<tr>"+
              "<td>1</td>"+
              "<td>item 1</td>"+
              "<td>5</td>"+
              "<td><input id='item1Prix' type='text' name='item1Prix' value='10.00' placeholder='0.0'></td>"+
              "<td><input id='montant1' type='text' name='montant1' value='50.00' placeholder='0.0' disabled='true'></td>"+
            "</tr>"+
            "<tr>"+
              "<td>2</td>"+
              "<td>item 2</td>"+
              "<td>5</td>"+
              "<td><input id='item2Prix' type='text' name='item2Prix' value='10.00' placeholder='0.0'></td>"+
              "<td><input id='montant2' type='text'  name='montant2' value='50.00' placeholder='0.0' disabled='true'></td>"+
            "</tr>"+
            "<tr>"+
              "<td>3</td>"+
              "<td>item 3</td>"+
              "<td>5</td>"+
              "<td><input id='item3Prix' type='text' name='item3Prix' value='10.00' placeholder='0.0'></td>"+
              "<td><input id='montant3' type='text' name='montant3' value='50.00' placeholder='0.0' disabled='true'></td>"+
            "</tr>"+
          "</tbody>"+
          "<tfoot>"+
            "<tr>"+
              "<td colspan='3'></td>"+
              "<td >TPS</td>"+
              "<td ><input id='montant3' type='text' name='montant3' value='5.00' placeholder='0.0' disabled='true'></td>"+
            "</tr>"+
            "<tr>"+
            "<td colspan='3'></td>"+
              "<td>TVQ</td>"+
              "<td ><input id='montant3' type='text' name='montant3' value='2.50' placeholder='0.0' disabled='true'></td>"+
            "</tr>"+
            "<tr>"+
            "<td colspan='3'></td>"+
              "<td>Sous-Total</td>"+
              "<td><input id='montant3' type='text' name='montant3' value='7.50' placeholder='0.0' disabled='true'></td>"+
            "</tr>"+
            "<tr>"+
            "<td colspan='3'></td>"+
              "<td >Total</td>"+
              "<td ><input id='montant3' type='text' name='montant3' value='10000.00' placeholder='0.0' disabled='true'></td>"+
            "</tr>"+
          "</tfoot>"+
        "</table>"+
      "</div>"+
      "</div>";