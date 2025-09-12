

function flip(targetID) {
    jQuery("#"+targetID).toggle();
}

function toggleAll(targetID) {
    jQuery("#"+targetID+" .hide").toggle("slow");
}
function toggle(targetID) {
    jQuery("#"+targetID+" .toggle").toggle("slow");
}

function toggleSpoilers() {
    jQuery(".spoiler").toggleClass("reveal");
}



function showModalDo(char, subdir) {
    jQuery('#stroke').attr('src','/images/' + subdir + '/' +char+'.gif');

    var fmt = '.mp3';

    jQuery('#clip').attr('src','/audio/'+char+fmt).load();
    jQuery('#basic-modal-content').modal({overlayClose:true});
}


function showModalK(char) {
     showModalDo(char, 'katakana');
}


function showModal(char) {
        showModalDo(char, 'hiragana');
}

function playClip(char) {
    jQuery('#clip').attr('src','/audio/'+char+'.mp3').load();

    var clip = document.getElementById("clip");
    clip.play()
}

function playclip_inline(char) {
    jQuery('#clip_inline').attr('src','/audio/'+char+'.mp3').load();

    var clip_inline = document.getElementById("clip_inline");
    clip_inline.play();
}


jQuery(document).ready(function() {
    jQuery('.playIcon').find('img').hover(
        function () {
            if (jQuery(this).attr('src') == '/images/play.png') {
                jQuery(this).attr('src', '/images/play_hover.png');
            }
        },
        function () {
            if (jQuery(this).attr('src') == '/images/play_hover.png') {
                jQuery(this).attr('src', '/images/play.png');
            }
        }
    );

    jQuery('.playIcon').click(
        function () {
            jQuery(this).find('img').attr('src','/images/play_pressed.png').addClass('playing');
            playclip_inline(jQuery(this).attr('href'));
            return false;
        }
    );

        if (jQuery('#clip_inline').get(0)) {
    jQuery('#clip_inline').get(0).addEventListener("ended", function() {
        jQuery('.playing').attr('src','/images/play.png').removeClass('playing'); }, true);
        }

});
