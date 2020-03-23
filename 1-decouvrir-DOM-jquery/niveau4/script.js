var listOfMovie = [];
// var boutonPlay;

$(document).ready(function()
{
    $('button'+ '#refresh').click(function()
    {
        $('#list ul').empty();
        listOfMovie = [];
        $.get('./playlist.txt', function(data)
        {
            $.each(splitFile(data),function(index, element)
            {
                $('#list ul').append(htmlDivElement(element));
                $('#film'+ element[0]).click(function()
                {
                    if (btn.value === 'Demarrer')
                        {
                        btn.value = 'Stop';
                        } 
                    else 
                        {
                        btn.value = 'Demarrer';
                        }
                    
                });
            });
        });       
    });      
});

function htmlDivElement(element)
{

     var monId = 'film'+element[0];
     var global = '<div class ="divFilm">'+
     '<div class ="buttonPlay"><input type ="button" id ="'+monId+'" value ="Demarrer"></div>' + 
     '<div class ="divIndex">'+element[0]+'</div>' + 
     '<div class ="divTitle">'+element[1]+'</div></div>';
     return global; 
}
 
function splitFile(data)
{
    resultat = [];
    var exemple = data.split('\n');
        exemple.forEach(element =>
            {
                var tableauLigne = element.split(',');
                 resultat.push(tableauLigne);
             } );
    console.log(resultat);
    return resultat;
    
}

// function createMovie(i, n, d){

//   var movie = { i:index,
//                 name:titreFilm,
//                 duree:tempsFilm};

//   return movie;
// }


// function addMovie(m){

//   listOfMovie.push(m);

// }