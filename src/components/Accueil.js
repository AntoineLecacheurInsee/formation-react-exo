import { List, ListItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Accueil() {

    return <List>
        <ListItem><Link to="formulaire-redux">Formulaire redux</Link></ListItem>
        <ListItem><Link to="tableau-redux">Tableau redux</Link></ListItem>
        <ListItem><Link to="dashboard-redux">Dashboard redux</Link></ListItem>
        <ListItem><Link to="dashboard">Dashboard</Link></ListItem>
        <ListItem><Link to="demo">Demo</Link></ListItem>
        <ListItem><Link to="tableau-datatables">Tableau datatables</Link></ListItem>
        <ListItem><Link to="tableau-datagrid">Tableau datagrid</Link></ListItem>
        <ListItem><Link to="formulaire-formik">Formulaire formik</Link></ListItem>
    </List>
}