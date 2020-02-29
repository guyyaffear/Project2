$(document).ready(function() {
    getReport();
    var SubwayLine =$("#subway-line");
    var start =$("#subwayStationStart");
    var end =$('#endST');
    var busyness1 =$("#busyness1");
    var busyness2 =$("#busyness2");
    var busyness3 = $("#busyness3");
    var busyness4 = $("#busyness4");
    var busyness5 = $("#busyness5");
    var incident_type = $("#incident-type");
    var incident_report = $("#comment");
    var Submit =$("#submit");
    $("#submit").on("click",function(){
        var Selection = {
            start:start.val()[0],
            end:end.val()[0],
            incident_type: incident_type.val().trim(),
            incident_report: incident_report.val().trim(),  
        };
        // console.log(Selection);
        updatePost(Selection);
    })
    function updatePost(Selection) {
        $.ajax({
        method: "POST",
        data:Selection,
        url: "/api/SwaysUpdates",
        })
        .then(function(res) {
            console.log(res);
            console.log("i am herer");
            // window.location.href = "/insert.html";
        });
    }
    function getReport() {
        $.ajax({
        method: "GET",
        url: "/api/getReport",
        })
        .then(function(res) {
            console.log(res);
            console.log("i am herer");
            // window.location.href = "/insert.html";
            for(var i=0;i<res.length;i++)
            {
                var newRow = $("<tr>").append(
                    $("<td>").text(res[i].start),
                    $("<td>").text(res[i].end),
                    $("<td>").text(res[i].incident_type),
                    $("<td>").text(res[i].incident_report),
                  );
                  $("#reportT > tbody").append(newRow);
            }
        });
}
});