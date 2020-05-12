let subjects: String[];
let verbs: String[];
let objects: String[];
let minLength: number = 0;

if (subjects.length > minLength) {
    minLength = subjects.length;
} else {
    if (verbs.length < minLength) {
        minLength = verbs.length;
    } else {
        if (objects.length < minLength) {
            minLength = objects.length;
            nicerRhymer(minLength);
        } else {
        nicerRhymer(minLength);
        }
    }
}


function nicerRhymer(length:number): void {
    let usedSubjects: number[] = randomIntArray(length);
    let usedVerbs: number[] = randomIntArray(length);
    let usedObjects: number[] = randomIntArray(length);

    for (let i = 0; i < length; i++) {
        console.log(subjects[usedSubjects[i]] + " " + verbs[usedVerbs[i]] + "" + objects[usedObjects[i]]);
        }
}

function randomIntArray(length: number): any {
    let rand: number[];
    let min: number = 0;
    let max: number = length - 1;
    let i: number = 0;
    let current: number = randomInteger(min, max);

    if (i < length) {
        if (rand[i] = current) {
            current = randomInteger(min, max)
        } else {
            rand[i] = i++;
        }
    } else {
        return rand;
    }
}

function randomInteger(min: number, max: number): any {
    return Math.floor(Math.random() * (max - min + 1));
}