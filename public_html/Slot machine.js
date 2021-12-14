function ransym(x){
    symbol = Math.floor(Math.random() * x.length);
    return symbol;
}

bet = Number(prompt("How much would you like to bet"));
var symbols = ['cherris', 'oranges', 'plums', 'bells', 'melons', 'bars'];

var symbol1 = ransym(symbols);
var symbol2 = ransym(symbols);
var symbol3 = ransym(symbols);
var  winnings;

if (symbol1 !== symbol2 & symbol1 !== symbol3 & symbol2 !== symbol3){
    winnings = 0;
}else if (symbol1 === symbol2 & symbol2 === symbol3){
    winnings = bet * 3;
}else if (symbol1 === symbol2 || symbol2 === symbol3 || symbol1 === symbol3){
    winnings = bet * 2;
}

document.wrtie(symbol1 + " " + symbol2 + " " + symbol3);
    
document.write("<br>" + "You won " + winnings);