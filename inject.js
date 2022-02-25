
var task;

function clickSkip()
{

    $("button").each(function()
    {

        if ($(this).children().is("span"))
        {

            $(this).children().click();
            clearInterval(task);
            return;

        }

    });

}

$(window).on("load", function()
{

    task = setInterval(clickSkip, 500);

});