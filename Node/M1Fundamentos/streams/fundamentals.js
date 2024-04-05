/*
    Netflix e Spotify -> Writable Streams

Importação de clietnes via CSV (Excel)
1gb - 1.000 mb
    POST /upload import.csv -> Readable Streams

Referente aos 10Mb de transferência, ao invés de Mega Bytes, quando é taxa de transferência de internet e roteadores, é Megabits.

Então é 1024 * 8 / 10, que ao invés de 102,4 segundos, seria 819,2 segundos.

Que ao invés de 1 minuto e 42 segundos, vai pra 13 minutos e 40 mais ou menos.

 10mb/s -- 1024 * 8/10 = 819,2 mb

 100s -> Inserções no banco de dados
 10 mb/s -> 10.000

 Streams -> Consigo ler os dados da minha requisição aos poucos
 e ir processando ele, enquanto está indo para o servidor
 Readable Streams / Writable Streams
*/
