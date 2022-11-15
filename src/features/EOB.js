import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEob } from 'store/slices/flexpa';

export const EOB = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.flexpa.eob);
  useEffect(() => {
    dispatch(fetchEob());
  }, [dispatch]);
  return (
    <div>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </div>
  );
};

export default EOB;
