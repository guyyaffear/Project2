$(document).ready(function() {
    var SubwayLine =$("#subway-line");
    var start =$("#subwayStationStart");
    var end =$("#subwayStationEnd");
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
            SubwayLine: SubwayLine.val().trim(),
            start:start.val().trim(),
            end:end.val().trim(),
            busyness1: busyness1.val().trim(),
            busyness2: busyness2.val().trim(),
            busyness3: busyness3.val().trim(),
            busyness4: busyness4.val().trim(),
            busyness5: busyness5.val().trim(),
            incident_type: incident_type.val().trim(),
            incident_report: incident_report.val().trim(),  
        }; 
        console.log(Selection);
    })
});
        // function updatePost(Selection) {
        //     $.ajax({
        //     method: "POST",
        //     url: "/api/SwaysUpdate",
        //     data: Selection
        //     })
        //     .then(function() {
        //         window.location.href = "/blog";
        //     });
        // }
        //     console.log(Selection);
        //     console.log(data);