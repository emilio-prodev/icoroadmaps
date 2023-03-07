$( document ).ready(function() {
    // Set the table height on page load
    $('.vuebar-element').css('height', $('.tabs-container').height() - 57 + 'px');
    $('.main-box-calendar-content .vuebar-element').css('height', $('.tabs-container').height() - 87 + 'px');
    $('.the-event .vuebar-element').css('height', $('.tabs-container').height() - 252 + 'px');

    $('#upcomming-table-container > .table').css('width', $('#upcomming-table-container').width() + 20 + 'px !important;');

    // Set the setings height on page load
    $('.back > div').css('height', $('.vue-tabs').height() - 15 + 'px');

    // Set the search box width on page load
    $('#search').css('width', $('.search-container').width() - $('.calendar-buttons-container').width() + 'px');

    // Merge simbol and name th on page load
    $('.main-calendar-table-container  th:nth-child(3)').attr('colspan', 2);
    $('.main-calendar-table-container  th:nth-child(2)').remove();

    // Replace "Fav" with star
    $('.main-calendar-table-container  th:nth-child(1)').html('<i class="fa fa-star upcomming-star-title" aria-hidden="true"></i>');
    $('.main-calendar-table-container  th:nth-child(3)').html('<i class="fa fa-star upcomming-star-title" aria-hidden="true"></i>');
    $('.roadmaps-calendar-table-container  th:nth-child(1)').html('<i class="fa fa-star roadmaps-star-title" aria-hidden="true"></i>');
    $('.events-calendar-table-container  th:nth-child(1)').html('<i class="fa fa-star evetns-star-title" aria-hidden="true"></i>');

    // Change 'Coin_Name' to 'Coin Name' on page load
    var $strCalendar = $('.main-calendar-table-container  th:nth-child(2)').html();
    var $resCalendar = $strCalendar.split('_');
    $('.main-calendar-table-container  th:nth-child(2)').html($resCalendar[0] + ' ' + $resCalendar[1]);

    // Change 'Event_Title ' to 'Event Title ' on page load
    var $strRoadmaps = $('.roadmaps-calendar-table-container  th:nth-child(2)').html();
    var $resRoadmaps = $strRoadmaps.split('_');
    $('.roadmaps-calendar-table-container  th:nth-child(2)').html($resRoadmaps[0] + ' ' + $resRoadmaps[1]);

    // Set the td width
    $('.main-calendar-table-container  td:nth-child(1)').attr('width', 25);
    $('.main-calendar-table-container  td:nth-child(2)').attr('width', 26);
    $('.main-calendar-table-container  td:nth-child(3)').attr('width', 60);
    $('.main-calendar-table-container  td:nth-child(4)').attr('width', 25);
    $('.main-calendar-table-container  td:nth-child(6)').attr('width', 70);
    $('.main-calendar-table-container  td:nth-child(7)').attr('width', 70);

    // Set the 'Fav', 'Event' & 'Date' td width for main content tables
    $('.roadmaps-calendar-table-container  th:nth-child(1)').attr('width', 25);
    $('.roadmaps-calendar-table-container  th:nth-child(2)').attr('width', 70);
    $('.roadmaps-calendar-table-container  th:nth-child(4)').attr('width', 70);

    // Flip Settings
    var $settingsTitleContainerTransparent = $('.settings-title-container-transparent').hide();
    var $flipper = $('.flipper');
    var $search = $('.search');
    var $mainFlippContainerButton = $('#main-flipp-container-button');
    var $showFavBtt = $('.fa-star-v');

    $mainFlippContainerButton.on('click', function() {
        if($flipper.hasClass('flipped')) {
            $flipper.removeClass('flipped');
            $settingsTitleContainerTransparent.removeClass('settings-title-container');
            $mainFlippContainerButton.html('<i title="Settings" alt="Settings" class="fa fa-cog fa-buttons" aria-hidden="true"></i>');
            
            setTimeout (function() {
                $settingsTitleContainerTransparent.hide();
                $search
                    .show()
                    .animate({opacity: '100'});

                $showFavBtt.animate({
                    opacity: '100', 
                    transition: '0.5s'
                });  
            }, 500);
        }
        else {
            $flipper.addClass('flipped');
            $search.animate({opacity: '0'});
            $showFavBtt.animate({
                opacity: '0', 
                transition: '0.2s'
            });
            $mainFlippContainerButton.html('<i title="Exit Settings" alt="Exit Settings" class="fa fa-cog fa-buttons star-selected" aria-hidden="true"></i>');
            
            setTimeout (function() {
                $search.hide();
                $settingsTitleContainerTransparent
                    .show()
                    .addClass('settings-title-container');
            }, 500);
        }
    });
    // END Flip Settings


    // USERS Flip Settings
    var $usersFlipper = $('.users-flipper');
    var $usersFlippContainerButton = $('#users-flipp-container-button');
    var $usersFlippContainerButtonR = $('#users-flipp-container-button-r');

    $usersFlippContainerButton.on('click', function() {
        if($usersFlipper.hasClass('flipped')) {
            $usersFlipper.removeClass('flipped');
        }
        else {
            $usersFlipper.addClass('flipped');
        }
    });

    $usersFlippContainerButtonR.on('click', function() {
        if($usersFlipper.hasClass('flipped')) {
            $usersFlipper.removeClass('flipped');
        }
        else {
            $usersFlipper.addClass('flipped');
        }
    });
    // END USERS Flip Settings


    // Profile/Edit Profile Flip Settings
    var $profileFlipper = $('.profile-flipper');
    var $profileFlippContainerButton = $('#profile-flipp-container-button');
    var $profileFlippContainerButtonR = $('#profile-flipp-container-button-r');

    $profileFlippContainerButton.on('click', function() {
        if($profileFlipper.hasClass('flipped')) {
            $profileFlipper.removeClass('flipped');
        }
        else {
            $profileFlipper.addClass('flipped');
        }
    });

    $profileFlippContainerButtonR.on('click', function() {
        if($profileFlipper.hasClass('flipped')) {
            $profileFlipper.removeClass('flipped');
        }
        else {
            $profileFlipper.addClass('flipped');
        }
    });
    // END Profile/Edit Profile Flip Settings
    

    // Handle Favorites (star)
    var $star = $('td > i.fa.fa-star');
    var $starTitle = $('th > i.fa.fa-star');
    var $starUpcomming = $('.upcomming-star');
    var $starHistory = $('.history-star');
    var $starRoadmaps = $('.roadmaps-star');
    var $starTitleUpcomming = $('.upcomming-star-title');
    var $starTitleHistory = $('.history-star-title');
    var $starTitleRoadmaps = $('.roadmaps-star-title');

    $star.on('click', function() {
        if($(this).hasClass('star-selected')) {
            $(this)
                .removeClass('star-selected')
                .attr({
                    alt: 'Add To Favorites', 
                    title: 'Add To Favorites'
                });

            if ($(this).hasClass('upcomming-star')) {
                $starTitleUpcomming.removeClass('star-selected');
            }
            else if ($(this).hasClass('history-star')) {
                $starTitleHistory.removeClass('star-selected');
            }
            else if ($(this).hasClass('roadmaps-star')) {
                $starTitleRoadmaps.removeClass('star-selected');
            }
            else {

            }
        }
        else {
            $(this)
                .addClass('star-selected')
                .attr({
                    alt: 'Remove From Favorites', 
                    title: 'Remove From Favorites'
                });
        }
    });

    $showFavBtt.on('click', function() {
        var $starSelected = $('.star-selected');

        if($showFavBtt.hasClass('star-selected')) {
            $showFavBtt
                .removeClass('star-selected')
                .attr({
                    alt: 'Show Only Favorites', 
                    title: 'Show Only Favorites'
                });

            $starUpcomming.parent().parent().show();
            $starHistory.parent().parent().show();
            $starSelected.parent().parent().show();
        }
        else {
            $showFavBtt
                .addClass('star-selected')
                .attr({
                    alt: 'Show All', 
                    title: 'Show All'
                });

            $starUpcomming.parent().parent().hide();
            $starHistory.parent().parent().hide();
            $starSelected.parent().parent().show();
        }
    });
    // END Handle Favorites (star)

    // $('#upcomming-table-container > .table').css('width', $('#upcomming-table-container').width() + 200 + 'px !important;');
});


$( window ).resize(function() {
    // Set the table height on page resize
    $('.vuebar-element').css('height', $('.tabs-container').height() - 57 + 'px');
    $('.main-box-calendar-content .vuebar-element').css('height', $('.tabs-container').height() - 87 + 'px');
    $('.the-event .vuebar-element').css('height', $('.tabs-container').height() - 252 + 'px');

    // Set the setings height on page resize
    $('.back > div').css('height', $('.vue-tabs').height() - 15 + 'px');

    // Set the search box width on page resize
    $('#search').css('width', $('.search-container').width() - $('.calendar-buttons-container').width() + 'px');

    // $('#upcomming-table-container > .table').css('width', $('#upcomming-table-container').width() + 200 + 'px !important;');
});
