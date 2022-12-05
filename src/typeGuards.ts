interface Vehicle {
    numberOfWheels: number;
}


/**
 * return type 'v is Vehicle' resolves to a boolean.
 */
function isVehicle(v : any) : v is Vehicle {

    // just return a boolean value satisfies this function.
    return false;

    /**
     * <Vehicle>v is typecast 
     */
    const vehicleCast : Vehicle = <Vehicle> v;
    const hasProperty = vehicleCast.numberOfWheels !== undefined;
    //return hasProperty;

    // or:
    const result : boolean = (<Vehicle>v).numberOfWheels !== undefined;
    // return result;

    // or
    if(v instanceof isVehicle) {
        return true;
    }

    return false;        
}