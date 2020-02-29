// The API object contains methods for each kind of request we'll make
var API = {
  createUser: function (newUser) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/user",
      data: JSON.stringify(newUser)
    });
  },
  getinfoSway: function () {
    return $.ajax({
      url: "/api/swayselected",
      type: "GET"
    });
  },
  getData: function () {
    return $.ajax({
      url: "/api/stops",
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};
$(document).ready(function () {
  API.getData().then(function (data) {
    // function setvalue(elementId, value) {
    //   console.log("test");
    //   console.log("#"+elementId);
    //   $(elementId).html(value);
    //   }
    var $data = data.map(function (stop) {
      var $option = $("<a class=dropdown-item>").text(stop.stops);
      // $option.onclick = () => $("#dropdownMenuButton").text(stop.stops);
      return $option;
    });
    $("#stopbox").append($data);
  });
  API.getData().then(function (data) {
    function setvalue(elementId, value) {
      $("#" + elementId).text(value);
    }
    var $data = data.map(function (stop) {
      // console.log("ops");
      var $option = $("<div class=dropdown-item>").text(stop.stops);
      $option.addClass("selector");
      // console.log($option.attr("class"));
      return $option;
    });
    $("#endbox").append($data);

    $(".dropdown-item").on("click", function (event) {
      // event.preventDefault();
      console.log('event', event.target.innerText);
      $("#Endbtn").html(event.target.innerText);
      // $("#dropdownMenuButton").html(event.target.innerText);
    });
    // $(".dropdown-item").on("click", function (event) {
    //   // event.preventDefault();
    //   console.log('event', event.target.innerText);
    //   $("#Endbtn").html(event.target.innerText);
    //   $("#dropdownMenuButton").html(event.target.innerText);
    // });
  });

  // function getExplore() {
  //   $.ajax({
  //   method: "GET",
  //   url: "/api/gerExplore",
  //   })
  //   .then(function(res) {
  //       console.log(res);
  //       console.log("i am herer");
  //       // window.location.href = "/insert.html";
  //       for(var i=0;i<res.length;i++)
  //       {
  //           var newRow = $("<tr>").append(
  //               $("<td>").text(res[i].start),
  //               $("<td>").text(res[i].end),
  //             );
  //             $("#reportT > tbody").append(newRow);
  //       }
  //   });
  // };
  // var startSway = $("#stopbox");


  // refreshExamples gets new examples from the db and repopulates the list
  // $("#dropdownMenuButton").on("click", function(event) {
  //   console.log("I AM IN THE BUTTON");
  //   event.preventDefault();
  //     // $exampleList.empty(); //select div and empty it
  //     $("#stopbox").append($data);
  //     //append option array to select div
});

