import * as React from 'react';
import { useState, useEffect } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { supabase } from '../lib/createSupabaseClient';

// mapboxのトークン
const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useAirport() {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('../api/airport', fetcher, { refreshInterval: 1000 });
  console.log(data);
  return {
    airport: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function App() {
  const { airport, isLoading, isError } = useAirport();

  if (isLoading) return <p>ローディング</p>;
  if (isError) return <p>エラー</p>;
  return <></>;
}
//   // 初期値nullにしない！！全ての空港情報
//   const [airportData, setAirportData] = useState([]);
//   // すべての空港の情報取得
//   useEffect(() => {
//     getAirportData();
//   }, []);

//   // ここからSupabaseに接続
//   const getAirportData = async () => {
//     const { data, error } = await supabase.from('airport').select();
//     setAirportData(data);
//   };

//   // popupInfo
//   const [popupInfo, setPopupInfo] = useState(null);

//   // 行先空港リスト
//   const [toAirportLists, setToAirportLists] = useState([]);

//   // 行先空港リストの表示、非表示
//   const [isRevealPins, setIsRevealPins] = useState(false);
//   // 行先空港リストの表示、非表示、popupInfoが変わったらfalseにする
//   useEffect(() => {
//     setIsRevealPins(false);
//   }, [popupInfo]);

//   // クリックしたピンをfromAirportに設定
//   const getToAirportData1 = async () => {
//     // 路線テーブルからfromAirportに一致する路線情報を取り出す
//     const fromAirport = popupInfo.id;
//     const { data, error } = await supabase.from('route').select().eq('from', fromAirport);
//     return data;
//   };

//   //  空港テーブルから getToairportdata1でつくった路線情報から行先空港情報を取り出す
//   const getToAirportData2 = async () => {
//     const data = await getToAirportData1();
//     // 行先空港情報
//     let toAirportListsId = [];

//     for (let i = 0; i < data.length; i++) {
//       toAirportListsId.push(airportData.find(({ id }) => id === data[i].to));
//     }
//     // toAirportListsIdにセットする
//     setToAirportLists(toAirportListsId);
//   };

//   //  ボタン押したら行先空港のピンを表示する */

//   const onClickGetToAirportData = async () => {
//     setIsRevealPins;
//     await getToAirportData2();
//     setIsRevealPins(true);
//   };

//   const [toAirportInfo, setToAirportInfo] = useState(null);
//   // 行先空港リストの表示、非表示、popupInfoが変わったらfalseにする
//   useEffect(() => {
//     setToAirportInfo(false);
//   }, [popupInfo]);
// }
