let testObj = {}
testObj["prop"] = "test property"
console.log("log prop   ",testObj["prop"])

console.log("values of restObj   ", Object.values(testObj))

testObj["pi"] = 3.14
delete testObj.prop
console.log("deleted prop   ",testObj)

testObj["sumOfTwo"] = function sumOfTwoFunc (x,y) {
    return x + y
}
console.log("type sumOfTwo   ",typeof testObj.sumOfTwo("40", 150))

let newObj = Object.assign({"newProp":{"x":10}}, testObj)
console.log("newObj   ",newObj)

for (key in testObj) {
    delete testObj[key]
}
console.log("delete   ",testObj)

let copiedObj = {...newObj}
console.log("copied   ",copiedObj)

copiedObj["newProp"] = {x:100}
console.log("x eq 100   ",copiedObj)

console.log("newprop in copiedObj and newObj   ",copiedObj["newProp"], newObj["newProp"])

let arrayForCope = []

for (key in copiedObj) {
    arrayForCope.push(`${key}, ${copiedObj[key]}`)
}
console.log("obj to arr   ",arrayForCope)

function constructObject(objectName = "noName", objectNumber = "0", objectString="") {
    let obj = {}
    obj[objectName] = objectString
    return obj
}

createdObj1 = constructObject("TEST","10", "im string")
createdObj2 = constructObject()
console.log(createdObj2, createdObj1)


let createdArr1 = []
let createdArr2 = []
createdArr1.push(Object.keys(createdObj1))
createdArr2.push(Object.keys(createdObj2))
console.log(createdArr1, createdArr2)


function deepClone(obj) {
    let copyObj = {}
    for(let key in obj) {
        if(Array.isArray(obj[key])) {
            copyObj[key] = [...obj[key]]
            console.log("Array.isArray")

        }
        else if(typeof obj[key] === "object") {
            copyObj[key] = obj[key]
            deepClone(obj[key])
        }
        
        else {
            copyObj[key] = obj[key]
        }
    }
    return copyObj
        
		
		
	
}

const targetObj = {
    x: 1,
    y: {
        w: 'test',
        q: {
            a: true,
            b: () => console.log('useless'),
            c: {
                d: ['a', 'b', 'c']
            }
        }
    },
    z: [1,2,3,4,5]
}
let copied = deepClone(targetObj)
console.log(copied)
console.log(targetObj)

targetObj.y.q.c.d[0] = 100
// const areElementsEqual = targetObj.y.q.c.d[0] === copiedObj.y.q.c.d[0]
// console.log(areElementsEqual)
console.log(copied)
console.log(targetObj)
