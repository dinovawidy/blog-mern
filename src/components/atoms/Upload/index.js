import React from 'react';
import { PrevDumy } from '../../../assets';
import './upload.scss';

const Upload = () => {
  return (
    <div className="upload">
        <img className="preview" src={PrevDumy} alt="preview" />
        <input type="file" />
    </div>
  )
}

export default Upload