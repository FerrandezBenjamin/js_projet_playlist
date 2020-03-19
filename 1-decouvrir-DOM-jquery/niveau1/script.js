$(document).ready(function()
{
    $('button').click(function()
    {
         $filmList = $.get('./playlist.txt', function(data)
         {
             var datasplited = (data.split('\n'));
             $.each(datasplited, function(index, element)
             {
                 alert( index + ":" + element);
                   console.log(datasplited);
             });
        });
                
    });
});


// $filmList = $.get('./playlist.txt', function(data)
// {
//     var datasplited = (data.split('\n'));
//     $(document).ready(function()
//     {
//         $('button').click(function()
//         {
//                 $.each(datasplited),function(index, value)
//                 {
//                     alert( index + ":" + value);
//                     console.log(datasplited);
//                 };
//         });
//     });
// });




// $filmList = $.get('./playlist.txt', function(data)
// {
//     var datasplited = (data.split('\n'));
//     $(document).ready(function()
//     {
//     $('button').click(function()
//         {
//             console.log(datasplited);
//         });
    
//     });
// });