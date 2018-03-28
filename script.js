(function(){
    "use strict";
    
    function createTask(target) {
        var modal_box = document.getElementsByClassName("modal_box")[0];
            modal_box.style.display = "block";
            target.setAttribute("disabled","true");
    }
    function closeTask() {
        var modal_box = document.getElementsByClassName("modal_box")[0],
           create_task = document.getElementById("create_task");
            modal_box.style.display = "none";
            create_task.removeAttribute("disabled");
    }

    function handleClick(e) {
        e.preventDefault();
        var targetEl = e.target.id || e.target.className;
           if(targetEl === "create_task"){
               createTask(e.target);
           } else if(targetEl === "close_btn") {
               closeTask();
           }
    }
     function eventListeners() {
            document.addEventListener("click",handleClick); 
     }

     eventListeners();


})();