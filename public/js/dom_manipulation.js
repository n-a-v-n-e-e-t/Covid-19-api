
// const nvbr = document.querySelectorAll('nav .navbar-nav a').forEach(item=>{
//     item.addEventListener('click',(e)=>{
//         console.log(e)
//         e.target.classList.toggle('active');
//     });
// })

$(".nav li").on("click", function() {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });