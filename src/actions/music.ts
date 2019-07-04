import http from '@/axios';
import { GET_CELL_PHONE, GET_BANNER, GET_SONG_URL } from '@/constant/api';



// 任务取消接口改为任务改变
export const get_song_url = async (arg: any) => {
  const { response }: any = await http(`${GET_SONG_URL}?id=${arg}`);
  return response;
};
// 任务取消接口改为任务改变
export const get_banner = async () => {
  const { response }: any = await http(`${GET_BANNER}`);
  return response;
};

// 任务取消接口改为任务改变
export const post_set_settin = async (args: any) => {
  const { response }: any = await http(`${GET_CELL_PHONE}?${args}`);
  return response;
};
