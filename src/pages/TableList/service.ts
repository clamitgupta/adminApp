import request from '@/utils/request';

export async function queryRule() {
  const resp:any = await request('http://127.0.0.1:3000/api/list');
  return {
    data: resp,
    total: resp.length,
    success: true,
  };
}

