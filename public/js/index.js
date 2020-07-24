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
    var $data = data.map(function (stop) {
      var $option = $("<a class=dropdown-item>").text(stop.stops);
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
    });
  });

 
});

