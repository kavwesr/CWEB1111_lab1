var movies = [
  {
    "movie": "Avatar",
    "release_year": 2009,
    "budget": 425,
    "domestic_gross": 760.507625,
    "worldwide_gross": 2783.918982
  },
  {
    "movie": "Star Wars Ep. VII: The Force Awakens",
    "release_year": 2015,
    "budget": 306,
    "domestic_gross": 936.662225,
    "worldwide_gross": 2058.662225
  },
  {
    "movie": "Pirates of the Caribbean: At World's End",
    "release_year": 2007,
    "budget": 300,
    "domestic_gross": 309.420425,
    "worldwide_gross": 963.420425
  },
  {
    "movie": "Spectre",
    "release_year": 2015,
    "budget": 300,
    "domestic_gross": 200.074175,
    "worldwide_gross": 879.620923
  },
  {
    "movie": "The Dark Knight Rises",
    "release_year": 2012,
    "budget": 275,
    "domestic_gross": 448.139099,
    "worldwide_gross": 1084.439099
  },
  {
    "movie": "The Lone Ranger",
    "release_year": 2013,
    "budget": 275,
    "domestic_gross": 89.302115,
    "worldwide_gross": 260.002115
  },
  {
    "movie": "John Carter",
    "release_year": 2012,
    "budget": 275,
    "domestic_gross": 73.058679,
    "worldwide_gross": 282.7781
  },
  {
    "movie": "Tangled",
    "release_year": 2010,
    "budget": 260,
    "domestic_gross": 200.821936,
    "worldwide_gross": 586.581936
  },
  {
    "movie": "Spider-Man 3",
    "release_year": 2007,
    "budget": 258,
    "domestic_gross": 336.530303,
    "worldwide_gross": 890.875303
  },
  {
    "movie": "Avengers: Age of Ultron",
    "release_year": 2015,
    "budget": 250,
    "domestic_gross": 459.005868,
    "worldwide_gross": 1404.705868
  },
  {
    "movie": "Captain America: Civil War",
    "release_year": 2016,
    "budget": 250,
    "domestic_gross": 408.084349,
    "worldwide_gross": 1151.684349
  },
  {
    "movie": "Batman v Superman: Dawn of Justice",
    "release_year": 2016,
    "budget": 250,
    "domestic_gross": 330.360194,
    "worldwide_gross": 868.160194
  },
  {
    "movie": "The Hobbit: An Unexpected Journey",
    "release_year": 2012,
    "budget": 250,
    "domestic_gross": 303.003568,
    "worldwide_gross": 1017.003568
  },
  {
    "movie": "Harry Potter and the Half-Blood Prince",
    "release_year": 2009,
    "budget": 250,
    "domestic_gross": 301.959197,
    "worldwide_gross": 935.083686
  },
  {
    "movie": "The Hobbit: The Desolation of Smaug",
    "release_year": 2013,
    "budget": 250,
    "domestic_gross": 258.366855,
    "worldwide_gross": 960.366855
  },
  {
    "movie": "The Hobbit: The Battle of the Five Armies",
    "release_year": 2014,
    "budget": 250,
    "domestic_gross": 255.119788,
    "worldwide_gross": 955.119788
  },
  {
    "movie": "Pirates of the Caribbean: On Stranger Tides",
    "release_year": 2011,
    "budget": 250,
    "domestic_gross": 241.063875,
    "worldwide_gross": 1045.663875
  },
  {
    "movie": "Superman Returns",
    "release_year": 2006,
    "budget": 232,
    "domestic_gross": 200.12,
    "worldwide_gross": 374.085065
  },
  {
    "movie": "Quantum of Solace",
    "release_year": 2008,
    "budget": 230,
    "domestic_gross": 169.368427,
    "worldwide_gross": 591.692078
  },
  {
    "movie": "The Avengers",
    "release_year": 2012,
    "budget": 225,
    "domestic_gross": 623.279547,
    "worldwide_gross": 1519.479547
  },
  {
    "movie": "Pirates of the Caribbean: Dead Man's Chest",
    "release_year": 2006,
    "budget": 225,
    "domestic_gross": 423.315812,
    "worldwide_gross": 1066.215812
  },
  {
    "movie": "Man of Steel",
    "release_year": 2013,
    "budget": 225,
    "domestic_gross": 291.045518,
    "worldwide_gross": 667.999518
  },
  {
    "movie": "The Chronicles of Narnia: Prince Caspian",
    "release_year": 2008,
    "budget": 225,
    "domestic_gross": 141.62149,
    "worldwide_gross": 417.341288
  },
  {
    "movie": "The Amazing Spider-Man",
    "release_year": 2012,
    "budget": 220,
    "domestic_gross": 262.030663,
    "worldwide_gross": 757.890267
  },
  {
    "movie": "Jurassic World",
    "release_year": 2015,
    "budget": 215,
    "domestic_gross": 652.19801,
    "worldwide_gross": 1670.328025
  },
  {
    "movie": "Men in Black 3",
    "release_year": 2012,
    "budget": 215,
    "domestic_gross": 179.020854,
    "worldwide_gross": 654.213485
  },
  {
    "movie": "Transformers: Revenge of the Fallen",
    "release_year": 2009,
    "budget": 210,
    "domestic_gross": 402.11187,
    "worldwide_gross": 836.519699
  },
  {
    "movie": "Transformers: Age of Extinction",
    "release_year": 2014,
    "budget": 210,
    "domestic_gross": 245.439076,
    "worldwide_gross": 1104.039076
  },
  {
    "movie": "X-Men: The Last Stand",
    "release_year": 2006,
    "budget": 210,
    "domestic_gross": 234.362462,
    "worldwide_gross": 459.359555
  },
  {
    "movie": "Robin Hood",
    "release_year": 2010,
    "budget": 210,
    "domestic_gross": 105.26973,
    "worldwide_gross": 322.241588
  },
  {
    "movie": "Battleship",
    "release_year": 2012,
    "budget": 209,
    "domestic_gross": 65.2334,
    "worldwide_gross": 305.218228
  },
  {
    "movie": "King Kong",
    "release_year": 2005,
    "budget": 207,
    "domestic_gross": 218.080025,
    "worldwide_gross": 550.517357
  },
  {
    "movie": "The Golden Compass",
    "release_year": 2007,
    "budget": 205,
    "domestic_gross": 70.107728,
    "worldwide_gross": 367.262558
  },
  {
    "movie": "Titanic",
    "release_year": 1997,
    "budget": 200,
    "domestic_gross": 658.672302,
    "worldwide_gross": 2207.615668
  },
  {
    "movie": "Finding Dory",
    "release_year": 2016,
    "budget": 200,
    "domestic_gross": 484.434568,
    "worldwide_gross": 985.234568
  },
  {
    "movie": "Toy Story 3",
    "release_year": 2010,
    "budget": 200,
    "domestic_gross": 415.00488,
    "worldwide_gross": 1069.818229
  },
  {
    "movie": "Iron Man 3",
    "release_year": 2013,
    "budget": 200,
    "domestic_gross": 408.992272,
    "worldwide_gross": 1215.392272
  },
  {
    "movie": "Spider-Man 2",
    "release_year": 2004,
    "budget": 200,
    "domestic_gross": 373.524485,
    "worldwide_gross": 783.705001
  },
  {
    "movie": "Alice in Wonderland",
    "release_year": 2010,
    "budget": 200,
    "domestic_gross": 334.19111,
    "worldwide_gross": 1025.49111
  },
  {
    "movie": "Skyfall",
    "release_year": 2012,
    "budget": 200,
    "domestic_gross": 304.360277,
    "worldwide_gross": 1110.526981
  },
  {
    "movie": "Monsters University",
    "release_year": 2013,
    "budget": 200,
    "domestic_gross": 268.488329,
    "worldwide_gross": 743.588329
  },
  {
    "movie": "Oz the Great and Powerful",
    "release_year": 2013,
    "budget": 200,
    "domestic_gross": 234.770996,
    "worldwide_gross": 490.359051
  },
  {
    "movie": "X-Men: Days of Future Past",
    "release_year": 2014,
    "budget": 200,
    "domestic_gross": 233.921534,
    "worldwide_gross": 747.862775
  },
  {
    "movie": "The Amazing Spider-Man 2",
    "release_year": 2014,
    "budget": 200,
    "domestic_gross": 202.853933,
    "worldwide_gross": 708.996336
  },
  {
    "movie": "Cars 2",
    "release_year": 2011,
    "budget": 200,
    "domestic_gross": 191.450875,
    "worldwide_gross": 560.155383
  },
  {
    "movie": "Tron: Legacy",
    "release_year": 2010,
    "budget": 200,
    "domestic_gross": 172.062763,
    "worldwide_gross": 397.562763
  },
  {
    "movie": 2012,
    "release_year": 2009,
    "budget": 200,
    "domestic_gross": 166.112167,
    "worldwide_gross": 788.408539
  },
  {
    "movie": "Terminator Salvation",
    "release_year": 2009,
    "budget": 200,
    "domestic_gross": 125.322469,
    "worldwide_gross": 365.491792
  },
  {
    "movie": "Green Lantern",
    "release_year": 2011,
    "budget": 200,
    "domestic_gross": 116.601172,
    "worldwide_gross": 231.201172
  },
  {
    "movie": "Prince of Persia: Sands of Time",
    "release_year": 2010,
    "budget": 200,
    "domestic_gross": 90.759676,
    "worldwide_gross": 314.594597
  }
]

//Putting data into arrays
var titles = []
var budget = []
var dom_gross = []
var wrld_gross = []
for(var i in movies){
  titles[i] = movies[i].movie
  budget[i] = movies[i].budget
  dom_gross[i] = movies[i].domestic_gross
  wrld_gross[i] = movies[i].worldwide_gross
}

//Creating chart
var ctx = document.getElementById('myChart').getContext('2d'); 
var myChart = new Chart(ctx, { 
// The type of chart we want to create 
type: 'bar', 
 
// The data for our dataset 
data: { 
    labels: titles, 
    datasets: [{ 
        label: "Movie Budgets", 
        lineTension: 0, 
        borderColor: 'rgb(255, 99, 132)', 
        backgroundColor:'rgb(255, 99, 132)', 
        data: budget 
        , 
    },{ 
      label: "Domestic Gross", 
      lineTension: 0, 
      borderColor: 'rgb(100, 99, 255)', 
      backgroundColor: 'rgb(100, 99, 255)', 
      data: dom_gross, 
    }, 
    { 
      label: "WorldWide Gross", 
      lineTension: 0, 
      borderColor: 'rgb(1, 188, 21)', 
      backgroundColor: 'rgb(1, 188, 21)', 
      data: wrld_gross, 
    } 
  ], 
 
    
}, 
// Configuration options go here 
  options: { 
    scales: { 
      xAxes: [{ 
        ticks: { 
          autoSkip:false 
          } 
        }] 
    } 
  } 
}); 
console.log(titles) 
console.log(dom_gross) 
console.log(wrld_gross) 
console.log(budget)