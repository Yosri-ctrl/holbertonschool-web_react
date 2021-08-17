import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';

const CourseList = () => {
  return (
    <table className='C			ourseList'>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={true}
        />
      </thead>
      <tbody>
        <CourseListRow
          textFirstCell='ES6'
          textSecondCell='60'
          isHeader={false}
        />
        <CourseListRow
          textFirstCell='Webpack'
          textSecondCell='20'
          isHeader={false}
        />
        <CourseListRow
          textFirstCell='React'
          textSecondCell='40'
          isHeader={false}
        />
      </tbody>
    </table>
  );
};

export default CourseList;
