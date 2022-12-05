/**
 * This is class decorator, why? Because it takes single parameter that is a Function type.
 * Return type is void!
 * @param target
 */
// export default function sealed(target: Function): void {
//   console.log("Sealing the constructor."); // logs
//   Object.seal(target); // seal the constructor thats passed in and its prototype.
//   Object.seal(target.prototype);
// }

export function sealed(name: string) {
    return function method (target: Function): void {
        console.log("Sealing the constructor: " + name); // logs
        Object.seal(target); // seal the constructor thats passed in and its prototype.
        Object.seal(target.prototype);
    }
}

/**
 * Take TFunc type of 'constructor' as target. "This function object becomes new constructor"
 * @param target 
 * @returns new constructor 
 */
export function logger<TFunc extends Function>(target: TFunc) : TFunc {
    let myConstructor: Function = function (){
        console.log("Creating new instance...");
        console.log(target);
    }

    myConstructor.prototype = Object.create(target.prototype);
    myConstructor.prototype.constructor = target;
    return <TFunc>myConstructor;
}