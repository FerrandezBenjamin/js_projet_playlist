$filmList = $.get('./playlist.txt', function(data)
{
    var datasplited = (data.split('\n'));
    $(document).ready(function()
    {
        $('button').click(function()
        {
                $("li").each(function()
                {
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
//     $('button').click(function()
//         {
//             console.log(datasplited);
//         });
    
//     });
// });