module.exports = function zeros(expression) {    
    const exprArr = expression.split('*');
    let result = 0,
        evenSum =[],  
        oddSum =[];

    // get two arrays from expression  one with !, second with !!. only numbers with out '!' and '!!'
    let oneFactArr = exprArr.filter((x)=> !x.includes('!!')).map((x) => parseInt(x,10)),
        twoFactArr = exprArr.filter(findTwoFact).map((x) => parseInt(x,10));

    //get  two array from twoFactArr. one with only Even numbers, second - with Odd.
    let twoFactEvenArr = twoFactArr.filter(x => !(x % 2)),
        twoFactOddArr = twoFactArr.filter(x => (x % 2));  

    //work with ! array if there is such factorials in expression
    if (oneFactArr.length){       
        // get zeros for every 5! 
        // make array with count of 5! in each factorial. then sum it with .reduce()  
        result += oneFactArr.map((x) => ((x-(x%5))/5)).filter((x)=> x>0).reduce((a,b) => a+b);  
               
        // get extra zeros for every 25! 50! 75! and 100!
        result += oneFactArr.map((x)=> (x-x%25)/25).reduce((a,b) => a+b);        
    }    

    //work with !! array if there is such factorials in expression    
    if (twoFactArr.length) {   

        //work with array of EVEN numbers        
        if (twoFactEvenArr.length) {
            // get zeros for every 10!!
            evenSum = twoFactEvenArr.map((x)=>(x-(x%10))/10).filter((x)=> x>0);
            if (evenSum.length)    
                result += evenSum.reduce((a,b) => a+b); 
                
            // get extra zeros for 50!!            
            result += twoFactEvenArr.map((x)=> (x-x%50)/50).reduce((a,b) => a+b);     
        }

        //work with array of ODD numbers              
        if (twoFactOddArr.length) {
            //get zeros for every 5!! 15!! 25!! etc. and get extra zeros for 25!! and 75!! 
            // ONLY if there are any even factorials
            oddSum = twoFactOddArr.map(oddParse).filter((x)=> x > 0);
            if(oddSum.length  && (twoFactEvenArr.length || oneFactArr.some((x) => !(x % 2)) )){
                result += oddSum.reduce((a,b) => a+b); 
            }         
        }
    }

    return  result;
}

/**
 * //returns digits if there is '!!' else 0
 * @param {*string} strNum 
 * @return {int}
 */
function findTwoFact (strNum) {       
    return strNum.replace(/\d/g,'').length >1 ? parseInt(strNum) : 0;
}

/**
 * return sum of counts for every ten, extra for 5, 25, 75
 * @param {*int} num 
 */
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