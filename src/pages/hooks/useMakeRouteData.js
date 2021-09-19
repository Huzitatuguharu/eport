import useSWR, { SWRConfig } from 'swr';

// /* ==========================================================================
//   airportData;の取得
//   ========================================================================== */

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useCompany = () => {
  // useSWR(アクセス先,関数,オプション)
  const { data, error } = useSWR('./api/company', fetcher, { revalidateOnMount: true });
  return {
    companyData: data,
    isLoading: !error && !data,
    isError: error,
  };
};








const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 4 };

console.log(result);
console.log(result);

// => { a: 4, b: 2, c: 3 }
export const useMakeRouteData = () => {


  const { airportData } = useAirport();
  const { companyData } = useCompany();
  const { routeData } = useRoute();

  const { selectedAirports, onClick } = props;
  let toAirportsData=[];


  let data = routeData.filter(({ from }) => from === fromAirport.id);

  for (let i = 0; i < data.length; i++) {

    if (data[i].to == airportData.id) {
      const result = { ...data, ...airportData };
    }
  }

  for (let i = 0; i < selectedAirports.length; i++) {
    user["language"] = "jp";

    toAirportsData.push(airportData.find(({ id }) => id === selectedAirports[i].to));
    const {
    fromAirport,
    setFromAirport,
    selectedAirports,
    setSelectedAirports,
    isRevealPins,
    setIsRevealPins,
  } = props;


  //  空港テーブルから行先空港情報を取り出す



  const getToAirportData = () => {
    // 路線テーブルの検索
    setSelectedAirports(data);
    setIsRevealPins(true);
  };


    var user = {
  id: 1,
  name: "name",
};

user.country = "Japan";
user["language"] = "jp";

console.log("user", user);

// user Object {id: 1, name: "name", country: "Japan", language: "jp"}

const districtList=[
    {id:'1234blah',companyId:'09871345', districtName:'abc1'},
    {id:'2341blah',companyId:'87134590', districtName:'abc2'},
    {id:'3412blah',companyId:'09134587', districtName:'abc3'},
    ]

    data
const companyList=[
    {id:'09871345',companyName:'CompanyOne', info:'some'},
    {id:'87134590',companyId:'CompanyTwo', info:'stuff'},
    {id:'09134587',companyId:'CompanyThree', info:'todo'},
    ]

airportData

    const result = districtList.map(item => {
      const company = companyList.find(c => c.id === item.companyId);
      return { ...item, [company.companyName ? 'companyName' : 'companyId']: company.companyName ? company.companyName : company.companyId, info: company.info }
    });
    console.log(result)

    const result= data.map(item=> {
    const airport= airportData.find(c=> c.id=== item.to);
    return {...item, [airport.companyName ? 'companyName' : 'companyId']: company.companyName ? company.companyName : company.companyId, info: company.info }
})
console.log(result)
