//inf4150-TP3
//Eric Tremblay TREE13057906
//Ricardo Solon SOLJ06048503

$("#numeroDossier").on("change",function(){
    
    if($(this).val() != ""){
        
       $("#page").show(); 
        
    }
    
});

$('#memberLabel').on("click",function(){
    if($('#numeroDossier').val() != ""){
        $('#page').show();
    }
});

var calculTotal = function(){
    
    var prixItem_1 = +$("#item1Prix").val();
    var prixItem_2 = +$("#item2Prix").val();
    var prixItem_3 = +$("#item3Prix").val();
    
    var qteItem1 = +$("#qteItem1").val();
    var qteItem2 = +$("#qteItem2").val();
    var qteItem3 = +$("#qteItem3").val();

    var noteCredit = +$("#noteCredit").val();
    
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
    
    var totalAvecTPSetTVQ = (totalAvecTPS + tvq) - noteCredit;
    
    $("#tps").val(tps.toFixed(2));
    $("#tvq").val(tvq.toFixed(2));
    $("#sousTotal").val((tps + tvq).toFixed(2));
    $("#total").val((totalAvecTPSetTVQ).toFixed(2));  
    
    var venteLivre = parseFloat(totalAvecTPSetTVQ.toFixed(2));
    var venteAbonnement = parseFloat(+$("#montantAbonnement").text());
    var venteMobilier = parseFloat(+$("#montantMobilier").text());
    var venteDiverse = parseFloat(+$("#montantDiverse").text());
    var venteMateriaux=  parseFloat(+$("#montantMateriaux").text());
    
    var totalVentes = 
        venteLivre + 
        venteAbonnement + 
        venteMobilier +
        venteDiverse + 
        venteMateriaux;
    
    $("#montantLivres").text(venteLivre.toFixed(2));
    $("#totalVentes").text(totalVentes.toFixed(2));
    
}


$(".modifiable").on("change keyup",calculTotal);

$("#facturer").hide();
$("#projetFacture").hide();
$(".inputCredit").hide();
$(".projetFacture1").hide();

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
         
         $("#popupBar").modal("hide");
         $(".progress-bar").css("width","0%");
 },1500);   
        
  calculTotal(); 
  $("#facturer").hide();
      
});


$("#idProjet").on('change keyup',function(event){
    event.preventDefault();
    var valeurTxT = $(this).val();
    if(valeurTxT !== ""){
         $("#facturer").show();
    }
   
   $("#projetFacture").find("span").text(valeurTxT);
   $(".projetFacture1").show();
   $("#projetFacture").show();
});

$("#btnNoteCredit").on('click',function(){
    $(".inputCredit").show();
    $("#btnNoteCredit").hide();
});

$('input[class="inputCredit"]').on('change',function(){
     var input = $(this);
     var valeur = +input.val();
     var inputMontant = input.closest('tr').find('input[id^="montant"]');
     var inputMontantVal = +inputMontant.val();
     var montantFinal = 0.00;
     var totalNote = 0.00;
     var inputMontantTotal = 0.00;

     if(valeur <= inputMontantVal){

        var noteCreditTotal = +$("#noteCredit").val();
        var montants = $('input[id^="montant"]');
        
        montantFinal = inputMontantVal - valeur;
        inputMontant.val(montantFinal.toFixed(2));
      
        $.each($('input[class="inputCredit"]'), function(index, val) {
             totalNote = totalNote + parseFloat(val.value);
             $("#noteCredit").val(parseFloat(totalNote).toFixed(2));
        });


        $.each(montants,function(index,val){
            inputMontantTotal = inputMontantTotal + parseFloat(val.value);
        });

        var tps = inputMontantTotal * 0.05;
        $("#tps").val(parseFloat(tps).toFixed(2));
        var tvq = (tps + inputMontantTotal) * 0.0975;
        $("#tvq").val(parseFloat(tvq).toFixed(2));
        inputMontantTotal = inputMontantTotal + tps + tvq;
        $("#sousTotal").val( parseFloat(+$("#tvq").val() +  +$("#tps").val()).toFixed(2));
        $("#total").val(parseFloat(inputMontantTotal).toFixed(2));

     }

});


