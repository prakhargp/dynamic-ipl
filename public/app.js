function currentYear() {
  let a = document.querySelector(".year-button");

  a.addEventListener("click", function economicalBowlersForCurrentYear() {
    var year = document.querySelector(".year-input").value;

    if (year < 2008 || year > 2019) {
      document.querySelector(".input-container > .error").classList.value ="error invisible";
    } else {
      document.querySelector(".input-container > .error").classList = "error invisible";
      fetch("./data.json")
        .then((r) => r.json())
        .then(function (r) {
          (document.querySelector("#eeconomical-bowlers").innerHTML = ""),
            visualizeEeconomicalBowlers(year, r.economicalBowlers);
        });
    }
  });
}

function fetchAndVisualizeData() {
  fetch("./data.json")
    .then((r) => r.json())
    .then(visualizeData);
}

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam);
  visualizeExtraRunsByEachTeam(data.extraRunsByEachTeam);
  visualizeEconomicalBowlers(data.economicalBowlers);
  visualizeMatchesWonByEachTeamPerVenue(data.matchesWonByEachTeamPerVenue);
  return;
}
fetchAndVisualizeData();
currentYear();

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column",
    },
    title: {
      text: "1. Total number of matches played per year",
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches",
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Matches",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: "#FFFFFF",
          align: "center",
          //format: '{point.y:.1f}', // one decimal
          y: 25, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
}

function visualizeMatchesWonByEachTeam(matchesWonByEachTeam) {
  Highcharts.chart("matches-won-by-each-team", {
    chart: {
      type: "column",
    },
    title: {
      text: "2. Number of matches won by each team over all the years of IPL",
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL</a>',
    },
    xAxis: {
      categories: [
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches Won",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    legend: {
      enabled: true,
    },
    series: matchesWonByEachTeam,
  });
}

function visualizeExtraRunsByEachTeam(extraRunsByEachTeam) {
  const seriesData = [];
  for (let team in extraRunsByEachTeam) {
    seriesData.push([team, extraRunsByEachTeam[team]]);
  }

  Highcharts.chart("extra-runs-by-each-team", {
    chart: {
      type: "column",
    },
    title: {
      text: "3. Extra runs conceded by each team in 2016",
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs",
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Extra Runs",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: "#FFFFFF",
          align: "center",
          //format: '{point.y:.1f}', // one decimal
          y: 25, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
}

function visualizeEconomicalBowlers(economicalBowlers) {
  const seriesData = [];
  for (let item of economicalBowlers[2015]) {
    seriesData.push([item.bowler, parseInt(item.economy)]);
  }

  Highcharts.chart("economical-bowlers", {
    chart: {
      type: "column",
    },
    title: {
      text: "4. Top Economical Bowlers in 2015 season",
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy",
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Economy",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: "#FFFFFF",
          align: "center",
          //format: '{point.y:.1f}', // one decimal
          y: 25, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
}

function visualizeMatchesWonByEachTeamPerVenue(a) {
  let category = Object.keys(a);
  let seriesData = [];
  let team = a[category[0]].teams;
  for (let i of team) {
    let obj = {};
    obj["name"] = i;
    obj["data"] = [];
    for (let j in a) {
      let index = a[j].teams.indexOf(i);
      obj.data.push(a[j].data[index]);
    }
    seriesData.push(obj);
  }

  Highcharts.chart("matches-per-venue", {
    chart: {
      type: "bar",
    },
    title: {
      text: "5. Story: Matches Won by each team per venue",
    },
    xAxis: {
      categories: category,
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches won vs Stadium",
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: seriesData,
  });
}

function visualizeEeconomicalBowlers(year, economicalBowlers) {
  const seriesData = [];
  for (let item of economicalBowlers[year]) {
    seriesData.push([item.bowler, parseInt(item.economy)]);
  }

  Highcharts.chart("eeconomical-bowlers", {
    chart: {
      type: "column",
    },
    title: {
      text: "Top Economical Bowlers in " + year + " season",
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL</a>',
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy",
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Economy",
        data: seriesData,
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: "#FFFFFF",
          align: "center",
          //format: '{point.y:.1f}', // one decimal
          y: 25, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
}
