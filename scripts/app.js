export const multiply=(num1,num2)=>{
        return num1*num2;
    }

export const convertToMorseCode=(codeValue)=>{
    // let flag=true;
    let resultValue="";
    // let nameArr=[];
    // if(nameArr.length==0){
    //     nameArr[0]=this.codeValue;
    // }else {
    //     nameArr.push(this.codeValue);
    // }
    if(codeValue=="A"){
        resultValue=".-"
    }else if(codeValue=="B"){
        resultValue="-..."
    }else if(codeValue=="C"){
        resultValue="-.-."
    }else if(codeValue=="D"){
        resultValue="-.."
    }else if(codeValue=="E"){
        resultValue="."
    }else if(codeValue=="F"){
        resultValue="..-."
    }else if(codeValue=="G"){
        resultValue="--."
    }else if(codeValue=="H"){
        resultValue="...."
    }else if(codeValue=="I"){
        resultValue=".."
    }else if(codeValue=="J"){
        resultValue=".---"
    }else if(codeValue=="K"){
        resultValue="-.-"
    }else if(codeValue=="L"){
        resultValue=".-.."
    }else if(codeValue=="M"){
        resultValue="--"
    }else if(codeValue=="N"){
        resultValue="-."
    }else if(codeValue=="7"){
        resultValue="#"
    }
    return resultValue;
}
export const convertToMorseCodeWord=(codeValue)=>{
    
 const nameArr=[]
 for(let i=0;i<codeValue.length;i++){
     nameArr.push(convertToMorseCode(codeValue[i]))
    //  nameArr[i]=nameArr[i]+codeValue[i];
     console.log(nameArr);
 }
 return nameArr.join(" ")
}

export const convertToMorseCodeSentence=(codeValue)=>{
    let sentenceArr=[];
    
    for(let i=0;i<codeValue.length;i++){
        sentenceArr.push(convertToMorseCodeWord(codeValue[i]))
        console.log(sentenceArr);
        // let newVal=sentenceArr.join(" ");
        // sentenceArr=newVal.join('/')
        // newArr=sentenceArr.join(" ")
        // newArr=newArr.join("/")
    }
//    return newArr;
    return sentenceArr.join(" ");
}

