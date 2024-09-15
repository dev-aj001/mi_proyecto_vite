import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import MyFunctions from "./functions/MyFunctions.jsx";
import './index.css'
import MyPromises from './functions/MyPromises.jsx';
import MyPromisesAll from './functions/MyPromisesAll.jsx';
import MyPromisesRace from './functions/MyPromisesRace.jsx';
import MyFetchs from './functions/MyFetchs.jsx';

import PromesasBasicas from './functions/PromesasBasicas.jsx'
import PromesasEnCadena from './functions/PromesasEnCadena.jsx'
import PromesasAll from './functions/PromesasAll.jsx'
import PromesasRace from './functions/PromesasRace.jsx'
import OrigenFetch from './functions/OrigenFetch.jsx'
import FetchPost from './functions/FetchPost.jsx';
import FetchPut from './functions/FetchPut.jsx';
import MyDataTypes from './methods/MyDataTypes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <PromesasBasicas /> */}
    {/* <PromesasEnCadena  /> */}
    {/* <PromesasAll/> */}
    {/* <PromesasRace/> */}
    {/* <OrigenFetch/> */}

    <FetchPost/>
    <FetchPut/>


    {/* <MyDataTypes /> */}
  </StrictMode>,
);