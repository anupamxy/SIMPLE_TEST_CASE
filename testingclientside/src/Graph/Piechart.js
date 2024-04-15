import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { useLocation } from 'react-router-dom';
import '../styles/graph.css';
import { useEffect } from 'react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Piechart = () => {
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
  const dataPoints = state.testcasecount.map((label, index) => ({
    y: state.testcase[index],
    label: label,
  }));
  const dataPoints2 = state.dates.map((label, index) => ({
    y: state.testcase[index],
    label: label,
  }));
  const dataPoints3 = state.testcasecount.map((date, index) => ({
    y: state.reviewreport[index],
    label: new Date(date).toLocaleDateString(),
  }));
  
  


  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Yours Expenses report"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: dataPoints
    }]
  }
  const options1 = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Yours Bill report"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: dataPoints2
    }]
  }
  const options2 = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Yours Datewise report"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: dataPoints3
    }]
  }

  return (
    <div className='chart'>
      <CanvasJSChart className="pie" options={options} />
      <CanvasJSChart  className="pie" options={options1} />
      <CanvasJSChart  className="pie" options={options2} />
    </div>
  );
}

export default Piechart;