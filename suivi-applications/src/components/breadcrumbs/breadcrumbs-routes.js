import React from 'react';
import FormulaireContainer from '../FormulaireContainer';
import TableauContainer from '../TableauContainer';
import Accueil from '../Accueil';
import Dashboard from '../DashboardContainer';
import MonComposant from '../MonComposant';
import TableauDatatables from '../TableauDatatables';
import FormulaireFormik from '../FormulaireFormik';
import DashboardContainer from '../DashboardContainer';
import TableauDataGrid from '../TableauDataGrid';

export const routes = [
    {
        path: '/',
        element: <Accueil />,
        breadcrumb: 'Accueil'
    },
    {
        path: 'formulaire-redux',
        element: <FormulaireContainer />,
        breadcrumb: 'Formulaire redux'
    },
    {
        path: 'tableau-redux',
        element: <TableauContainer />,
        breadcrumb: 'Tableau redux'
    },
    {
        path: 'dashboard-redux',
        element: <DashboardContainer />,
        breadcrumb: 'Dashboard redux'
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        breadcrumb: 'Dashboard'
    },
    {
        path: 'demo',
        element: <MonComposant />,
        breadcrumb: 'Mon composant'
    },
    {
        path: 'tableau-datatables',
        element: <TableauDatatables />,
        breadcrumb: 'Tableau Datatables'
    },
    {
        path: 'tableau-datagrid',
        element: <TableauDataGrid />,
        breadcrumb: 'Tableau Datagrid'
    },
    {
        path: 'formulaire-formik',
        element: <FormulaireFormik />,
        breadcrumb: 'Formulaire Formik'
    },
];
