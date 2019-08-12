const playerName = 'Patrik Laine is lame';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message = 'Winnipeg is the best Canadian city, Go Winnipeg';


let playerNameOnly = (playerName.slice(0,13));                              //Patrik Laine is
let playerString = (playerName.slice(13,15));                               // is
let playerNameUppercase = (playerNameOnly.toUpperCase() + playerString);    //PATRIK LAINE is
let teamsString = (teams.slice(47,50));                                     // jets
let upperCaseJ = (teams.slice(46,47));                                      // j
let teamWithUppercase = (upperCaseJ.toUpperCase() + teamsString);           // Jets
let messageString1 = (message.slice(12,20));                                // the best
let messageString2 = (message.slice(34,38));                                // ,Go

let template = `${playerNameUppercase} ${messageString1} ${teamWithUppercase} player${messageString2} Jets!!!`;

console.log(template);