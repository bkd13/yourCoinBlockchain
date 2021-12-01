const Blockchain = require('./blockchain');

const yourcoin = new Blockchain();

yourcoin.createNewBlock(98282, 'A09A909A09A0A9', 'AD7AD6AD6AD6');

yourcoin.createNewTransaction(100, 'ALEX09090909', 'JOE838338A');

yourcoin.createNewBlock(123123, 'GDY7ADYDA7YD', '2BV8VB5VB7');

yourcoin.createNewTransaction(100, 'ALEX09090909', 'JOE838338A');
yourcoin.createNewTransaction(20, 'B3X09090909', 'ADF838338A');
yourcoin.createNewTransaction(13, 'GEX09050909', '89D7D8338A');


yourcoin.createNewBlock(98998, '93FE99DD9ED', '8ERUG8REG8YRG');

console.log(yourcoin);