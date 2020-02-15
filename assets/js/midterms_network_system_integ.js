/*                                                                                                                                                                                                                                                                                                                                                                                                   /** mga id ng select
    #mask_slash
    #mask_ip
    #number_of_hosts
*/

$(document).ready(function(){
    $("#mask_slash").change(function(){
        var pipiliin = $(this).prop('selectedIndex');
        $("#mask_ip").prop('selectedIndex', pipiliin);
        $("#num_clients").prop('selectedIndex', pipiliin);
    });
});
$(document).ready(function(){
    $("#mask_ip").change(function(){
        var pipiliin = $(this).prop('selectedIndex');
        $("#mask_slash").prop('selectedIndex', pipiliin);
        $("#num_clients").prop('selectedIndex', pipiliin);
    });
});
$(document).ready(function(){
    $("#num_clients").change(function(){
        var pipiliin = $(this).prop('selectedIndex');
        $("#mask_ip").prop('selectedIndex', pipiliin);
        $("#mask_slash").prop('selectedIndex', pipiliin);
    });
});
