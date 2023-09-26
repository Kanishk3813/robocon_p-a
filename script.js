$(document).ready(function () {
    function isElementInViewport(elem) {
      var rect = elem.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function handleAnimation() {
      $('.tl-container').each(function () {
        if (isElementInViewport(this)) {
          $(this).addClass('slide-in');
        }
      });
    }
    handleAnimation(); 
    $(window).on('scroll', handleAnimation);
  });
  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.card');
hiddenElements.forEach((el) => observer.observe(el));
