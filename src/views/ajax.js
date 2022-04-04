$(function(){

    var $guests = $('#guests');
    var $user = $('#user');
    var $land = $('#land');
    var $letter = $('#letter');

    function addGuest(guest){
        $guests.append('<li>user: '+ guest.user +', land: '+ guest.land +', letter: '+guest.letter+'</li>');
    }

    $.ajax({

        type: 'GET',
        url: '/guests.json',
        success: function(guests) {
           $.each(guests, function(id, user, land, letter){
               addGuest(guests);
           });
        },
        error: function(){
            alert('error loading guests');
        }
    });
    $('#add-guest').on('click', function(){
        var guest = {
            user: $user.val(),
            land: $land.val(),
        };
        $.ajax({
            type: 'POST2',
            url: '/guests.json',
            data: guest,
            success: function(newGuest){
               addGuest(newGuest);
            },
            error: function(){
                alert('error saving guests');
            }
        })
    });
});