const Songs=[
    {
        title: "Baby",
        year: 2003
    },
    {
        title: "Shape Of You",
        year: 2001
    },
    {
        title: "The heart want what ot wants",
        year: 2016
    },
    {
        title: "fake love",
        year: 2018
    }
];
Songs.forEach(function(song){
    console.log(`${song.title}->${song.year}`);
});