
// Alogrithm --------> 
class Solution {
    constructor() {
        var tokens = [['[', ']'], ['(', ')'], ['{', '}']]; // characters to be matched
        this.isBalanced = function (string) {
            var stack = [];
            var arr = string.split('');
            for (var c = 0; c < arr.length; c++) { // get the argument length
                
                if (this.isOpenTerm(arr[c])) { //  check if i matches the expression character
                    stack.push(arr[c]);
                }
                else if((stack.length == 0 || !this.Matches(stack.pop(), arr[c]))){
                        // this.Matches ==> perform a test on if i passes the regular expression
                        // return false if there is nothing 
                        return false;
                    }
            }
            return(stack.length == 0);
        };
        this.isOpenTerm = function (char) {
            for (var i = 0; i < tokens.length; i++) { 
                if (tokens[i][0] == char) {
                    return true;
                }
            }
            return false;
        };
        this.Matches = function (openChar, closeChar) {
            for (var i = 0; i < tokens.length; i++) {
                
                if (tokens[i][0] == openChar) {
                    // if the one the is popped out is the open term of the  close tag  
                    return tokens[i][1] == closeChar;
                }
            }
            return false;
        };
    }
}

var x = new Solution().isBalanced('[({}){}()]')
console.log(x);
