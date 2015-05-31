/**
 * Created by ignacio on 30/05/15.
 */


$('#eliminar').on('click', 'td button.id', deleteUser);

// Delete User
function deleteUser(event) {
    event.preventDefault();
    // Pop up a confirmation dialog
    var confirmation = confirm('¿Realmente desea eliminar el usuario seleccionado?');
    // Check and make sure the user confirmed
    if (confirmation === true) {
        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/eliminar/' + $(this).attr('rel')
        }).done(function( response ) {
            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }
            // Update the table
            populateTable();
        });
    }
    else {
        // If they said no to the confirm, do nothing
        return false;

    }
};
