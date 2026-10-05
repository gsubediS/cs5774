$(document).ready(function(){

//Simulated Search Behaviour
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get("search-query");

    if (searchQuery && searchQuery.toLowerCase() == "class"){

    $('#search-results').html(
    '<p>1 result found</p>' +
    '<div class="search-result-item">'+
    '<h3><a href="classes.html">Classes</a></h3>'+
    '<p>View and manage your classes.</p>'+
    '</div>'
        );
    } else{
    $('#search-results').text("No results found for '" + searchQuery +"'.");
    }


//Favourite a class
    $('#class-list').on("click",".favourite-btn", function(){

    const eachClassElement = $(this).closest("li");

    if ($(this).text() === ("☆")){

    $(this).text("★");
    $('#class-list').prepend(eachClassElement);
    $(this).after("<p class='fav-alert-text'>Added to Favourites!</p>");


    setTimeout(function(){
        $('.fav-alert-text').remove();
    },800);


    } else{

    $(this).text("☆");
    $(this).after("<p class='unfav-alert-text'>Removed from Favourites!</p>");
    $('#class-list').append(eachClassElement);

    setTimeout(function(){
        $('.unfav-alert-text').remove()
    },800);
    }
    });



//Add a notice
    const originalNotices = $('#notices').html();
    const addNoticeForm =
    "<h2>Notices</h2>"+
    "<form class='add-notice-form form-container'>"+
    "<div class='form-section'>"+
    "<label for='notice-content'>Notice Text </label>"+
    "<textarea id='notice-content' name='notice-content' required></textarea>"+
    "</div>"+
    "<div class='form-btn-container'>"+
    "<button type='submit' class='btn' id='post-notice-btn'>Post Notice</button>"+
    "<button type='button' id='cancel-notice-btn' class='btn cancel-btn'>Cancel</button>"+
    "</div>"+
    "</form>";

    $('#notices').on("click", "#add-notice-btn", function(){
        $('#notices').html(addNoticeForm);

    });

    $('#notices').on("click", "#cancel-notice-btn", function(){
        $('#notices').html(originalNotices);
    });

     $('#notices').on("submit", ".add-notice-form", function(event){
        event.preventDefault();

        const noticeContent =  $('#notice-content').val();
        $('#notices').html(originalNotices);
        $('#notices ul').prepend("<li>"+noticeContent+"</li>");


    });


 });