

const allStars = document.querySelectorAll('.star');
// console.log(allStars)

allStars.forEach( (star, index ) => { // arguments to get each stars and able to click them individually ; Get the position of each star
  star.onclick = function () {
    // console.log(star);
    // console.log(index + 1);
      let starLevel = index + 1;

      allStars.forEach( (star, second) => {
        if (starLevel >= second + 1) 
        {
          star.innerHTML = '<i class="fas fa-star" style="color: orange;"></i>';
        } else {
          star.innerHTML = '<i class="fas fa-star"></i>';
        }
      })
  }
});