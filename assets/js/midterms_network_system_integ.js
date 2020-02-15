/*                                                                                                                                                                                                                                                                                                                                                                                                   /** mga id ng select
    #mask_slash
    #mask_ip
    #num_clients
    #bit_mask
*/

$(document).ready(function(){
    $("#mask_slash").change(function(){
        var pipiliin = $(this).prop('selectedIndex');
        $("#mask_ip").prop('selectedIndex', pipiliin);
        $("#num_clients").prop('selectedIndex', pipiliin);
        $("#bit_mask").prop('selectedIndex', pipiliin);
    });
});

$(document).ready(function(){
    $("#mask_ip").change(function(){
        var pipiliin = $(this).prop('selectedIndex');
        $("#mask_slash").prop('selectedIndex', pipiliin);
        $("#num_clients").prop('selectedIndex', pipiliin);
        $("#bit_mask").prop('selectedIndex', pipiliin);
    });
});

$(document).ready(function(){
    $("#num_clients").change(function(){
        var pipiliin = $(this).prop('selectedIndex');
        $("#mask_ip").prop('selectedIndex', pipiliin);
        $("#mask_slash").prop('selectedIndex', pipiliin);
        $("#bit_mask").prop('selectedIndex', pipiliin);
    });
});

$(document).ready(function(){
    $("#bit_mask").change(function(){
        var pipiliin = $(this).prop('selectedIndex');
        $("#mask_ip").prop('selectedIndex', pipiliin);
        $("#mask_slash").prop('selectedIndex', pipiliin);
        $("#num_clients").prop('selectedIndex', pipiliin);
    });
});
