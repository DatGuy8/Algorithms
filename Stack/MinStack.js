
const MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push({
        value: val,
        min: this.stack.length === 0 ? val : Math.min(val,this.getMin())
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length>0){
        this.stack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length - 1].value;
    }
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length > 0){
        return this.stack[this.stack.length-1].min;
    }
    return null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(5);
obj.push(2);

obj.push(4);
obj.push(-1);

console.log(obj);
