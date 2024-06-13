document.addEventListener("DOMContentLoaded", function() {
  
    var t1 = document.querySelector(`.t1`);
    var t2 = document.querySelector(`.t2`);
    var t3 = document.querySelector(`.t3`);
    var t4 = document.querySelector(`.t4`);
    var t5 = document.querySelector(`.t5`);
    var t6 = document.querySelector(`.t6`);
    var t7 = document.querySelector(`.t7`);
    var t8 = document.querySelector(`.t8`);

    var trial = document.querySelector(".trial");

    t1.addEventListener("mouseenter", function() {
      trial.classList.add(`bg-by-t1`);
    });

    t1.addEventListener("mouseleave", function() {
        trial.classList.remove(`bg-by-t1`);
    });

    t2.addEventListener("mouseenter", function() {
        trial.classList.add(`bg-by-t2`);
      });
  
      t2.addEventListener("mouseleave", function() {
          trial.classList.remove(`bg-by-t2`);
      });

      t3.addEventListener("mouseenter", function() {
        trial.classList.add(`bg-by-t3`);
      });
  
      t3.addEventListener("mouseleave", function() {
          trial.classList.remove(`bg-by-t3`);
      });  

      t4.addEventListener("mouseenter", function() {
        trial.classList.add(`bg-by-t4`);
      });
  
      t4.addEventListener("mouseleave", function() {    
          trial.classList.remove(`bg-by-t4`);
      });

      t5.addEventListener("mouseenter", function() {    
        trial.classList.add(`bg-by-t5`); 
      });
  
      t5.addEventListener("mouseleave", function() {
          trial.classList.remove(`bg-by-t5`);
      });
      t6.addEventListener("mouseenter", function() {
        trial.classList.add(`bg-by-t6`);
      });
  
      t6.addEventListener("mouseleave", function() {
          trial.classList.remove(`bg-by-t6`);
      });  

      t7.addEventListener("mouseenter", function() {
        trial.classList.add(`bg-by-t7`);
      });
  
      t7.addEventListener("mouseleave", function() {    
          trial.classList.remove(`bg-by-t7`);
      });

      t8.addEventListener("mouseenter", function() {    
        trial.classList.add(`bg-by-t8`); 
      });
  
      t8.addEventListener("mouseleave", function() {
          trial.classList.remove(`bg-by-t8`);
      });

      
});
