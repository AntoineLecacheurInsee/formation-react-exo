import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import DashboardContainer from './components/DashboardContainer';
import FormulaireContainer from './components/FormulaireContainer';
import FormulaireFormik from './components/FormulaireFormik';
import MonComposant from './components/MonComposant';
import TableauContainer from './components/TableauContainer';
import TableauDataGrid from './components/TableauDataGrid';
import TableauDatatables from './components/TableauDatatables';
import Accueil from './components/Accueil';
import WrapperPage from './components/WrapperPage';

const App = () => {

  return <WrapperPage>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path='formulaire-redux' element={<FormulaireContainer />} />
      <Route path='tableau-redux' element={<TableauContainer />} />
      <Route path='dashboard-redux' element={<DashboardContainer />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='demo' element={<MonComposant />} />
      <Route path='tableau-datatables' element={<TableauDatatables />} />
      <Route path='tableau-datagrid' element={<TableauDataGrid />} />
      <Route path='formulaire-formik' element={<FormulaireFormik />} />
    </Routes>
  </WrapperPage>
}

export default App;
