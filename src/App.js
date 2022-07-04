import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import WrapperPage from './components/WrapperPage';
import { routes } from './components/breadcrumbs/breadcrumbs-routes';

const App = () => {

  let renderRoutes = useRoutes(routes);

  return <WrapperPage>
    {/* Déclaration "centralisée" des routes */}
    {renderRoutes}

    {/* Déclaration classique des routes
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
      </Routes> */}
  </WrapperPage >
}

export default App;
