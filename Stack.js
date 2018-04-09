// Adding and deleting data from a stack
// adding is done by push data into the stack 
//remove happens when we pop data from the stack

//adding data into stack

//we are gonna use prototype to apply for all instance

Stack.prototype.push = function(data){
    //declare a varaible size to get the size of the stack
    //increments the size of the stack by 1 on push
    var size = this._size++;
    //assigns size as the key to stack and has value of variable data
    //most recent data
    this._storage[size] = data;

}


//delete data from stack
//delete the last added data
//decrement the stack size by 1 
//return the new stack

Stack.prototype.pop = function(){
    var size = this._size;
    deletedData;

    //delete the most recent data
    deletedData = this._storage[size];
    this.size--;
    return deletedData;
}