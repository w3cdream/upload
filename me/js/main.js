$("#fullpage").fullpage({
            // navigation: true,
            anchors:['home', 'about', 'skills', 'experience', 'works'],
            // scrollOverflow: true,
            // loopBottom: true,
            // css3: false,
            onLeave: function(a, b, c){
                if(b == 5){
                    $('.go').addClass('hidden');
                }else{
                    $('.go').removeClass('hidden');
                }
            }

        });
        $(".go").click(function(){
            if(window.location.hash == '#home' || window.location.hash == '')
                $.fn.fullpage.moveTo(2, 0);
            else if(window.location.hash == '#about')
                $.fn.fullpage.moveTo(3, 0);
            else if(window.location.hash == '#skills')
                $.fn.fullpage.moveTo(4, 0);
            else if(window.location.hash == '#experience')
                $.fn.fullpage.moveTo(5, 0);
        })
        $('a').tooltip();