module.exports = function zeros(expression) {    
    let result = 0,
        exprType = exprArr = [];
        
    
    exprArr = expression.split('*');    
    exprArr = exprArr.map(expParse);
    //addZeros =  exprArr.reduce((a,b)=> if (a);
    
    result = exprArr.reduce((a,b)=> a+b);

    return result;//+addZeros;

    function expParse(strNum){
        let num = parseInt(strNum),
            factType = strNum.replace(/\d/g,'');

        if (factType.length === 2) {
            if(!isEven(num))
                return 0;
            else
                return (num-(num%10))/10;
        } else {
            return ((num-(num%5))/5);
        }
    }

    /**
     * // return true if num is Even
     * @param {*int} num 
     * @return {bool}
     */
    function isEven (num) {
        return !(num % 2);
    }
 
}
