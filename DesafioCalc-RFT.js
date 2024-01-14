//Desafio Calculadora Rankeada - DIO - Rafaela Faé Theodoro

let players = [
    ["Faekinha-elfo-arqueiro", "elfo", "arqueiro", "18", 18],
    ["Avril-orc-buffer", "orc", "buffer", "44", 44],
    ["Sushi-elfo-tanker", "elfo", "tanker", "03", 3],
    ["Pedrita-humano-mago", "humano", "mago", "98", 98],
    ["Nina-elfo-swordsinger", "elfo", "swordsinger", "62", 62],
];

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0];
    return firstName;
}

for (let i = 0; i < players.length; i++) {
    console.log(
        "O Heroí " + getFirstName(players[i][0], "-") 
        + ", de raça "+ players[i][1]+", e classe de " 
        + players[i][2] + ", com "
        + players[i][3]+ " vitórias, está no nível " 
        + getRank(players[i][4])
    );
}

function getRank(victories){
    if (victories <10){
        return "Ferro";
    } else if (victories >= 11 && victories <= 20) {
        return "Bronze";
    } else if (victories >= 21 && victories <= 50) {
        return "Prata";
    } else if (victories >= 51 && victories <= 80) {
        return "Ouro";
    } else if (victories >= 81 && victories <= 90) {
        return "Diamante";
    } else if (victories >= 91 && victories <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}