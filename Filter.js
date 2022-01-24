const webSeries=[
    {
        title:"emergence of first love",
        rating: 4.5
    },
    {
        title:"about is love",
        rating: 5.5
    },
    {
        title:"love o2o",
        rating: 3.5
    },
    {
        title:"deep in love",
        rating: 5.7
    }
];
const goodWebSeries=webSeries.filter(x=>(x.rating>5));
console.log(goodWebSeries);
//filter method is used to filter the data based on the condition given