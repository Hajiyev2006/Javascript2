let players = [
    {
        ad : "Quaresma",
        soyad : "Ricardo",
        yas : 40,
        Hobiler: ["Fenerin xeyallariyla oynamaq","Adam kecmek"],
        Performans:100
    },
    {
        ad : "Talisca",
        soyad : "Anderson",
        yas : 30,
        Hobiler: ["Muslerayla zarafat etmek XD","Qol atmaq"],
        Performans: 95
    },
    {
        ad : "Oguzan",
        soyad : "Ozyakup",
        yas : 31,
        Hobiler: ["Imza paslar atmaq","Menasiz qerarlar vermek"],
        Performans: 80
    },
    {
        ad : "Pepe",
        soyad : "Ferreira",
        yas : 41,
        Hobiler: ["Kariyer bitirmek","Messini yixmaq"],
        Performans: 65
    },
    {
        ad : "Gedson",
        soyad : "Fernandes",
        yas : 25,
        Hobiler: ["Galatasarla zarafatlasmaq","Mukemmel driblingler atmaq"],
        Performans: 89
    },
    
]
let Umumiortalama =  0;

players.forEach((player) => {
  Umumiortalama += player.Performans;
});

let Edediorta = Umumiortalama / players.length;

console.log(`Oyuncularin ortalamasi : ${Edediorta}-dir`);

players
.filter((player) => player.Performans < 90)
  .map((player) => {
    console.log(`${player.soyad} ${player.ad} performansiniz asagidir daha cox calisin!`);
  });