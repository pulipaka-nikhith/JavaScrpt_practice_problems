const webSeries=[
    {
        title:"Mirzapur",
        rating: 4.5
    },
    {
        title:"Family Man",
        rating: 5.5
    },
    {
        title:"Squid Game",
        rating: 3.5
    },
    {
        title:"Money Hiest",
        rating: 5.7
    }
];
const sortedWebSeries=webSeries.sort((x,y)=>(x.rating-y.rating));
console.log(sortedWebSeries);