/**    
 * Author: Meris Beganovic   
 * ONYEN: merisb
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

import { Image } from "./Image";

/**
 * The Filter superclass outlines the shared features of all Filters in our project.
 * 
 * The `name` of a filter is what is shown to the user to describe the filter in the user interface.
 * 
 * The `amount` of a filter is a value between 0.0 and 1.0, inclusive, that specifies the level at which
 * a filter is applied. For example, a brightness filter at amount 0.0 may indicate 0% brightness or a 
 * completely black image, while at 1.0 would indicate 100% brighter than the original.
 * 
 * The `constructor` and `process` method must be overridden (redefined) in every subclass.
 * 
 * The `process` method is where a Filter's algorithmic work will be performed. It takes an Image object
 * as an input and returns a filtered ("processed") Image object. In this generic Filter superclass, no
 * processing work is done so the original Image is returned untouched.
 * 
 * Note: You should not modify this file.
 */
export class Filter {
    
    name: string;
    amount: number;

    constructor() {
        this.name = "<INITIALIZE name IN SUBCLASS' CONSTRUCTOR>";
        this.amount = 0.0;
    }

    process = (input: Image): Image => {
        return input;
    }

}