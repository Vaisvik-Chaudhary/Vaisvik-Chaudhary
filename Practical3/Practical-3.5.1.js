const sprinters = [{
name: 'James',
timeToReachFinishLine: 9.10
},
{
name: 'George',
timeToReachFinishLine: 9.11
},
{
name: 'Robert',
timeToReachFinishLine: 9.25
},
{
name: 'Mary',
timeToReachFinishLine: 9.13
},
{
name: 'Patricia',
timeToReachFinishLine: 9.14
},
{
name: 'Christopher',
timeToReachFinishLine: 10.0
},
{
name: 'Thomas',
timeToReachFinishLine: 11.0
},
{
name: "Anthony",
timeToReachFinishLine: 9.0
},
{
name: 'Timothy',
timeToReachFinishLine: 19.0
},
{
name: 'Samuel',
timeToReachFinishLine: 10.10
}];

function compare(a, b) {
    return a.timeToReachFinishLine > b.timeToReachFinishLine;
  }
  sprinters.sort(compare);
  console.log(sprinters);

  
