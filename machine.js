"use strict";
var GOB;
(function (GOB) {
    GOB[GOB["good"] = 1] = "good";
    GOB[GOB["ok"] = 0.75] = "ok";
    GOB[GOB["bad"] = 0] = "bad";
})(GOB || (GOB = {}));
function successRate(data, factors) {
    var d = JSON.parse(data);
    var semesterCount = { fall: 0, spring: 0 };
    var credits = 0;
    var totalCredits = d.totalCredits;
    for (var semester in semesterCount) {
        var curSemesters = d.filter((o) => o.semester === semester);
        semesterCount[semester] = curSemesters.length;
        credits += curSemesters.courses.reduce((prev, cur, i) => {
            if (i === 1)
                return Number.parseFloat(prev.credits) + Number.parseFloat(cur.credits);
            return prev + Number.parseFloat(cur.credits);
        });
    }
    var weight = 1;
    if ((totalCredits / (semesterCount.fall + semesterCount.spring) < 12))
        weight = 0;
    else if ((totalCredits / (semesterCount.fall + semesterCount.spring) <= 15))
        weight = 0.5;
    return weight;
}
exports.successRate = successRate;
function messureGpa(data) {
    var d = JSON.parse(data);
    if (d.cumulativeGpa >= 3.5)
        return 1;
    if (d.cumulativeGpa >= 3.0)
        return 0.75;
    if (d.cumulativeGpa >= 2.5)
        return 0.25;
    if (d.cumulativeGpa < 2.5)
        return 0;
}
exports.messureGpa = messureGpa;
function standardDev(data) {
    var d = JSON.parse(data);
    var sumCredits = 0;
    var sumCreditsEarned = 0;
    d.semesters.map((s) => {
        if (s.semester !== 'summer')
            s.courses.map((c) => {
                sumCreditsEarned += c.creditsEarned;
                sumCredits += c.credits;
            });
    });
    sumCredits *= 4;
    var cumulativeGpa = sumCreditsEarned / sumCredits;
    var vmap = d.semesters.reduce((prev, cur, i) => {
        if (i === 1)
            return Math.pow(prev.termGpa - cumulativeGpa, 2) + Math.pow(cur.termGpa - cumulativeGpa, 2);
        return prev + Math.pow(cur.termGpa - cumulativeGpa, 2);
    });
    return Math.pow(vmap / (d.semester.length - 1), 0.5);
}
exports.standardDev = standardDev;
function checkStd(s) {
    if (s > .35)
        return GOB.bad;
    if (s <= .2)
        return GOB.good;
    if (s <= .35)
        return GOB.ok;
}
exports.checkStd = checkStd;
function determineHowGood() {
}
exports.determineHowGood = determineHowGood;
//# sourceMappingURL=machine.js.map