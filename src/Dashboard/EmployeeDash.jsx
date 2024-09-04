import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Header from '../components/DashboardHeader/Header';
import ErpCard from '../components/Cards/ErpCard';


  
const EmployeeDash = () => {
    return (
        <>
        <Header />
        <ErpCard title="Employee" totalEmp="500"></ErpCard>
        <ErpCard title="Employee" totalEmp="500"></ErpCard>
        <ErpCard title="Employee" totalEmp="500"></ErpCard>
        
        </> 
    );
}; 

export default EmployeeDash;
