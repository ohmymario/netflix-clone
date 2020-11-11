import React from 'react';
import { useContent } from '../hooks';

const Browse = () => {
  const { series } = useContent('series');
  const { films } = useContent('films');
  console.log(series);
  console.log(films);
  return <p>Hello from the browse page</p>;
};
export default Browse;
