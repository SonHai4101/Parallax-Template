        // Animation header
        window.onscroll = function() {myFunction()};
        function myFunction() {
            var navbar =  document.getElementById("myNavbar");
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                navbar.className = "navbar" + " navbar-animate";
            } else {
                navbar.className = navbar.className.replace(" navbar-animate", "");
            }
        }


        // Đóng mở menu Mobile
        var mobileNav = document.getElementById('mobile-nav');
        var mobileMenu = document.getElementById('mobile-menu');

        mobileMenu.onclick = function() {
            var isClosed = mobileNav.style.display === 'none'
            if (isClosed) {
                mobileNav.style.display = 'block';
            } else {
                mobileNav.style.display = 'none';
            }
        }

        // Tự động đóng khi chọn menu
        var menuItems = document.querySelectorAll('#mobile-nav a[href*="#"]');
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];

            menuItem.onclick = function(event) {
                mobileNav.style.display = 'none';
            }
        }


        // Bật tắt modal
        const myWorks = document.querySelectorAll('.js-mywork')
        const modal = document.querySelector('.js-modal');
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close')
        
        // Open
        function onClick(element) {
            document.getElementById('img01').src = element.src;
            document.getElementById('modal01').style.display = 'flex';
            var captionText = document.getElementById('caption');
            captionText.innerHTML = element.alt;
          }
        
        // Close
        function closeMywork() {
            modal.style.display = 'none' //classList.remove('open')
        }
        modalClose.addEventListener('click', closeMywork)

        modal.addEventListener('click', closeMywork)
        modalContainer.addEventListener('click', function(event) {
            event.stopPropagation()
        })
