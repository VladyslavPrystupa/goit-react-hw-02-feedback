// import { Component } from 'react';
import { StatsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsList>
      <li>Good: {good} </li>
      <li>Neutral: {neutral} </li>
      <li>Bad: {bad}</li>
      <li>Tolal: {total()}</li>
      <li>Positive feedback: {positivePercentage()}% </li>
    </StatsList>
  );
};
