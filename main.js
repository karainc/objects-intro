const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(`Wardrobe height is ${wardrobe.height}`);
console.log(`Wardrobe manufacturer is ${wardrobe.manufacturer}`);
console.log(`Wardrobe contents are ${wardrobe.contents}`);
console.log(`Wardrobe depth is ${wardrobe.depth}`);
console.log(`Wardrobe width is ${wardrobe.width}`);
wardrobe.material = "Cedar";

console.log(`Wardrobe material is ${wardrobe.material}`);

//Instructions #2 //

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log(`The Empire State Building is ${empireStateBuilding.stories} stories tall,
${empireStateBuilding.height} ft, ${empireStateBuilding.squareFeet} square ft,
from East to West it is ${empireStateBuilding.eastWestLength}ft wide and is
${empireStateBuilding.northSouthLength} ft long from North to South.`);

const empireAddress = empireStateBuilding.address;
const empireConstruct = empireStateBuilding.constructionDate;
const empireCost = empireStateBuilding.cost;
const empireOwner = empireStateBuilding.owner;
const empireArchitect = empireStateBuilding.architect;

console.log(empireAddress);
console.log(empireConstruct);
console.log(empireCost);
console.log(empireOwner);
console.log(empireArchitect);

//Number 3//
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
console.log(nashvilleSoftwareSchool.instructors.partTime);
console.log(nashvilleSoftwareSchool.instructors.fullTime);
//2//
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);
console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
