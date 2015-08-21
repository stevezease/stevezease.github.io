<script>

  (function(){
    $(window).scroll(function() {
    
        // check if window scroll for more than 430px. May vary
        // as per the height of your main banner.
        
        if($(this).scrollTop() > 430) { 
            $('.navbar').addClass('opaque'); // adding the opaque class
        } else {
            $('.navbar').removeClass('opaque'); // removing the opaque class
        }
    });
  })();
    
</script>
