import React,{ useState, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'
import ReactApexChart from "react-apexcharts";


import './index.css'

const WorldGraph = () => {

          
  const [worldData, setWorldData] = useState();
  const [cases, setCases] = useState();

  const countryOptions =[
    { key: 'AF', value: 'AFG', flag: 'af', text: 'Afghanistan' },
    { key: 'AL', value: 'ALB', flag: 'al', text: 'Albania' },
    { key: 'DZ', value: 'DZA', flag: 'dz', text: 'Algeria' },
    { key: 'AD', value: 'AND', flag: 'ad', text: 'Andorra' },
    { key: 'AO', value: 'AGO', flag: 'ao', text: 'Angola' },
    { key: 'AR', value: 'ARG', flag: 'ar', text: 'Antigua and Barbuda' },
    { key: 'AM', value: 'ARM', flag: 'am', text: 'Armenia' },
    { key: 'AU', value: 'AUS', flag: 'au', text: 'Australia' },
    { key: 'AT', value: 'AUT', flag: 'at', text: 'Austria' },
    { key: 'AZ', value: 'AZE', flag: 'az', text: 'Azerbaijan' },
    { key: 'BS', value: 'BHS', flag: 'bs', text: 'Bahamas' },
    { key: 'BH', value: 'BHR', flag: 'bh', text: 'Bahrain' },
    { key: 'BD', value: 'BGD', flag: 'bd', text: 'Bangladesh' },
    { key: 'BB', value: 'BRB', flag: 'bb', text: 'Barbados' },
    { key: 'BY', value: 'BLR', flag: 'by', text: 'Belarus' },
    { key: 'BE', value: 'BEL', flag: 'be', text: 'Belgium' },
    { key: 'BZ', value: 'BLZ', flag: 'bz', text: 'Belize' },
    { key: 'BJ', value: 'BEN', flag: 'bj', text: 'Benin' },
    { key: 'BM', value: 'BMU', flag: 'bm', text: 'Bermuda' },
    { key: 'BT', value: 'BTN', flag: 'bt', text: 'Bhutan' },
    { key: 'BO', value: 'BOL', flag: 'bo', text: 'Bolivia' },
    { key: 'BW', value: 'BWA', flag: 'bw', text: 'Bosnia and Herzegovina' },
    { key: 'BR', value: 'BRA', flag: 'br', text: 'Brazil' },
    { key: 'BN', value: 'BRN', flag: 'bn', text: 'Brunei Darussalam' },
    { key: 'BG', value: 'BGR', flag: 'bg', text: 'Bulgaria' },
    { key: 'BF', value: 'BFA', flag: 'bf', text: 'Burkina Faso' },
    { key: 'BI', value: 'BDI', flag: 'bi', text: 'Burundi' },
    { key: 'CV', value: 'CPV', flag: 'cv', text: 'Cabo Verde' },
    { key: 'KH', value: 'KHM', flag: 'kh', text: 'Cambodia' },
    { key: 'CM', value: 'CMR', flag: 'cm', text: 'Cameroon' },
    { key: 'CA', value: 'CAN', flag: 'ca', text: 'Canada' },
    { key: 'CF', value: 'CAF', flag: 'cf', text: 'Central African Republic' },
    { key: 'TD', value: 'TCD', flag: 'td', text: 'Chad' },
    { key: 'CL', value: 'CHL', flag: 'cl', text: 'Chile' },
    { key: 'CN', value: 'CHN', flag: 'cn', text: 'China' },
    { key: 'CO', value: 'COL', flag: 'co', text: 'Colombia' },
    { key: 'KM', value: 'COM', flag: 'km', text: 'Comoros' },
    { key: 'CD', value: 'COD', flag: 'cd', text: 'Congo' },
    { key: 'CG', value: 'COG', flag: 'cg', text: 'Congo' },
    { key: 'CR', value: 'CIV', flag: 'cr', text: 'Costa Rica' },
    { key: 'CI', value: 'ALB', flag: 'ci', text: `Côte d'Ivoire` },
    { key: 'HR', value: 'HRV', flag: 'hr', text: 'Croatia' },
    { key: 'CU', value: 'CUB', flag: 'cu', text: 'Cuba' },
    { key: 'CY', value: 'CYP', flag: 'cy', text: 'Cyprus' },
    { key: 'CZ', value: 'CZE', flag: 'cz', text: 'Czechia' },
    { key: 'DK', value: 'DNK', flag: 'dk', text: 'Denmark' },
    { key: 'DJ', value: 'DJI', flag: 'dj', text: 'Djibouti' },
    { key: 'DM', value: 'DMA', flag: 'dm', text: 'Dominica' },
    { key: 'DO', value: 'DOM', flag: 'do', text: 'Dominican Republic' },
    { key: 'EC', value: 'ECU', flag: 'ec', text: 'Ecuador' },
    { key: 'EG', value: 'EGY', flag: 'eg', text: 'Egypt' },
    { key: 'SV', value: 'SLV', flag: 'sv', text: 'El Salvador' },
    { key: 'GQ', value: 'GNQ', flag: 'gq', text: 'Equatorial Guinea' },
    { key: 'ER', value: 'ERI', flag: 'er', text: 'Eritrea' },
    { key: 'EE', value: 'EST', flag: 'ee', text: 'Estonia' },
    { key: 'SZ', value: 'SWZ', flag: 'sz', text: 'Eswatini' },
    { key: 'ET', value: 'ETH', flag: 'et', text: 'Ethiopia' },
    { key: 'FJ', value: 'FJI', flag: 'fj', text: 'Fiji' },
    { key: 'FI', value: 'FIN', flag: 'fi', text: 'Finland' },
    { key: 'FR', value: 'FRA', flag: 'fr', text: 'France' },
    { key: 'GA', value: 'GAB', flag: 'ga', text: 'Gabon' },
    { key: 'GM', value: 'GMB', flag: 'gm', text: 'Gambia' },
    { key: 'GE', value: 'GEO', flag: 'ge', text: 'Georgia' },
    { key: 'DE', value: 'DEU', flag: 'de', text: 'Germany' },
    { key: 'GH', value: 'GHA', flag: 'gh', text: 'Ghana' },
    { key: 'GR', value: 'GRC', flag: 'gr', text: 'Greece' },
    { key: 'GL', value: 'GRL', flag: 'gl', text: 'Greenland' },
    { key: 'GT', value: 'GTM', flag: 'gt', text: 'Guatemala' },
    { key: 'GN', value: 'GIN', flag: 'gn', text: 'Guinea' },
    { key: 'GW', value: 'GNB', flag: 'gw', text: 'Guinea-Bissau' },
    { key: 'GY', value: 'GUY', flag: 'gy', text: 'Guyana' },
    { key: 'HT', value: 'HTI', flag: 'ht', text: 'Haiti' },
    { key: 'HK', value: 'HKG', flag: 'hk', text: 'Hong Kong' },
    { key: 'HU', value: 'HUN', flag: 'hu', text: 'Hungary' },
    { key: 'IS', value: 'ISL', flag: 'is', text: 'Iceland' },
    { key: 'IN', value: 'IND', flag: 'in', text: 'India' },
    { key: 'ID', value: 'IDN', flag: 'id', text: 'Indonesia' },
    { key: 'IR', value: 'IRN', flag: 'ir', text: 'Iran' },
    { key: 'IQ', value: 'IRQ', flag: 'iq', text: 'Iraq' },
    { key: 'IE', value: 'IRL', flag: 'ie', text: 'Ireland' },
    { key: 'IL', value: 'ISR', flag: 'il', text: 'Israel' },
    { key: 'IT', value: 'ITA', flag: 'it', text: 'Italy' },
    { key: 'JM', value: 'JAM', flag: 'jm', text: 'Jamaica' },
    { key: 'JP', value: 'JPN', flag: 'jp', text: 'Japan' },
    { key: 'JO', value: 'JOR', flag: 'jo', text: 'Jordan' },
    { key: 'KZ', value: 'KAZ', flag: 'kz', text: 'Kazakhstan' },
    { key: 'KE', value: 'KEN', flag: 'ke', text: 'Kenya' },
    { key: 'KI', value: 'KIR', flag: 'ki', text: 'Kiribati' },
    { key: 'KP', value: 'PRK', flag: 'kp', text: 'Korea'},
    { key: 'KR', value: 'KOR', flag: 'kr', text: 'Korea' },
    { key: 'KW', value: 'KWT', flag: 'kw', text: 'Kuwait' },
    { key: 'KG', value: 'KGZ', flag: 'kg', text: 'Kyrgyzstan' },
    { key: 'LA', value: 'LAO', flag: 'la', text: `Lao People's Democratic Republic` },
    { key: 'LV', value: 'LVA', flag: 'lv', text: 'Latvia' },
    { key: 'LB', value: 'LBN', flag: 'lb', text: 'Lebanon' },
    { key: 'LS', value: 'LSO', flag: 'ls', text: 'Lesotho' },
    { key: 'LR', value: 'LBR', flag: 'lr', text: 'Liberia' },
    { key: 'LY', value: 'LBY', flag: 'ly', text: 'Libya' },
    { key: 'LI', value: 'LIE', flag: 'li', text: 'Liechtenstein' },
    { key: 'LT', value: 'LTU', flag: 'lt', text: 'Lithuania' },
    { key: 'LU', value: 'LUX', flag: 'lu', text: 'Luxembourg' },
    { key: 'MK', value: 'MKD', flag: 'mk', text: 'North Macedonia' },
    { key: 'MG', value: 'MDG', flag: 'mg', text: 'Madagascar' },
    { key: 'MW', value: 'MWI', flag: 'mw', text: 'Malawi' },
    { key: 'MY', value: 'MYS', flag: 'my', text: 'Malaysia' },
    { key: 'MV', value: 'MDV', flag: 'mv', text: 'Maldives' },
    { key: 'ML', value: 'MLI', flag: 'ml', text: 'Mali' },
    { key: 'MT', value: 'MLT', flag: 'mt', text: 'Malta' },
    { key: 'MH', value: 'MHL', flag: 'mh', text: 'Marshall Islands' },
    { key: 'MR', value: 'MRT', flag: 'mr', text: 'Mauritania' },
    { key: 'MU', value: 'MUS', flag: 'mu', text: 'Mauritius' },
    { key: 'MX', value: 'MEX', flag: 'mx', text: 'Mexico' },
    { key: 'FM', value: 'FSM', flag: 'fm', text: 'Micronesia' },
    { key: 'MD', value: 'MDA', flag: 'md', text: 'Moldova' },
    { key: 'MC', value: 'MCO', flag: 'mc', text: 'Monaco' },
    { key: 'MN', value: 'MNG', flag: 'mn', text: 'Mongolia' },
    { key: 'ME', value: 'MNE', flag: 'me', text: 'Montenegro' },
    { key: 'MA', value: 'MAR', flag: 'ma', text: 'Morocco' },
    { key: 'MZ', value: 'MOZ', flag: 'mz', text: 'Mozambique' },
    { key: 'MM', value: 'MMR', flag: 'mm', text: 'Myanmar' },
    { key: 'NA', value: 'NAM', flag: 'na', text: 'Namibia' },
    { key: 'NR', value: 'NRU', flag: 'nr', text: 'Nauru' },
    { key: 'NP', value: 'NPL', flag: 'np', text: 'Nepal' },
    { key: 'NL', value: 'NLD', flag: 'nl', text: 'Netherlands' },
    { key: 'NZ', value: 'NZL', flag: 'nz', text: 'New Zealand' },
    { key: 'NI', value: 'NIC', flag: 'ni', text: 'Nicaragua' },
    { key: 'NE', value: 'NER', flag: 'ne', text: 'Niger' },
    { key: 'NG', value: 'NGA', flag: 'ng', text: 'Nigeria' },
    { key: 'NO', value: 'NOR', flag: 'no', text: 'Norway' },
    { key: 'OM', value: 'OMN', flag: 'om', text: 'Oman' },
    { key: 'PK', value: 'PAK', flag: 'pk', text: 'Pakistan' },
    { key: 'PW', value: 'PLW', flag: 'pw', text: 'Palau' },
    { key: 'PS', value: 'PSE', flag: 'ps', text: 'Palestine, State of' },
    { key: 'PA', value: 'PAN', flag: 'pa', text: 'Panama' },
    { key: 'PG', value: 'PNG', flag: 'pg', text: 'Papua New Guinea' },
    { key: 'PY', value: 'PRY', flag: 'py', text: 'Paraguay' },
    { key: 'PL', value: 'POL', flag: 'pl', text: 'Poland' },
    { key: 'PT', value: 'PRT', flag: 'pt', text: 'Portugal' },
    { key: 'QA', value: 'QAT', flag: 'qa', text: 'Qatar' },
    { key: 'RO', value: 'ROU', flag: 'ro', text: 'Romania' },
    { key: 'RU', value: 'RUS', flag: 'ru', text: 'Russian Federation' },
    { key: 'RW', value: 'RWA', flag: 'rw', text: 'Rwanda' },
    { key: 'KN', value: 'KNA', flag: 'kn', text: 'Saint Kitts and Nevis' },
    { key: 'LC', value: 'LCA', flag: 'lc', text: 'Saint Lucia' },
    { key: 'VC', value: 'VCT', flag: 'vc', text: 'Saint Vincent and the Grenadines' },
    { key: 'WS', value: 'WSM', flag: 'ws', text: 'Samoa' },
    { key: 'SM', value: 'SMR', flag: 'sm', text: 'San Marino' },
    { key: 'ST', value: 'STP', flag: 'st', text: 'Sao Tome and Principe' },
    { key: 'SA', value: 'SAU', flag: 'sa', text: 'Saudi Arabia' },
    { key: 'SN', value: 'SEN', flag: 'sn', text: 'Senegal' },
    { key: 'RS', value: 'SRB', flag: 'rs', text: 'Serbia' },
    { key: 'SC', value: 'SYC', flag: 'sc', text: 'Seychelles' },
    { key: 'SL', value: 'SLE', flag: 'sl', text: 'Sierra Leone' },
    { key: 'SG', value: 'SGP', flag: 'sg', text: 'Singapore' },
    { key: 'SK', value: 'SVK', flag: 'sk', text: 'Slovakia' },
    { key: 'SI', value: 'SVN', flag: 'si', text: 'Slovenia' },
    { key: 'SB', value: 'SLB', flag: 'sb', text: 'Solomon Islands' },
    { key: 'SO', value: 'SOM', flag: 'so', text: 'Somalia' },
    { key: 'ZA', value: 'ZAF', flag: 'za', text: 'South Africa' },
    { key: 'SS', value: 'SSD', flag: 'ss', text: 'South Sudan' },
    { key: 'ES', value: 'ESP', flag: 'es', text: 'Spain' },
    { key: 'LK', value: 'LKA', flag: 'lk', text: 'Sri Lanka' },
    { key: 'SD', value: 'SDN', flag: 'sd', text: 'Sudan' },
    { key: 'SR', value: 'SUR', flag: 'sr', text: 'Suriname' },
    { key: 'SE', value: 'SWE', flag: 'se', text: 'Sweden' },
    { key: 'CH', value: 'CHE', flag: 'ch', text: 'Switzerland' },
    { key: 'SY', value: 'SYR', flag: 'sy', text: 'Syrian Arab Republic' },
    { key: 'TJ', value: 'TJK', flag: 'tj', text: 'Tajikistan' },
    { key: 'TZ', value: 'TZA', flag: 'tz', text: 'Tanzania' },
    { key: 'TH', value: 'THA', flag: 'th', text: 'Thailand' },
    { key: 'TL', value: 'TLS', flag: 'tl', text: 'Timor-Leste' },
    { key: 'TG', value: 'TGO', flag: 'tg', text: 'Togo' },
    { key: 'TO', value: 'TON', flag: 'to', text: 'Tonga' },
    { key: 'TT', value: 'TTO', flag: 'tt', text: 'Trinidad and Tobago' },
    { key: 'TN', value: 'TUN', flag: 'tn', text: 'Tunisia' },
    { key: 'TR', value: 'TUR', flag: 'tr', text: 'Turkey' },
    { key: 'TM', value: 'TKM', flag: 'tm', text: 'Turkmenistan' },
    { key: 'TV', value: 'TUV', flag: 'tv', text: 'Tuvalu' },
    { key: 'UG', value: 'UGA', flag: 'ug', text: 'Uganda' },
    { key: 'UA', value: 'UKR', flag: 'ua', text: 'Ukraine' },
    { key: 'AE', value: 'ARE', flag: 'ae', text: 'United Arab Emirates' },
    { key: 'GB', value: 'GBR', flag: 'gb', text: 'United Kingdom of Great Britain and Northern Ireland' },
    { key: 'US', value: 'USA', flag: 'us', text: 'United States of America' },
    { key: 'UY', value: 'URY', flag: 'uy', text: 'Uruguay' },
    { key: 'UZ', value: 'UZB', flag: 'uz', text: 'Uzbekistan' },
    { key: 'VU', value: 'VUT', flag: 'vu', text: 'Vanuatu' },
    { key: 'VE', value: 'VEN', flag: 've', text: 'Venezuela' },
    { key: 'VN', value: 'VNM', flag: 'vn', text: 'VietNam' },
    { key: 'YE', value: 'YEM', flag: 'ye', text: 'Yemen' },
    { key: 'ZM', value: 'ZMB', flag: 'zm', text: 'Zambia' },
    { key: 'ZW', value: 'ZWE', flag: 'zw', text: 'Zimbabwe' }
    
  ]   
  useEffect(() => {
    axios.get('https://covidapi.info/api/v1/global/count')
          .then((data) => {
            let keys = Object.keys(data.data.result);
            let values = Object.values(data.data.result)
            setWorldData(keys);
            setCases(values)
            console.log("WORLD DATA",values ? values.map(r=>r.confirmed): values)
          });
  }, []);

  

  let series = [
  {
    name: "Confirmed Cases",
    data: cases ? cases.map(r=>r.confirmed): cases
  },
  {
    name: "Confirmed Recoveries",
    data: cases ? cases.map(r=>r.recovered): cases
  },
  {
    name: "Confirmed Deaths",
    data: cases ? cases.map(r=>r.deaths): cases
  },
]
  let optionsGraph = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Graphical Representation',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: worldData? worldData.map((r) => r):worldData,
    }
  }

  const onChange = (e,data) => {
    axios.get(`https://covidapi.info/api/v1/country/${data.value}`)
          .then((data) => {
            // console.log("DATA FROM API****", data)
            let keys = Object.keys(data.data.result);
            let values = Object.values(data.data.result)
            setWorldData(keys);
            setCases(values)
            console.log("WORLD DATA",values ? values.map(r=>r.confirmed): values)
          });
  }

  return ( 
    <>
    <div className="mt-5">
    <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    onChange={onChange}
    options={countryOptions}
  />
    <ReactApexChart options={optionsGraph} series={series} type="line" height={500} />
    </div>
    </>
   );
}
 
export default WorldGraph;


