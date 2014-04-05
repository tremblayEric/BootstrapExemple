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
    
    $("#tps").val(tps.toFixed(2));
    $("#tvq").val(tvq.toFixed(2));
    $("#sousTotal").val((tps + tvq).toFixed(2));
    $("#total").val((totalAvecTPSetTVQ).toFixed(2));  
    
    var venteLivre = parseFloat(totalAvecTPSetTVQ.toFixed(2));
    var venteAbonnement = parseFloat($("#montantAbonnement").text());
    var venteMobilier = parseFloat($("#montantMobilier").text());
    var venteDiverse = parseFloat($("#montantDiverse").text());
    var venteMateriaux=  parseFloat($("#montantMateriaux").text());
    
    var totalVentes = 
        venteLivre + 
        venteAbonnement + 
        venteMobilier +
        venteDiverse + 
        venteMateriaux;
    
    $("#montantLivres").text(venteLivre.toFixed(2));
    $("#totalVentes").text(totalVentes.toFixed(2));
    
}

$(".modifiable").on("change",calculTotal);

$("#facturer").on('click', function(){
   
   
    $("#popupLivre").modal("hide");
    
   
    $("#popupBar").modal("show");
    var complete = 0;
    
    while(complete <= 100){
        
        setTimeout(function () {
       
        $(".progress-bar").css("width",complete + "%");
    }, 1000);
        complete++;
    }
    
    
     setTimeout(function () {
         
         $("#popupBar").modal("hide")
         $(".progress-bar").css("width","0%");
 },1500);   
    
    
    
  calculTotal(); 
    
   
    
});





$(".close").on('click',function(event){
    event.preventDefault();
    if(oldData != undefined){
        $("#table1").replaceWith(oldData);
        oldData = undefined;
        $("#facturer").on('click', callback);
    }
});





