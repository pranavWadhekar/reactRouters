import React from 'react';
import { useParams } from 'react-router-dom';
const UserId = () => {
    const {userid}=useParams();
  return (
    <div className='text-center font-bold text-3xl text-orange-700 py-3'>
      User : {userid}
    </div>
  );
};

export default UserId;