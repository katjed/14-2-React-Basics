/*
var element = React.createElement('div', {}, 'Hello world!');
ReactDOM.render(element, document.getElementById('app'));
*/
/*
var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {},
			React.createElement('li', {},
				React.createElement('h2', {}, 'Harry Potter'),
				React.createElement('p', {}, 'Film o czarodzieju')
			),
			React.createElement('li', {},
        		React.createElement('h2', {}, 'Król Lew'),
        		React.createElement('p', {}, 'Film o królu sawanny')
        	)
        )
    );	

ReactDOM.render(element, document.getElementById('app'));
*/

var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: './images/harry.jpg'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: './images/lew.jpg'
  },
  {
  	id: 3,
  	title: 'Piraci z Karaibów',
  	desc: 'Film o piratach',
  	img: './images/piraci.jpeg'
  },
  {
  	id: 4,
  	title: 'Titanic',
  	desc: 'Film o Titanicu',
  	img: './images/titanic.jpg'
  }  
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('img', {src: movie.img}),
		React.createElement('p', {}, movie.desc),
	);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));