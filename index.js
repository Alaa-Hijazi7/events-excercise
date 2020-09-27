function firstfun(){
    let firstbtn1 = document.getElementById("firstbtn");
    firstbtn1.classList.add("active");
    let removeclass1 = document.getElementById("secondbtn");
    let removeclass2 = document.getElementById("thirdbtn");
    let removeclass3 = document.getElementById("fourthbtn");
    removeclass1.classList.remove("active");
    removeclass2.classList.remove("active");
    removeclass3.classList.remove("active");

    let content1 = document.getElementById("content-1");
    content1.classList.add("active");
    let removecontent1 = document.getElementById("content-2");
    let removecontent2 = document.getElementById("content-3");
    let removecontent3 = document.getElementById("content-4");
    removecontent1.classList.remove("active");
    removecontent2.classList.remove("active");
    removecontent3.classList.remove("active");
}
function secondfun(){
    let firstbtn1 = document.getElementById("secondbtn");
    firstbtn1.classList.add("active");
    let removeclass1 = document.getElementById("firstbtn");
    let removeclass2 = document.getElementById("thirdbtn");
    let removeclass3 = document.getElementById("fourthbtn");
    removeclass1.classList.remove("active");
    removeclass2.classList.remove("active");
    removeclass3.classList.remove("active");

    let content2 = document.getElementById("content-2");
    content2.classList.add("active");
    let removecontent1 = document.getElementById("content-1");
    let removecontent2 = document.getElementById("content-3");
    let removecontent3 = document.getElementById("content-4");
    removecontent1.classList.remove("active");
    removecontent2.classList.remove("active");
    removecontent3.classList.remove("active");
}
function thirdfun(){
    let firstbtn1 = document.getElementById("thirdbtn");
    firstbtn1.classList.add("active");
    let removeclass1 = document.getElementById("firstbtn");
    let removeclass2 = document.getElementById("secondbtn");
    let removeclass3 = document.getElementById("fourthbtn");
    removeclass1.classList.remove("active");
    removeclass2.classList.remove("active");
    removeclass3.classList.remove("active");

    let content3 = document.getElementById("content-3");
    content3.classList.add("active");
    let removecontent1 = document.getElementById("content-2");
    let removecontent2 = document.getElementById("content-1");
    let removecontent3 = document.getElementById("content-4");
    removecontent1.classList.remove("active");
    removecontent2.classList.remove("active");
    removecontent3.classList.remove("active");
}
function fourthfun(){
    let firstbtn1 = document.getElementById("fourthbtn");
    firstbtn1.classList.add("active");
    let removeclass1 = document.getElementById("firstbtn");
    let removeclass2 = document.getElementById("secondbtn");
    let removeclass3 = document.getElementById("thirdbtn");
    removeclass1.classList.remove("active");
    removeclass2.classList.remove("active");
    removeclass3.classList.remove("active");

    let content4 = document.getElementById("content-4");
    content4.classList.add("active");
    let removecontent1 = document.getElementById("content-2");
    let removecontent2 = document.getElementById("content-3");
    let removecontent3 = document.getElementById("content-1");
    removecontent1.classList.remove("active");
    removecontent2.classList.remove("active");
    removecontent3.classList.remove("active");
}


  window.addEventListener("keydown", (event) => {
      if(event.key === "1") {
        event.preventDefault();
        let firstbtn1 = document.getElementById("firstbtn");
        firstbtn1.classList.add("active");
        let removeclass1 = document.getElementById("secondbtn");
        let removeclass2 = document.getElementById("thirdbtn");
        let removeclass3 = document.getElementById("fourthbtn");
        removeclass1.classList.remove("active");
        removeclass2.classList.remove("active");
        removeclass3.classList.remove("active");
    
        let content1 = document.getElementById("content-1");
        content1.classList.add("active");
        let removecontent1 = document.getElementById("content-2");
        let removecontent2 = document.getElementById("content-3");
        let removecontent3 = document.getElementById("content-4");
        removecontent1.classList.remove("active");
        removecontent2.classList.remove("active");
        removecontent3.classList.remove("active");
      }
      if(event.key === "2") {
        event.preventDefault();
        let firstbtn1 = document.getElementById("secondbtn");
        firstbtn1.classList.add("active");
        let removeclass1 = document.getElementById("firstbtn");
        let removeclass2 = document.getElementById("thirdbtn");
        let removeclass3 = document.getElementById("fourthbtn");
        removeclass1.classList.remove("active");
        removeclass2.classList.remove("active");
        removeclass3.classList.remove("active");
    
        let content2 = document.getElementById("content-2");
        content2.classList.add("active");
        let removecontent1 = document.getElementById("content-1");
        let removecontent2 = document.getElementById("content-3");
        let removecontent3 = document.getElementById("content-4");
        removecontent1.classList.remove("active");
        removecontent2.classList.remove("active");
        removecontent3.classList.remove("active");
      }
      if(event.key === "3") {
        event.preventDefault();
        let firstbtn1 = document.getElementById("thirdbtn");
        firstbtn1.classList.add("active");
        let removeclass1 = document.getElementById("firstbtn");
        let removeclass2 = document.getElementById("secondbtn");
        let removeclass3 = document.getElementById("fourthbtn");
        removeclass1.classList.remove("active");
        removeclass2.classList.remove("active");
        removeclass3.classList.remove("active");
    
        let content3 = document.getElementById("content-3");
        content3.classList.add("active");
        let removecontent1 = document.getElementById("content-2");
        let removecontent2 = document.getElementById("content-1");
        let removecontent3 = document.getElementById("content-4");
        removecontent1.classList.remove("active");
        removecontent2.classList.remove("active");
        removecontent3.classList.remove("active");
        
      }
      if(event.key === "4") {
        event.preventDefault();
        let firstbtn1 = document.getElementById("fourthbtn");
        firstbtn1.classList.add("active");
        let removeclass1 = document.getElementById("firstbtn");
        let removeclass2 = document.getElementById("secondbtn");
        let removeclass3 = document.getElementById("thirdbtn");
        removeclass1.classList.remove("active");
        removeclass2.classList.remove("active");
        removeclass3.classList.remove("active");
    
        let content4 = document.getElementById("content-4");
        content4.classList.add("active");
        let removecontent1 = document.getElementById("content-2");
        let removecontent2 = document.getElementById("content-3");
        let removecontent3 = document.getElementById("content-1");
        removecontent1.classList.remove("active");
        removecontent2.classList.remove("active");
        removecontent3.classList.remove("active");
      }
  })
  let count = 0;
  let displayCount = document.getElementById("displayCount");
  let countButton = document.getElementById("secondbtn");
  countButton.onclick = function(){
      count++;
      displayCount.textContent = count;
    }
      window.addEventListener("keydown", (event) => {
        if(event.key === "2") {
            count++;
        displayCount.textContent = count;
        }
      })
      // done