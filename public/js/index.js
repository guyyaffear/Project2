// The API object contains methods for each kind of request we'll make
var API = {
  createUser: function(newUser) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/user",
      data: JSON.stringify(newUser)
    });
  },
  getData: function() {
    return $.ajax({
      url: "/api/stops",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};
$(document).ready(function() {
  API.getData().then(function(data) {
    var $data = data.map(function(stop) {
      var $option = $("<a class=dropdown-item>").text(stop.stops);
      return $option;
    });
    $("#stopbox").append($data);
    $("#endbox").append($data);
  });
});

// refreshExamples gets new examples from the db and repopulates the list
// $("#dropdownMenuButton").on("click", function(event) {
//   console.log("I AM IN THE BUTTON");
//   event.preventDefault();
//     // $exampleList.empty(); //select div and empty it
//     $("#stopbox").append($data);
//     //append option array to select div
//   });
// });
