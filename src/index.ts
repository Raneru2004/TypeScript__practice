//Basic types
let id: number=5
let company:string ="Apple"
let isPublished:boolean=true
let x:any ="hello"
let age:number
age=30


let ids:number[] =[1,2,3,4,5]
//ids.push("hello") doesnt work since its number
let arr: any[]=[1,"hello", true]

//Tuple

let person: [number, string, boolean]=[1,"hello", false]

//Tuple Array

let employee:[number, string][]


employee =[
    [1,"hello"],
    [2,"go"],
    [4,"hi"],
]


//Union

let ID: string | number =22
ID="22"

//Enum

enum Direction1{
    Up = 1,//1
    Down,//2
    Left,//3
    Right//4
}

enum Direction2{
    Up = "up",
    Down="down",
    Left="left",
    Right="right"
}

//Objects

type User = {
    id: number,
    name:string
}

const user : User= {
    id:1 ,
    name:"john"
} 

//Type Assertion

let cid:any =1
// let customerId= <number>cid below does same thing
let customerId= cid as number


//Functions

function addNum(x:number,y:number) :number{
    return x+y
}

//Void
function log( message:string | number) : void {
   console.log(message)
}

//Interfaces

interface UserInterface{
   readonly id: number,
    name:string,
    age?:number
}

const user1 : UserInterface= {
    id:1 ,
    name:"john"
} 
 //user1.id=5 read only
//interface Point = number | string cant do this
type Point = number | string
const p1: Point =1

interface mathFunc{
    (x:number, y:number):number
}

const add :mathFunc = (x: number, y:number): number => x+y
const sub:mathFunc = (x: number, y:number): number => x-y

interface PersonInterface{
     id: number,
     name:string,
     register():string
 }

//Classes

class Person implements PersonInterface {
    id:number
    name:string

    constructor(id:number, name:string){
        this.id= id
        this.name= name

    }

    register(){
        return `${this.name} is now registered`
    }
}

const ran= new Person(1,"hello");

//Sub-classes

class Employee extends Person {
    position:string

    constructor(id:number, name:string, position:string){
        super(id,name)
        this.position=position;
    }

}

const emp= new Employee(3,"Vinie","Developer")
//ran.id=5;

//Generics

function getArray<T>(items:T[]): T[] {
    return new Array().concat(items);
}

let numArray= getArray<number>([1,2,3,4])
let strArray= getArray<string>(["ran","jill","Vin"])

//numArray.push("hello") doesn't work since now it expects a string 