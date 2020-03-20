var listOfMovie = [];


$(document).ready(function()
{
    $('button').click(function()
    {
        $('#list ul').empty();
        listOfMovie = [];
        $.get('./playlist.txt', function(data)
        {
            $.each(splitFile(data),function(index, element)
            {
                $('#list ul').append(htmlDivElement(element));
            });
        });       
    });        
});

    // var i = index;
    // var n = name;
    // var d = duree;

function htmlDivElement(element)
{
    return '<div class ="divFilm">'+element+'</div>';
}
 
function splitFile(data)
{
    return data.split('\n');
    return data.split(',');
}

function createMovie(i, n, d){

  var movie = { i:index,
                name:titreFilm,
                duree:tempsFilm};

  return movie;
}


function addMovie(m){

  listOfMovie.push(m);

}