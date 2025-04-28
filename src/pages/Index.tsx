
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import DailyReportForm from '../components/DailyReportForm';
import PastReports from '../components/PastReports';
import ReportDetail from '../components/ReportDetail';
import ErrorPage from '../components/ErrorPage';

const Index = () => {
  return (
    <Login />
  );
};

export default Index;
