import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Filter from './components/Filter';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';
import InfoMovie from './components/InfoMovie';

function App() {


  const [moviesList, setMoviesList] = useState([
    
 {
    id: Math.random(),
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81JhFaZMwJL._SY445_.jpg',
    rating: 4,
    name: "The Notebook",
    date: '2004',
    type: 'Romance | Drame',
    description:
      "Two young lovers are torn a part by war and class differences in the 1940's",
  },
  {
    id: Math.random(),
    image:
      'https://i.pinimg.com/564x/bf/7f/98/bf7f982e9557ceeda99e615eebc33994.jpg',
    rating: 5,
    name: 'The Pursuit of Happyness',
    date: '2006',
    type: 'drame',
    description:
      ' A determined father makes his way from the streets to success in the business world . Giving up ? Not an option',
  },
  {
    id: Math.random(),
    image:
      'https://i.pinimg.com/564x/86/29/c9/8629c9b88e49c835fa2171e4c2f88129.jpg',
    rating: 4,
    name: 'A beatiful mind',
    date: '2001',
    type: 'Drame | Romance',
    description:
      'In a decades-spanning biopic,brilliant mathematician John Forbes Nash Jr.struggles with schizophrenia while making history in the field.',
  },
  {
    id: Math.random(),
    image:
      'https://i.pinimg.com/564x/f1/75/32/f17532a0a1aabb90786388a402faf318.jpg',
    rating: 4,
    name: 'The curious case of Benjamin Button',
    date: '2008',
    type: 'Romance | Fantasy ',
    description:
      'A new Orlean baby is born an old man.An old man dies a tiny baby.In between is an unbelievable life',
  },
  {
    id: Math.random(),
    image:
      'https://i.pinimg.com/564x/f8/d5/ef/f8d5eff7efa99fbe4accd9294bbf9bf6.jpg',
    rating: 3,
    name: 'The Theory of EVERYTHING',
    date: '2014',
    type: ' Romance | Drame ',
    description:
      'Thanks to the power of love , one of the modern world greatest minds endures ',
  },
  
 ]);

  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);
  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };



  return (
    <BrowserRouter>
    <div className="App">
    

    <Route
          path="/movie/:Tiltle"
          render={(props) => <InfoMovie {...props} moviesList={moviesList} />}
        />

<Route
          path="/"
          render={() => (
            <>


      <Filter
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>

      </>

)}
target="_blank"
/>

      
    </div>
    </BrowserRouter>
  );
}

export default App;
