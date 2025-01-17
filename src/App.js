import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CounterModernRedux } from './components/divers/CounterModernRedux';
import Dashboard from './components/Dashboard';
import DashboardContainer from './components/dashboard/DashboardContainer';
import Formulaire from './components/formulaires/Formulaire';
import FormulaireMuiContainer from './components/FormulaireMuiContainer';
import FormulaireFormik from './components/FormulaireFormik';
import MonComposant from './components/MonComposant';
import Tableau from './components/Tableau';
import TableauContainer from './components/TableauContainer';
import TableauDataGrid from './components/TableauDataGrid';
import TableauDatatables from './components/TableauDatatables';

const App = () => {

  return <>
    <Routes>
      <Route path='formulaire' element={<Formulaire />} />
      <Route path='formulaire-redux' element={<FormulaireMuiContainer />} />
      <Route path='tableau-redux' element={<TableauContainer />} />
      <Route path='dashboard-redux' element={<DashboardContainer />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='demo' element={<MonComposant />} />
      <Route path='tableau' element={<Tableau />} />
      <Route path='tableau-datatables' element={<TableauDatatables />} />
      <Route path='tableau-datagrid' element={<TableauDataGrid />} />
      <Route path='formulaire-formik' element={<FormulaireFormik />} />
      <Route path='compteur' element={<CounterModernRedux />} />
    </Routes>
  </>
    ;
}

export default App;
