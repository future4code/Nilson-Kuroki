const oneEdit = (text: string, compare: string):boolean=>{
    if(
        compare.length > text.length +1 || 
        compare.length < text.length -1
    ){
        return false
    }

    let communCharQuantity = 0

    for(const char of compare){
        if(text.indexOf(char) !== -1){
            communCharQuantity++
        } 
    }    

    return (communCharQuantity <= text.length +1 && communCharQuantity >= text.length -1)
}
//console.log(oneEdit("banana", "bananak"))

const stringCompression = (input: string): string =>{
    const subStrings: string[] = []
    let lastChar = input[0]
    let charCount = 0

    for(const char of input){
        if(char !== lastChar){
            subStrings.push(lastChar + charCount)
            lastChar = char
            charCount = 0
        }
        charCount ++
    }

    subStrings.push(lastChar + charCount)
    

    let result = ""
    for(const key of subStrings){
        result += key
    }
    return result.length > input.length? input : result
}
console.log(stringCompression("suuuuuuuudo"))