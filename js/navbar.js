        const icons = document.querySelectorAll('.icon');
        const menubar = document.querySelectorAll('.menu-bar');
        icons.forEach(icon => {
            icon.addEventListener('click', (event) => {
                icon.classList.toggle("open");
                menubar.forEach(bar => {
                    bar.classList.toggle("open");
                });

            });
        });

        const smthumbnails = document.querySelectorAll('.more-thumbnail');
        const smbuttons = document.querySelectorAll('.see-more-button');
        smbuttons.forEach(smbutton => {
            smbutton.addEventListener('click', (event) => {
                smbutton.classList.toggle("open");
                smthumbnails.forEach(thumbnail => {
                    thumbnail.classList.toggle("open");
                });
            });
        });

        $(document).ready(function() {

            $('.menu-item').click(function() {
                $('.icon').toggleClass("open");
                $('.menu-bar').toggleClass("open");
            });

            //for smooth page scroll
            $(function() {
                $('a[href*="#"]:not([href="#"])').click(function() {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
                            '') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +
                            ']');
                        if (target.length) {
                            $('html, body').animate({
                                scrollTop: target.offset().top
                            }, 250);
                            return false;
                        }
                    }
                });
            });

            $('.describe').hover(function(event) {
                var titleText = $(this).attr('title');
                $(this)
                    .data('tipText', titleText)
                    .removeAttr('title');

                $('<p class="tooltip"></p>')
                    .text(titleText)
                    .appendTo('body')
                    .css('top', (event.pageY - 5) + 'px')
                    .css('left', (event.pageX + 20) + 'px')
                    .fadeIn('slow');
            }, function() {
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();

            }).mousemove(function(event) {
                $('.tooltip')
                    .css('top', (event.pageY - 5) + 'px')
                    .css('left', (event.pageX + 20) + 'px');
            });
        });