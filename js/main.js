//statment chaning syntax 

(() => {
    //make an AJAX request (fetch) using the Fetch API (look for it)
    fetch('./data/classData.json')
      //parce the strigified object to make it something that js can read
      //res is short for response
      .then(res => res.json())
      .then(data => {
        console.log(data);
        //handle data
        //here is where you would call the function that puts the pieces on the page
        populateCourseBox(data)
      })
      //catch will catch an error if there is one 
      .catch((err) => {
        handleFetchError()
      })
  
    function handleFetchError() {
      courseName = document.getElementById("courseName")
      profName = document.getElementById("profName")
      courseTiming = document.getElementById("courseTiming")
      courseName.innerHTML = "Fetch Failed"
      profName.innerHTML = "Fetch Failed"
      courseTiming.innerHTML = "Fetch Failed"
    }
  
    function populateCourseBox(data) {
      courseName = document.getElementById("courseName")
      profName = document.getElementById("profName")
      courseTiming = document.getElementById("courseTiming")
      courseName.innerHTML = data["coursename"] + "-" + data["coursecode"]
      profName.innerHTML = "Professor - " + data["profname"]
      //courseTiming.innerHTML = "<li><i class="fa fa-clock-o" aria-hidden="true"></i>" + data["classtime"][0] + "</li> <li><i class="fa fa-clock-o" aria-hidden="true"></i>" + data["classtime"][1] + "</li>"
    }
  
  })();