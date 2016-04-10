/**
 * Determine if you're on track.
 * Designs
 */

/*
relies on
api/stdudent/transcript // your transscript data as json

{ ""
 */




enum GOB {
  good,
  ok,
  bad
}

interface IFactors {
  creditsPerSemseter: number

  status: GOB;
}



export function successRate(data: string, factors: IFactors) {
  var d = JSON.parse(data);

  // for all semesters, add up all credits taken and credits earned.
  var semesterCount = {fall: 0, spring: 0};
  var credits = 0;

  for (var semester in semesterCount) {
    var curSemesters = d.filter((o) => o.semester === semester);
    semesterCount[semester] = curSemesters.length;
    credits += curSemesters.courses.reduce((prev, curr) => prev + Number.parseFloat(prev.credits));
  }




  return JSON.stringify({});
}
