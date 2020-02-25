$(document).ready(function() {
  // Get references to page elements
  var $exampleText = $("#example-text");
  var $exampleDescription = $("#example-description");
  var $submitBtn = $("#submit");
  var $exampleList = $("#example-list");
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
    // $(function () {
    //   $("#Startbtn").on("submit", function (event) {
    //     event.preventDefault();
    //     var Qtrain = {
    //       train: $("#stauiontrain")
    //         .val()
    //         .trim(),
    //     };
    //     $.ajax("/api/user", {
    //       type: "POST",
    //       data: Qtrain
    //     }).then(function () {
    //       console.log("Added train");
    //       location.reload();
    //     });
    //   })
    // },
    getData: function() {
      return $.ajax({
        url: "api/stops",
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

  // refreshExamples gets new examples from the db and repopulates the list
  var refreshExamples = function() {
    API.getData().then(function(data) {
      var $data = data.map(function(stop) {
        console.log("this dta is ", stop);
        var $option = $("<option>").text(stop.stops);
        return $option;
      });

      // $exampleList.empty(); //select div and empty it
      "#Startbtn".append($data); //append option array to select div
    });
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();

    var example = {
      text: $exampleText.val().trim(),
      description: $exampleDescription.val().trim()
    };

    if (!(example.text && example.description)) {
      alert("You must enter an example text and description!");
      return;
    }

    API.saveExample(example).then(function() {
      refreshExamples();
    });

    $exampleText.val("");
    $exampleDescription.val("");
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deleteExample(idToDelete).then(function() {
      refreshExamples();
    });
  };

  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click", handleFormSubmit);
  $exampleList.on("click", ".delete", handleDeleteBtnClick);

  console.log("ready!");
  refreshExamples();
});
