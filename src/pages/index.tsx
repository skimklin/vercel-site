import React from "react";
import { useRequest } from 'ahooks';
import axios from 'axios';

export default function HomePage() {
  const { data } = useRequest(() => axios.get('/api/getDescription'));

  return (
    <div>
      <h2>Welcome to umi!</h2>
      {data?.data}
    </div>
  );
}
