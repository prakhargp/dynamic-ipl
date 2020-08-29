const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const extraRunsByEachTeam = require("./ipl/extraRunsByEachTeam");
const economicalBowlers = require("./ipl/economicalBowlers");
const matchesWonByEachTeamPerVenue = require("./ipl/matchesWonByEachTeamPerVenue")
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
      
      let result1 = matchesPlayedPerYear(matches);
      let result2 = matchesWonByEachTeam(matches);
      let result3 = extraRunsByEachTeam(matches,deliveries);
      let result4 = economicalBowlers(matches,deliveries);
      let result5 = matchesWonByEachTeamPerVenue(matches);
      saveMatchesPlayedPerYear(result1,result2,result3,result4,result5);
      
   })
    });
}

function saveMatchesPlayedPerYear(result1,result2,result3,result4,result5) {
  const jsonData = {
    matchesPlayedPerYear: result1,
    matchesWonByEachTeam: result2,
    extraRunsByEachTeam: result3,
    economicalBowlers: result4,
    matchesWonByEachTeamPerVenue: result5
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

module.exports = main;
