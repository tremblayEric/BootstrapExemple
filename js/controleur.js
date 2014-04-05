//inf4150-TP3
//Eric Tremblay TREE13057906
//Ricardo Solon SOLJ06048503

var oldData = undefined;


var calculTotal = function(event){
    event.preventDefault();
    
    var prixItem_1 = $("#item1Prix").val();
    var prixItem_2 = $("#item2Prix").val();
    var prixItem_3 = $("#item3Prix").val();
    
    var qteItem1 = $("#qteItem1").val();
    var qteItem2 = $("#qteItem2").val();
    var qteItem3 = $("#qteItem3").val();
    
    var totalItem1 = prixItem_1 * qteItem1;
    var totalItem2 = prixItem_2 * qteItem2;
    var totalItem3 = prixItem_3 * qteItem3;
    
    $("#montant1").val(totalItem1);
    $("#montant2").val(totalItem2);
    $("#montant3").val(totalItem3);
    
    
    var totalAvantTPS = totalItem1 + totalItem2 + totalItem3;
    var tps = (totalAvantTPS * 0.05);
    var totalAvecTPS = totalAvantTPS + tps;
    var tvq = (totalAvecTPS * 0.0975);
    
    var totalAvecTPSetTVQ = totalAvecTPS + tvq;
    
    $("#tps").val(tps);
    $("#tvq").val(tvq);
    $("#sousTotal").val((tps + tvq).toFixed(2));
    $("#total").val((totalAvecTPSetTVQ).toFixed(2));   
}

$(".modifiable").on("change",calculTotal);

$("#facturer").on('click', function(){
    
    ("#popupLivre").modal("hide");
    
});


//<div class="progress progress-striped active">
//  <div class="progress-bar"  role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
//    <span class="sr-only">45% Complete</span>
//  </div>
//</div>


$(".close").on('click',function(event){
	event.preventDefault();
	if(oldData != undefined){
		$("#table1").replaceWith(oldData);
		oldData = undefined;
		$("#facturer").on('click', callback);
	}
});





