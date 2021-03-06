import React, { Profiler, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Home from './Component/Fungsional/Home'
//import Beranda from './Component/Class/Beranda'
//import './Component/Class/Parent'
//import Parent from './Component/Class/Parent';
//import BoostrapComp from './Component/Class/BoostrapComp';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/Homepage';
import AboutComp from './Component/Fungsional/AboutComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Fungsional/TambahComp';
import EditComp from './Component/Fungsional/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContex';
import ProductComp from './Component/Fungsional/ProductComp';
import qity from './Component/Fungsional/qity';
//import CardComp from './Component/Fungsional/CardComp';
//import DetailComp from './Component/Fungsional/DetailComp';

export const keranjangContext= createContext()

//untuk deklarasi fungsi jumlah dan tambah
const initialState = {
  jumlah: 1,
  hargasatuan: 1000,
  hargatotal: 0,
  stock: 35

}

const reducer = (state, action) => {



  switch (action.type) {
      case 'tambah': return {
          ...state,
          jumlah: state.jumlah + 1,
          hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
      }
      case 'kurangi': return {
          ...state,
          jumlah: state.jumlah - 1,
          hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
      }
      default:
          return state

  }
}


const App = () => {

  const[value,setValue] = useState(0)
  const[value,setValue] = useState(0)
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
      <CartContext.Provider value={{value, setValue}}>
        <NavbarComp />
        <keranjangContext.Provider value={{keranjangState: count,keranjangdispatch:dispatch}}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/About" component={AboutComp} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          <Route exact path="/mahasiswa/edit" component={EditComp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/Hooks" component={HooksComp} />
          <Route exact path="/HooksEffects" component={HooksUseEffects} />
          <Route exact path="/product" component={ProductComp} />
          <Route exact path="/qity" component={qity} />

          {/* <Route exact path="/detail/:id" component={DetailComp}/> */}
        </Switch>
        </keranjangContext.Provider>
        
      </CartContext.Provider>
    </BrowserRouter>

  );
}

export default App;
