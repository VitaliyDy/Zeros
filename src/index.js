module.exports = function zeros(expression) {    
    let result = 0,
        exprType = exprArr = [];

    exprArr = expression.split('*');
  
    let oneFacrReduce= 0;
    result = exprArr.map(expDD);
    let oneFactArr = exprArr.filter((x)=> !x.includes('!!')).map((x) => parseInt(x,10));
    let twoFactArr = exprArr.filter(expDD).map((x) => parseInt(x,10));
    //work with !
    let oneFactArrRes=0;
    let oneFactArrAddzeros = 0;
    if (oneFactArr.length){
        oneFactArrAddzeros = oneFactArr.map((x)=> (x-x%25)/25).reduce((a,b) => a+b);
        oneFactArrAddzeros=oneFactArrAddzeros + oneFactArr.filter((x)=> x>= 100).length;
        oneFactArrRes = oneFactArr.map((x) => ((x-(x%5))/5)).filter((x)=> x>0);
        if(oneFactArrRes.length)
            oneFacrReduce = oneFactArrRes.reduce((a,b) => a+b);
    }    
    //work with !!
    let evenSumReduce = 0;
    let oddSumReduce = 0;
    let evenSumAddZero = 0;
    if (twoFactArr.length) {
        let twoFactEvenRes = twoFactArr.filter(isEven);
        let twoFactOddRes = twoFactArr.filter(isOdd);       

        
        //even
        let evenSum =[];
        if (twoFactEvenRes.length) {
            evenSumAddZero = twoFactEvenRes.filter((x) =>  x >= 50).length;
            evenSum = twoFactEvenRes.map((num)=>(num-(num%10))/10).filter((x)=> x>0);
            if (evenSum.length)    
                evenSumReduce = evenSum.reduce((a,b) => a+b);                
        }

        //odd       
        let oddSum =[];
        if (twoFactOddRes.length) {
            oddSum = twoFactOddRes.map(oddParse).filter((x)=> x > 0);
            if(oddSum.length  && (twoFactEvenRes.filter((x) => x >= 4).length || oneFactArr.filter((x) => x >= 4).length)){
            
                oddSumReduce = oddSum.reduce((a,b) => a+b); 
            }
            else 
                oddSumReduce = 0;
        }
    }

    return  evenSumReduce + oddSumReduce + oneFacrReduce + oneFactArrAddzeros+evenSumAddZero;



    function expDD (strNum) {
        let num = parseInt(strNum),
            factType = strNum.replace(/\d/g,'');
        if (factType.length >1 )
            return num;
        else 
            return 0;
    }

    function oddParse(num) {
        let zerosCount = 0;
        if(num%10 >= 5 )
            zerosCount ++;   
        if (num >= 25 )
            zerosCount ++;          
        if (num >= 75 )
            zerosCount ++;     
        return zerosCount + (num-(num%10))/10;
        
    }

    function oneFactParse(num){
       


    }

    function expParse(strNum){
        let num = parseInt(strNum),
            factType = strNum.replace(/\d/g,'');

        if (factType.length === 2) {
            if(!isEven(num) && num >= 5)
                return false;
            else if (!isEven(num) && num < 5)    
                return 0;
            else if (isEven(num))
                return (num-(num%10))/10;
        } else {
            return ((num-(num%5))/5);
        }
    }

    function getShortestArr (falseArr, secondArr) {
        if( falseArr.length && secondArr.length)
            return falseArr.length;
        else
            return 0;
    }
        
    /**
     * // return true if num is Even
     * @param {*int} num 
     * @return {bool}
     */
    function isEven (num) {
        return !(num % 2);
    }
     /**
     * // return true if num is Odd
     * @param {*int} num 
     * @return {bool}
     */
    function isOdd (num) { //0
        return (num % 2);
    }
 
}
