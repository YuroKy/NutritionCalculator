import measurementMethods from "./enums/measurementMethods.js";

export default class Ingredient {
    constructor(name, portion, capacity, group, measurementMethod = measurementMethods.gram){
        this.name = name;
        this.portion = portion;
        this.capacity = capacity; 
        this.group = group;
        this.measurementMethod = measurementMethod;
    }
}