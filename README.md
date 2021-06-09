
## Description

A polling station chief wants to determine how many people from each of the sections that make up his zone attend on voting day. The sections are: north, south and center.
You also want to determine which section is with the highest number of voters.

## Usage

```Javascript

let Voter=require("./Voter").Voter;
let Result=require("./Result").Result;
let Section=require("./Section").Section;

let arrayvotersnorth=[];
let arrayvoterssouth=[];
let arrayvoterscenter=[];

arrayvotersnorth.push(new Voter("Vote"));
arrayvotersnorth.push(new Voter("Vote"));
arrayvotersnorth.push(new Voter("Vote"));
arrayvotersnorth.push(new Voter("Vote"));
arrayvotersnorth.push(new Voter("Vote"));
arrayvotersnorth.push(new Voter("Vote"));
arrayvotersnorth.push(new Voter("Vote"));
arrayvotersnorth.push(new Voter("Vote"));
arrayvotersnorth.push(new Voter("Vote"));
arrayvotersnorth.push(new Voter("Vote"));
arrayvotersnorth.push(new Voter("Vote"));


arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));
arrayvoterssouth.push(new Voter("Vote"));

arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));
arrayvoterscenter.push(new Voter("Vote"));


let arraysections=[];
let north=new Section("North",arrayvotersnorth);
let south=new Section("South",arrayvoterssouth);
let center=new Section("Center",arrayvoterscenter);
arraysections.push(north);
arraysections.push(south);
arraysections.push(center);

let result=new Result(arraysections);

console.log("The North section has "+north.number_votes()+" votes");
console.log("                                                ");
console.log("The South section has "+south.number_votes()+" votes");
console.log("                                                ");
console.log("The Center section has "+center.number_votes()+" votes");
console.log("                                                ");
console.log("----------------------------------------------------------");
console.log("                                                ");
console.log(result.calc_result());

```