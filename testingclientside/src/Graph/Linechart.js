import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useLocation } from 'react-router-dom';
import '../styles/graph.css'

import Layout from './../components/Layouts/Layout';

const Linechart = () => {
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (state) {
      const { testcaseid,testcase,createdby,testcasecount,reviewreport,dates } = state;
     

      console.log('testcaseid:', testcaseid);
      console.log('testcase:', testcase);
      
      // Format dates before logging
      const formattedDates = dates.map(date => new Date(date).toLocaleDateString());

      console.log('Formatted Dates:', formattedDates);
      console.log('createdby:', createdby);
      console.log('testcasecount',testcasecount);
      console.log('reviewreport',reviewreport);

      // Additional logic or processing here
    }
  }, [state]);

  const data = {
    labels: state ? state.testcase : [],
    datasets: [
      {
        label: 'testcase vs testcasecount',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: state ? state.testcasecount : [],
      },
    ],
  };

  const data2 = {
    labels: state ? state.dates.map(date => new Date(date).toLocaleDateString()) : [],
    datasets: [
      {
        label: 'createdBy vs testcasecount',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: state ? state.testcasecount : [],
      },
    ],
  };

  const data3 = {
    labels: state ? state.reviewreport : [],
    datasets: [
      {
        label: 'reviewreport vs testcasecount',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: state ? state.testcasecount : [],
      },
    ],
  };



  return (
    <>
    <Layout>
      <div className='chart'>
        <h2 className='charthead'>Expenses vs Prices Line Chart</h2>
        <Line className='value' data={data} />
        <h2 className='charthead'>Date vs Prices Line Chart</h2>
        <Line className='value' data={data2} />
        <h2   className='charthead'>Bills vs prices Line Chart</h2>
        <Line className='value' data={data3} />
       
      </div>
      </Layout>
    </>
  );
};

export default Linechart;