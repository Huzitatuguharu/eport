import { useAirport, useRoute, useCompany } from './useConnectSupabase';

//  空港テーブルから行先空港情報を取り出す
export const GetToAirportData = (props) => {
  // 出発空港のidを定数に設定する
  const { fromAirportId } = props;
  const routeData = useRoute();
  const airportData = useAirport();

  // const fromAirportId = fromAirport.id;
  // 路線テーブルの検索
  const data = routeData.filter(({ from }) => from === fromAirportId);
  setSelectedRouteData(data);

  // 行先空港情報
  let toAirportsData = [];
  for (let i = 0; i < data.length; i++) {
    toAirportsData.push(airportData.find(({ id }) => id === data[i].to));
  }
  // toAirportListsIdにセットする
  setToAirportLists(toAirportsData);

   return {
     toAirportsData: toAirportsData,
     isLoading: !error && !data,
     isError: error,
   };
};

//  ボタン押したら行先空港のピンを表示する */

const onClickGetToAirportData = () => {
  getToAirportData();
  setIsRevealPins(true);
};

const onClickReset = () => {
  setFromAirport(null);
};
