
function properties(obj){
    let property=[];
    for(var proper in obj){
        if(obj.hasOwnProperty(proper)){
        property.push(property)
    }
}q
return proper
}
console.log(properties(Array.prototype));



function getAllPropertyNames(obj) {
    let props = [];
    
       while (obj) {
        Object.getOwnPropertyNames(obj).forEach(prop => {
       
            if (!props.includes(prop)) {
                props.push(prop);
            }
        });
        
        obj = Object.getPrototypeOf(obj);
    }
    
    return props;
}

class Parent {
    constructor() {
        this.parentProp = 'parent';
    }
}

class Child extends Parent {
    constructor() {
        super();
        this.childProp = 'child';
    }
}

const obj = new Child();
console.log(getAllPropertyNames(obj));


