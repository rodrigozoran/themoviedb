import React from 'react';
import { useParams } from 'react-router-dom';

import '../details/styles.css'

export default function DetailsPage() {

  const {id} = useParams();

  return (
    <div>Funcionando</div>
  )
}
