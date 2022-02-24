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

    const funSortByTimeToReachFinishLine = (array) => {
    const result = array.sort((a, b) => (a.timeToReachFinishLine > b.timeToReachFinishLine ? 1 : -1));
    return result;
};

console.log(funSortByTimeToReachFinishLine(sprinters));

const temp = funSortByTimeToReachFinishLine(sprinters);
const funSetOrder = (array) => {
    var [winner, firstRunnerUp, secondRunnerUp, justParticipants] = [array[0], array[1], array[2], array.splice(3)];
    return [winner, firstRunnerUp, secondRunnerUp, justParticipants];
};

console.log(funSetOrder(temp))
