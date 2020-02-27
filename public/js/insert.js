
var InsertData = {
    getData: function () {
        return $.ajax({
            url: "/api/stops",
            type: "GET"
        });
    },
    $(document).ready(function () {
        API.getData().then(function (data) {
            var $data = data.map(function (stop) {
                var $option = $("<a class=form-control id=subwayStation>").text(stop.stops);
                return $option;
            });
            $("#table-data").append($data);
        });
    });