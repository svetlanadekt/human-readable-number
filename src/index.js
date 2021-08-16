module.exports = function toReadable (number) {
    const firstTwenty = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    let result;
    let str = number.toString();
    //console.log(typeof(str));

    if(number === 0) {
        return 'zero';
    
    }
    if (number < 20) {  
         result = firstTwenty[number];
        return result.trim(); // обрезаем пробелы
       //console.log(result);
    }

    if (str.length == 2) {   // проверка для чисел от 20 до 99
         result = dozens[str[0]] + ' ' + firstTwenty[str[1]]; // берем в массиве слово , кот соответс цифре под этим индексом в строке
        return result.trim();
        //console.log(result);
    } 

    if (str.length == 3) {
        if (str[1] === '0' && str[2] === '0') {  //проверка для 100, 200 ...
            result = firstTwenty[str[0]] + ' hundred';
            return result.trim();
            //console.log(result);
        } 
        if (str[1] === '1' && str[2] === '0') { // проверка для 110, 210 ...
         result = firstTwenty[str[0]] + ' hundred ten';
         return result.trim();
        //console.log(result);
        } if (str[1] === '0') { // проверка на 0 в середине чтобы не было лишнего пробела
            result = firstTwenty[str[0]] + ' hundred' + dozens[str[1]] + ' ' + firstTwenty[str[2]];
           // console.log(result);
            return result.trim();
        } if (str[1] === '1') {
            result = firstTwenty[str[0]] + ' hundred ' + firstTwenty[str[1] + str[2]];
            //console.log(result);
            return result.trim();
        }
        else 
        result = firstTwenty[str[0]] + ' hundred ' + dozens[str[1]] + ' ' + firstTwenty[str[2]];
        //console.log(result);
        return result.trim();
    }
};

