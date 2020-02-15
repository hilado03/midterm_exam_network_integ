/*                                                                                                                                                                                                                                                                                                                                                                                                   /** mga id ng select
    #mask_slash
    #mask_ip
    #number_of_hosts
*/


/*
$(document).ready(function(){
    $("#mask_slash").change(function(){
        var pipiliin = $(this).prop('selectedIndex');
        $("#mask_ip").prop('selectedIndex', pipiliin);
        $("#number_of_hosts").prop('selectedIndex', pipiliin);
    });
});
$(document).ready(function(){
    $("#mask_ip").change(function(){
        var pipiliin = $(this).prop('selectedIndex');
        $("#mask_slash").prop('selectedIndex', pipiliin);
        $("#number_of_hosts").prop('selectedIndex', pipiliin);
    });
});
$(document).ready(function(){
    $("#number_of_hosts").change(function(){
        var pipiliin = $(this).prop('selectedIndex');
        $("#mask_ip").prop('selectedIndex', pipiliin);
        $("#mask_slash").prop('selectedIndex', pipiliin);
    });
});

*/

$(document).ready(function(){
$("#mask_slash").change(function(){
    var idx = $(this).prop('selectedIndex');
    $("#mask_ip").prop('selectedIndex', idx);
    var val_slash = $(this).val();
    var val_clients = 0;

    switch (val_slash){
        case 21:
            val_clients = "2046";
            break;
        case 22:
            val_clients = "1022";
            break;
        case 23:
            val_clients = "510";
            break;
        case 24:
            val_clients = "254";
            break;
        case 25:
            val_clients = "126";
            break;
        case 26:
            val_clients = "62";
            break;
        case 27:
            val_clients = "30";
            break;
        case 28:
            val_clients = "14";
            break;
        case 29:
            val_clients = "6";
            break;
        case 30:
            val_clients = "2";
            break;
    }
    });
});