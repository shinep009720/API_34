$(function () {
  $.ajax({
    type: "GET",
    url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-D8A868D6-D08A-4BF7-B6C0-7CB3DA894363&locationName=%E4%B8%AD%E6%AD%A3%E5%8D%80&elementName=T",
    dataType: "json",
    success: function (resource) {
      console.log(resource);
      //   console.log(resource.records.locations[0].location[0].locationName);
      $("#city_name").html(resource.records.locations[0].locationsName);
      $("#district").html(
        resource.records.locations[0].location[0].locationName
      );
      $("#tempture").html(
        resource.records.locations[0].location[0].weatherElement[0].time[0]
          .elementValue[0].value + "&#176;"
      );
      const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let j = 0;
      for (let i = 0; i < 10; i++) {
        // console.log($(".block").eq(i).find("small").html());
        // console.log($(".block").eq(i).find("h6").html());
        if (i % 2 == 0) {
          let T =
            resource.records.locations[0].location[0].weatherElement[0].time[i]
              .elementValue[0].value;
          let tempture = `<strong>${T}&#176</strong>`;
          //   console.log(tempture);
          let wd =
            resource.records.locations[0].location[0].weatherElement[0].time[i]
              .startTime;

          $(".block").eq(j).find("h6").html(tempture);
          const d = new Date(wd);
          let day_index = d.getDay();
          console.log(day_index);
          $(".block").eq(j).find("small").html(weekday[day_index]);
          j++;
        }
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
});
