import React from 'react'
import MainContent from './components/MainContent'

export default function Home() {
  const selectedItem = 'Mis tareas';

  return (<MainContent selectedItem={selectedItem} />);
};

