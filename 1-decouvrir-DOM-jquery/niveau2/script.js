var listOfMovie = [];


$(document).ready(function()
{
    $('button').click(function()
    {
        $('#list ul').empty();
        listOfMovie = [];
        $.get('./playlist.txt', function(data)
        {
            $.each(splitFile(data),function(_index, element)
            {
                $('#list ul').append(htmlDivElement(element));
            });
        });       
    });        
});
  


function htmlDivElement(element)
{
     return '<div class ="divFilm">'+element+'</div>';
}
 
function splitFile(data)
{
     return data.split('\n');
}






