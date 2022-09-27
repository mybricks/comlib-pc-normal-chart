import { ChartConfigProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  Stack = 'stack'
}
export interface Data {
  config: ChartConfigProps & {
    seriesField?: string;
  };
  subType?: SubTypeEnum;
}

export const InputIds = {
  SetData: 'data'
};

export const MockData = {
  default: [
    {
      xField: '2006 Q3',
      yField: 1,
    },
    {
      xField: '2006 Q4',
      yField: 1.08,
    },
    {
      xField: '2007 Q1',
      yField: 1.17,
    },
    {
      xField: '2007 Q2',
      yField: 1.26,
    },
    {
      xField: '2007 Q3',
      yField: 1.34,
    },
    {
      xField: '2007 Q4',
      yField: 1.41,
    },
    {
      xField: '2008 Q1',
      yField: 1.52,
    },
    {
      xField: '2008 Q2',
      yField: 1.67,
    },
    {
      xField: '2008 Q3',
      yField: 1.84,
    },
    {
      xField: '2008 Q4',
      yField: 2.07,
    },
    {
      xField: '2009 Q1',
      yField: 2.39,
    },
    {
      xField: '2009 Q2',
      yField: 2.71,
    },
    {
      xField: '2009 Q3',
      yField: 3.03,
    },
    {
      xField: '2009 Q4',
      yField: 3.33,
    },
    {
      xField: '2010 Q1',
      yField: 3.5,
    },
    {
      xField: '2010 Q2',
      yField: 3.37,
    },
    {
      xField: '2010 Q3',
      yField: 3.15,
    },
    {
      xField: '2010 Q4',
      yField: 3.01,
    },
    {
      xField: '2011 Q1',
      yField: 2.8,
    },
    {
      xField: '2011 Q2',
      yField: 2.8,
    },
    {
      xField: '2011 Q3',
      yField: 2.84,
    },
    {
      xField: '2011 Q4',
      yField: 2.75,
    },
    {
      xField: '2012 Q1',
      yField: 2.64,
    },
    {
      xField: '2012 Q2',
      yField: 2.55,
    },
    {
      xField: '2012 Q3',
      yField: 2.46,
    },
    {
      xField: '2012 Q4',
      yField: 2.45,
    },
    {
      xField: '2013 Q1',
      yField: 2.57,
    },
    {
      xField: '2013 Q2',
      yField: 2.68,
    },
    {
      xField: '2013 Q3',
      yField: 2.8,
    },
    {
      xField: '2013 Q4',
      yField: 2.89,
    },
    {
      xField: '2014 Q1',
      yField: 2.85,
    },
    {
      xField: '2014 Q2',
      yField: 2.73,
    },
    {
      xField: '2014 Q3',
      yField: 2.54,
    },
    {
      xField: '2014 Q4',
      yField: 2.32,
    },
    {
      xField: '2015 Q1',
      yField: 2.25,
    },
    {
      xField: '2015 Q2',
      yField: 2.33,
    },
    {
      xField: '2015 Q3',
      yField: 2.53,
    },
    {
      xField: '2015 Q4',
      yField: 2.74,
    },
    {
      xField: '2016 Q1',
      yField: 2.76,
    },
    {
      xField: '2016 Q2',
      yField: 2.61,
    },
    {
      xField: '2016 Q3',
      yField: 2.35,
    },
    {
      xField: '2016 Q4',
      yField: 2.11,
    },
    {
      xField: '2017 Q1',
      yField: 2.08,
    },
    {
      xField: '2017 Q2',
      yField: 2.2,
    },
    {
      xField: '2017 Q3',
      yField: 2.38,
    },
    {
      xField: '2017 Q4',
      yField: 2.59,
    },
    {
      xField: '2018 Q1',
      yField: 2.63,
    },
    {
      xField: '2018 Q2',
      yField: 2.67,
    },
    {
      xField: '2018 Q3',
      yField: 2.64,
    },
    {
      xField: '2018 Q4',
      yField: 2.5,
    },
    {
      xField: '2019 Q1',
      yField: 2.31,
    },
    {
      xField: '2019 Q2',
      yField: 2.04,
    },
    {
      xField: '2019 Q3',
      yField: 1.83,
    },
    {
      xField: '2019 Q4',
      yField: 1.71,
    },
    {
      xField: '2020 Q1',
      yField: 1.65,
    },
    {
      xField: '2020 Q2',
      yField: 1.59,
    },
    {
      xField: '2020 Q3',
      yField: 1.58,
    },
  ],
  stack: [
    {
      seriesField: '北美',
      xField: 1965,
      yField: 1390.5,
    },
    {
      seriesField: '北美',
      xField: 1966,
      yField: 1469.5,
    },
    {
      seriesField: '北美',
      xField: 1967,
      yField: 1521.7,
    },
    {
      seriesField: '北美',
      xField: 1968,
      yField: 1615.9,
    },
    {
      seriesField: '北美',
      xField: 1969,
      yField: 1703.7,
    },
    {
      seriesField: '北美',
      xField: 1970,
      yField: 1767.8,
    },
    {
      seriesField: '北美',
      xField: 1971,
      yField: 1806.2,
    },
    {
      seriesField: '北美',
      xField: 1972,
      yField: 1903.5,
    },
    {
      seriesField: '北美',
      xField: 1973,
      yField: 1986.6,
    },
    {
      seriesField: '北美',
      xField: 1974,
      yField: 1952,
    },
    {
      seriesField: '北美',
      xField: 1975,
      yField: 1910.4,
    },
    {
      seriesField: '北美',
      xField: 1976,
      yField: 2015.8,
    },
    {
      seriesField: '北美',
      xField: 1977,
      yField: 2074.7,
    },
    {
      seriesField: '北美',
      xField: 1978,
      yField: 2092.7,
    },
    {
      seriesField: '北美',
      xField: 1979,
      yField: 2123.8,
    },
    {
      seriesField: '北美',
      xField: 1980,
      yField: 2068.3,
    },
    {
      seriesField: '北美',
      xField: 1981,
      yField: 2018,
    },
    {
      seriesField: '北美',
      xField: 1982,
      yField: 1951.5,
    },
    {
      seriesField: '北美',
      xField: 1983,
      yField: 1941.1,
    },
    {
      seriesField: '北美',
      xField: 1984,
      yField: 2046.2,
    },
    {
      seriesField: '北美',
      xField: 1985,
      yField: 2053.1,
    },
    {
      seriesField: '北美',
      xField: 1986,
      yField: 2060.7,
    },
    {
      seriesField: '北美',
      xField: 1987,
      yField: 2130.8,
    },
    {
      seriesField: '北美',
      xField: 1988,
      yField: 2223.5,
    },
    {
      seriesField: '北美',
      xField: 1989,
      yField: 2275.9,
    },
    {
      seriesField: '北美',
      xField: 1990,
      yField: 2280.7,
    },
    {
      seriesField: '北美',
      xField: 1991,
      yField: 2282,
    },
    {
      seriesField: '北美',
      xField: 1992,
      yField: 2319.7,
    },
    {
      seriesField: '北美',
      xField: 1993,
      yField: 2366.6,
    },
    {
      seriesField: '北美',
      xField: 1994,
      yField: 2420.2,
    },
    {
      seriesField: '北美',
      xField: 1995,
      yField: 2466.9,
    },
    {
      seriesField: '北美',
      xField: 1996,
      yField: 2547.4,
    },
    {
      seriesField: '北美',
      xField: 1997,
      yField: 2569,
    },
    {
      seriesField: '北美',
      xField: 1998,
      yField: 2585.2,
    },
    {
      seriesField: '北美',
      xField: 1999,
      yField: 2633.8,
    },
    {
      seriesField: '北美',
      xField: 2000,
      yField: 2699.4,
    },
    {
      seriesField: '北美',
      xField: 2001,
      yField: 2640.1,
    },
    {
      seriesField: '北美',
      xField: 2002,
      yField: 2687.7,
    },
    {
      seriesField: '北美',
      xField: 2003,
      yField: 2700.7,
    },
    {
      seriesField: '北美',
      xField: 2004,
      yField: 2759.4,
    },
    {
      seriesField: '北美',
      xField: 2005,
      yField: 2775.6,
    },
    {
      seriesField: '北美',
      xField: 2006,
      yField: 2761.9,
    },
    {
      seriesField: '北美',
      xField: 2007,
      yField: 2809.5,
    },
    {
      seriesField: '北美',
      xField: 2008,
      yField: 2759.4,
    },
    {
      seriesField: '北美',
      xField: 2009,
      yField: 2632.5,
    },
    {
      seriesField: '北美',
      xField: 2010,
      yField: 2720.7,
    },
    {
      seriesField: '北美',
      xField: 2011,
      yField: 2722.9,
    },
    {
      seriesField: '北美',
      xField: 2012,
      yField: 2665.1,
    },
    {
      seriesField: '北美',
      xField: 2013,
      yField: 2738.3,
    },
    {
      seriesField: '北美',
      xField: 2014,
      yField: 2766.8,
    },
    {
      seriesField: '北美',
      xField: 2015,
      yField: 2739.7,
    },
    {
      seriesField: '北美',
      xField: 2016,
      yField: 2761.9,
    },
    {
      seriesField: '北美',
      xField: 2017,
      yField: 2772.8,
    },
    {
      seriesField: '中南美',
      xField: 1965,
      yField: 109.2,
    },
    {
      seriesField: '中南美',
      xField: 1966,
      yField: 115.7,
    },
    {
      seriesField: '中南美',
      xField: 1967,
      yField: 120.5,
    },
    {
      seriesField: '中南美',
      xField: 1968,
      yField: 128,
    },
    {
      seriesField: '中南美',
      xField: 1969,
      yField: 134.4,
    },
    {
      seriesField: '中南美',
      xField: 1970,
      yField: 142.2,
    },
    {
      seriesField: '中南美',
      xField: 1971,
      yField: 157.5,
    },
    {
      seriesField: '中南美',
      xField: 1972,
      yField: 169.5,
    },
    {
      seriesField: '中南美',
      xField: 1973,
      yField: 186.3,
    },
    {
      seriesField: '中南美',
      xField: 1974,
      yField: 195.5,
    },
    {
      seriesField: '中南美',
      xField: 1975,
      yField: 198,
    },
    {
      seriesField: '中南美',
      xField: 1976,
      yField: 211.7,
    },
    {
      seriesField: '中南美',
      xField: 1977,
      yField: 223.8,
    },
    {
      seriesField: '中南美',
      xField: 1978,
      yField: 236.5,
    },
    {
      seriesField: '中南美',
      xField: 1979,
      yField: 251.8,
    },
    {
      seriesField: '中南美',
      xField: 1980,
      yField: 262.9,
    },
    {
      seriesField: '中南美',
      xField: 1981,
      yField: 262.7,
    },
    {
      seriesField: '中南美',
      xField: 1982,
      yField: 265.9,
    },
    {
      seriesField: '中南美',
      xField: 1983,
      yField: 268.3,
    },
    {
      seriesField: '中南美',
      xField: 1984,
      yField: 278.3,
    },
    {
      seriesField: '中南美',
      xField: 1985,
      yField: 285.2,
    },
    {
      seriesField: '中南美',
      xField: 1986,
      yField: 304.2,
    },
    {
      seriesField: '中南美',
      xField: 1987,
      yField: 315.4,
    },
    {
      seriesField: '中南美',
      xField: 1988,
      yField: 324.6,
    },
    {
      seriesField: '中南美',
      xField: 1989,
      yField: 329.9,
    },
    {
      seriesField: '中南美',
      xField: 1990,
      yField: 331.1,
    },
    {
      seriesField: '中南美',
      xField: 1991,
      yField: 339.7,
    },
    {
      seriesField: '中南美',
      xField: 1992,
      yField: 355.8,
    },
    {
      seriesField: '中南美',
      xField: 1993,
      yField: 368.8,
    },
    {
      seriesField: '中南美',
      xField: 1994,
      yField: 390.9,
    },
    {
      seriesField: '中南美',
      xField: 1995,
      yField: 408.3,
    },
    {
      seriesField: '中南美',
      xField: 1996,
      yField: 425.8,
    },
    {
      seriesField: '中南美',
      xField: 1997,
      yField: 448.2,
    },
    {
      seriesField: '中南美',
      xField: 1998,
      yField: 465.5,
    },
    {
      seriesField: '中南美',
      xField: 1999,
      yField: 463.7,
    },
    {
      seriesField: '中南美',
      xField: 2000,
      yField: 476.1,
    },
    {
      seriesField: '中南美',
      xField: 2001,
      yField: 477.7,
    },
    {
      seriesField: '中南美',
      xField: 2002,
      yField: 483.5,
    },
    {
      seriesField: '中南美',
      xField: 2003,
      yField: 489.3,
    },
    {
      seriesField: '中南美',
      xField: 2004,
      yField: 515.5,
    },
    {
      seriesField: '中南美',
      xField: 2005,
      yField: 533.6,
    },
    {
      seriesField: '中南美',
      xField: 2006,
      yField: 564,
    },
    {
      seriesField: '中南美',
      xField: 2007,
      yField: 587,
    },
    {
      seriesField: '中南美',
      xField: 2008,
      yField: 605.8,
    },
    {
      seriesField: '中南美',
      xField: 2009,
      yField: 596.8,
    },
    {
      seriesField: '中南美',
      xField: 2010,
      yField: 632.5,
    },
    {
      seriesField: '中南美',
      xField: 2011,
      yField: 658.9,
    },
    {
      seriesField: '中南美',
      xField: 2012,
      yField: 676.5,
    },
    {
      seriesField: '中南美',
      xField: 2013,
      yField: 692,
    },
    {
      seriesField: '中南美',
      xField: 2014,
      yField: 697.7,
    },
    {
      seriesField: '中南美',
      xField: 2015,
      yField: 701.1,
    },
    {
      seriesField: '中南美',
      xField: 2016,
      yField: 696.8,
    },
    {
      seriesField: '中南美',
      xField: 2017,
      yField: 700.6,
    },
    {
      seriesField: '欧洲',
      xField: 1965,
      yField: 1058.1,
    },
    {
      seriesField: '欧洲',
      xField: 1966,
      yField: 1089.7,
    },
    {
      seriesField: '欧洲',
      xField: 1967,
      yField: 1121.7,
    },
    {
      seriesField: '欧洲',
      xField: 1968,
      yField: 1196.6,
    },
    {
      seriesField: '欧洲',
      xField: 1969,
      yField: 1285.5,
    },
    {
      seriesField: '欧洲',
      xField: 1970,
      yField: 1369,
    },
    {
      seriesField: '欧洲',
      xField: 1971,
      yField: 1406.2,
    },
    {
      seriesField: '欧洲',
      xField: 1972,
      yField: 1472.7,
    },
    {
      seriesField: '欧洲',
      xField: 1973,
      yField: 1558,
    },
    {
      seriesField: '欧洲',
      xField: 1974,
      yField: 1535.5,
    },
    {
      seriesField: '欧洲',
      xField: 1975,
      yField: 1519.3,
    },
    {
      seriesField: '欧洲',
      xField: 1976,
      yField: 1606.9,
    },
    {
      seriesField: '欧洲',
      xField: 1977,
      yField: 1632.4,
    },
    {
      seriesField: '欧洲',
      xField: 1978,
      yField: 1687.5,
    },
    {
      seriesField: '欧洲',
      xField: 1979,
      yField: 1749.6,
    },
    {
      seriesField: '欧洲',
      xField: 1980,
      yField: 1706.4,
    },
    {
      seriesField: '欧洲',
      xField: 1981,
      yField: 1661.4,
    },
    {
      seriesField: '欧洲',
      xField: 1982,
      yField: 1630.2,
    },
    {
      seriesField: '欧洲',
      xField: 1983,
      yField: 1645.2,
    },
    {
      seriesField: '欧洲',
      xField: 1984,
      yField: 1686.9,
    },
    {
      seriesField: '欧洲',
      xField: 1985,
      yField: 1779.4,
    },
    {
      seriesField: '欧洲',
      xField: 1986,
      yField: 1811.3,
    },
    {
      seriesField: '欧洲',
      xField: 1987,
      yField: 1849.7,
    },
    {
      seriesField: '欧洲',
      xField: 1988,
      yField: 1870,
    },
    {
      seriesField: '欧洲',
      xField: 1989,
      yField: 1875,
    },
    {
      seriesField: '欧洲',
      xField: 1990,
      yField: 1853.3,
    },
    {
      seriesField: '欧洲',
      xField: 1991,
      yField: 1844.6,
    },
    {
      seriesField: '欧洲',
      xField: 1992,
      yField: 1814.1,
    },
    {
      seriesField: '欧洲',
      xField: 1993,
      yField: 1805.3,
    },
    {
      seriesField: '欧洲',
      xField: 1994,
      yField: 1791.3,
    },
    {
      seriesField: '欧洲',
      xField: 1995,
      yField: 1836.2,
    },
    {
      seriesField: '欧洲',
      xField: 1996,
      yField: 1896.1,
    },
    {
      seriesField: '欧洲',
      xField: 1997,
      yField: 1896.4,
    },
    {
      seriesField: '欧洲',
      xField: 1998,
      yField: 1918.8,
    },
    {
      seriesField: '欧洲',
      xField: 1999,
      yField: 1907.7,
    },
    {
      seriesField: '欧洲',
      xField: 2000,
      yField: 1932.1,
    },
    {
      seriesField: '欧洲',
      xField: 2001,
      yField: 1959.2,
    },
    {
      seriesField: '欧洲',
      xField: 2002,
      yField: 1954.8,
    },
    {
      seriesField: '欧洲',
      xField: 2003,
      yField: 1991.6,
    },
    {
      seriesField: '欧洲',
      xField: 2004,
      yField: 2025.4,
    },
    {
      seriesField: '欧洲',
      xField: 2005,
      yField: 2037.4,
    },
    {
      seriesField: '欧洲',
      xField: 2006,
      yField: 2056.4,
    },
    {
      seriesField: '欧洲',
      xField: 2007,
      yField: 2041.7,
    },
    {
      seriesField: '欧洲',
      xField: 2008,
      yField: 2038.5,
    },
    {
      seriesField: '欧洲',
      xField: 2009,
      yField: 1932.1,
    },
    {
      seriesField: '欧洲',
      xField: 2010,
      yField: 2001.1,
    },
    {
      seriesField: '欧洲',
      xField: 2011,
      yField: 1949.1,
    },
    {
      seriesField: '欧洲',
      xField: 2012,
      yField: 1944.3,
    },
    {
      seriesField: '欧洲',
      xField: 2013,
      yField: 1934,
    },
    {
      seriesField: '欧洲',
      xField: 2014,
      yField: 1871.2,
    },
    {
      seriesField: '欧洲',
      xField: 2015,
      yField: 1908.7,
    },
    {
      seriesField: '欧洲',
      xField: 2016,
      yField: 1934.6,
    },
    {
      seriesField: '欧洲',
      xField: 2017,
      yField: 1969.5,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1965,
      yField: 593.3,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1966,
      yField: 630.9,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1967,
      yField: 663.2,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1968,
      yField: 687.8,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1969,
      yField: 719,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1970,
      yField: 754.8,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1971,
      yField: 791.9,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1972,
      yField: 832.3,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1973,
      yField: 875.1,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1974,
      yField: 923.3,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1975,
      yField: 969,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1976,
      yField: 1006.5,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1977,
      yField: 1051.4,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1978,
      yField: 1094.2,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1979,
      yField: 1127.1,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1980,
      yField: 1150.1,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1981,
      yField: 1174.5,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1982,
      yField: 1204,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1983,
      yField: 1229,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1984,
      yField: 1274.6,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1985,
      yField: 1257,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1986,
      yField: 1282,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1987,
      yField: 1318,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1988,
      yField: 1341.5,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1989,
      yField: 1332.5,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1990,
      yField: 1350.3,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1991,
      yField: 1308.9,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1992,
      yField: 1233.1,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1993,
      yField: 1121,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1994,
      yField: 1012.2,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1995,
      yField: 951.2,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1996,
      yField: 920,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1997,
      yField: 878.4,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1998,
      yField: 871.7,
    },
    {
      seriesField: 'CIS 地区',
      xField: 1999,
      yField: 881.3,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2000,
      yField: 888.5,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2001,
      yField: 905.5,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2002,
      yField: 904,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2003,
      yField: 924.3,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2004,
      yField: 938.7,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2005,
      yField: 942.3,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2006,
      yField: 978.6,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2007,
      yField: 989.8,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2008,
      yField: 998.1,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2009,
      yField: 926.8,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2010,
      yField: 967.8,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2011,
      yField: 1006,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2012,
      yField: 1014.1,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2013,
      yField: 989.2,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2014,
      yField: 987,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2015,
      yField: 960.7,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2016,
      yField: 972,
    },
    {
      seriesField: 'CIS 地区',
      xField: 2017,
      yField: 978,
    },
    {
      seriesField: '中东',
      xField: 1965,
      yField: 48.3,
    },
    {
      seriesField: '中东',
      xField: 1966,
      yField: 50.4,
    },
    {
      seriesField: '中东',
      xField: 1967,
      yField: 52.7,
    },
    {
      seriesField: '中东',
      xField: 1968,
      yField: 55.6,
    },
    {
      seriesField: '中东',
      xField: 1969,
      yField: 58.5,
    },
    {
      seriesField: '中东',
      xField: 1970,
      yField: 61.5,
    },
    {
      seriesField: '中东',
      xField: 1971,
      yField: 64.9,
    },
    {
      seriesField: '中东',
      xField: 1972,
      yField: 70.6,
    },
    {
      seriesField: '中东',
      xField: 1973,
      yField: 77.4,
    },
    {
      seriesField: '中东',
      xField: 1974,
      yField: 82.3,
    },
    {
      seriesField: '中东',
      xField: 1975,
      yField: 82.1,
    },
    {
      seriesField: '中东',
      xField: 1976,
      yField: 93,
    },
    {
      seriesField: '中东',
      xField: 1977,
      yField: 105.7,
    },
    {
      seriesField: '中东',
      xField: 1978,
      yField: 111,
    },
    {
      seriesField: '中东',
      xField: 1979,
      yField: 130.5,
    },
    {
      seriesField: '中东',
      xField: 1980,
      yField: 126.5,
    },
    {
      seriesField: '中东',
      xField: 1981,
      yField: 137.9,
    },
    {
      seriesField: '中东',
      xField: 1982,
      yField: 152.8,
    },
    {
      seriesField: '中东',
      xField: 1983,
      yField: 167.1,
    },
    {
      seriesField: '中东',
      xField: 1984,
      yField: 188.9,
    },
    {
      seriesField: '中东',
      xField: 1985,
      yField: 200.8,
    },
    {
      seriesField: '中东',
      xField: 1986,
      yField: 209.8,
    },
    {
      seriesField: '中东',
      xField: 1987,
      yField: 224.5,
    },
    {
      seriesField: '中东',
      xField: 1988,
      yField: 238.5,
    },
    {
      seriesField: '中东',
      xField: 1989,
      yField: 251.5,
    },
    {
      seriesField: '中东',
      xField: 1990,
      yField: 260,
    },
    {
      seriesField: '中东',
      xField: 1991,
      yField: 271.7,
    },
    {
      seriesField: '中东',
      xField: 1992,
      yField: 296.4,
    },
    {
      seriesField: '中东',
      xField: 1993,
      yField: 304.7,
    },
    {
      seriesField: '中东',
      xField: 1994,
      yField: 340.3,
    },
    {
      seriesField: '中东',
      xField: 1995,
      yField: 352.4,
    },
    {
      seriesField: '中东',
      xField: 1996,
      yField: 363.9,
    },
    {
      seriesField: '中东',
      xField: 1997,
      yField: 381.3,
    },
    {
      seriesField: '中东',
      xField: 1998,
      yField: 387.7,
    },
    {
      seriesField: '中东',
      xField: 1999,
      yField: 395,
    },
    {
      seriesField: '中东',
      xField: 2000,
      yField: 414.9,
    },
    {
      seriesField: '中东',
      xField: 2001,
      yField: 435.6,
    },
    {
      seriesField: '中东',
      xField: 2002,
      yField: 459.4,
    },
    {
      seriesField: '中东',
      xField: 2003,
      yField: 479.3,
    },
    {
      seriesField: '中东',
      xField: 2004,
      yField: 517.1,
    },
    {
      seriesField: '中东',
      xField: 2005,
      yField: 553.7,
    },
    {
      seriesField: '中东',
      xField: 2006,
      yField: 582.6,
    },
    {
      seriesField: '中东',
      xField: 2007,
      yField: 618.2,
    },
    {
      seriesField: '中东',
      xField: 2008,
      yField: 657.1,
    },
    {
      seriesField: '中东',
      xField: 2009,
      yField: 677.2,
    },
    {
      seriesField: '中东',
      xField: 2010,
      yField: 714.3,
    },
    {
      seriesField: '中东',
      xField: 2011,
      yField: 740.9,
    },
    {
      seriesField: '中东',
      xField: 2012,
      yField: 771.1,
    },
    {
      seriesField: '中东',
      xField: 2013,
      yField: 795.3,
    },
    {
      seriesField: '中东',
      xField: 2014,
      yField: 823.1,
    },
    {
      seriesField: '中东',
      xField: 2015,
      yField: 848.3,
    },
    {
      seriesField: '中东',
      xField: 2016,
      yField: 869.7,
    },
    {
      seriesField: '中东',
      xField: 2017,
      yField: 897.2,
    },
    {
      seriesField: '非洲',
      xField: 1965,
      yField: 60.6,
    },
    {
      seriesField: '非洲',
      xField: 1966,
      yField: 63.3,
    },
    {
      seriesField: '非洲',
      xField: 1967,
      yField: 64,
    },
    {
      seriesField: '非洲',
      xField: 1968,
      yField: 67.4,
    },
    {
      seriesField: '非洲',
      xField: 1969,
      yField: 68.9,
    },
    {
      seriesField: '非洲',
      xField: 1970,
      yField: 74.7,
    },
    {
      seriesField: '非洲',
      xField: 1971,
      yField: 81.2,
    },
    {
      seriesField: '非洲',
      xField: 1972,
      yField: 86.3,
    },
    {
      seriesField: '非洲',
      xField: 1973,
      yField: 92.9,
    },
    {
      seriesField: '非洲',
      xField: 1974,
      yField: 97.6,
    },
    {
      seriesField: '非洲',
      xField: 1975,
      yField: 103.3,
    },
    {
      seriesField: '非洲',
      xField: 1976,
      yField: 112.4,
    },
    {
      seriesField: '非洲',
      xField: 1977,
      yField: 118.4,
    },
    {
      seriesField: '非洲',
      xField: 1978,
      yField: 123.1,
    },
    {
      seriesField: '非洲',
      xField: 1979,
      yField: 134.4,
    },
    {
      seriesField: '非洲',
      xField: 1980,
      yField: 144.8,
    },
    {
      seriesField: '非洲',
      xField: 1981,
      yField: 161.5,
    },
    {
      seriesField: '非洲',
      xField: 1982,
      yField: 172.7,
    },
    {
      seriesField: '非洲',
      xField: 1983,
      yField: 177.5,
    },
    {
      seriesField: '非洲',
      xField: 1984,
      yField: 183.7,
    },
    {
      seriesField: '非洲',
      xField: 1985,
      yField: 190.7,
    },
    {
      seriesField: '非洲',
      xField: 1986,
      yField: 195.1,
    },
    {
      seriesField: '非洲',
      xField: 1987,
      yField: 201.2,
    },
    {
      seriesField: '非洲',
      xField: 1988,
      yField: 215.7,
    },
    {
      seriesField: '非洲',
      xField: 1989,
      yField: 216.3,
    },
    {
      seriesField: '非洲',
      xField: 1990,
      yField: 223.3,
    },
    {
      seriesField: '非洲',
      xField: 1991,
      yField: 223,
    },
    {
      seriesField: '非洲',
      xField: 1992,
      yField: 226.3,
    },
    {
      seriesField: '非洲',
      xField: 1993,
      yField: 227.2,
    },
    {
      seriesField: '非洲',
      xField: 1994,
      yField: 233.9,
    },
    {
      seriesField: '非洲',
      xField: 1995,
      yField: 243.4,
    },
    {
      seriesField: '非洲',
      xField: 1996,
      yField: 250.1,
    },
    {
      seriesField: '非洲',
      xField: 1997,
      yField: 255.1,
    },
    {
      seriesField: '非洲',
      xField: 1998,
      yField: 259.1,
    },
    {
      seriesField: '非洲',
      xField: 1999,
      yField: 267.2,
    },
    {
      seriesField: '非洲',
      xField: 2000,
      yField: 273.4,
    },
    {
      seriesField: '非洲',
      xField: 2001,
      yField: 283.8,
    },
    {
      seriesField: '非洲',
      xField: 2002,
      yField: 287.1,
    },
    {
      seriesField: '非洲',
      xField: 2003,
      yField: 300.6,
    },
    {
      seriesField: '非洲',
      xField: 2004,
      yField: 323.2,
    },
    {
      seriesField: '非洲',
      xField: 2005,
      yField: 326.5,
    },
    {
      seriesField: '非洲',
      xField: 2006,
      yField: 332.8,
    },
    {
      seriesField: '非洲',
      xField: 2007,
      yField: 346.9,
    },
    {
      seriesField: '非洲',
      xField: 2008,
      yField: 368.7,
    },
    {
      seriesField: '非洲',
      xField: 2009,
      yField: 373.4,
    },
    {
      seriesField: '非洲',
      xField: 2010,
      yField: 386.9,
    },
    {
      seriesField: '非洲',
      xField: 2011,
      yField: 385.6,
    },
    {
      seriesField: '非洲',
      xField: 2012,
      yField: 399.8,
    },
    {
      seriesField: '非洲',
      xField: 2013,
      yField: 410.6,
    },
    {
      seriesField: '非洲',
      xField: 2014,
      yField: 425.1,
    },
    {
      seriesField: '非洲',
      xField: 2015,
      yField: 429.4,
    },
    {
      seriesField: '非洲',
      xField: 2016,
      yField: 438,
    },
    {
      seriesField: '非洲',
      xField: 2017,
      yField: 449.5,
    },
    {
      seriesField: '亚太地区',
      xField: 1965,
      yField: 441.6,
    },
    {
      seriesField: '亚太地区',
      xField: 1966,
      yField: 482.9,
    },
    {
      seriesField: '亚太地区',
      xField: 1967,
      yField: 506.1,
    },
    {
      seriesField: '亚太地区',
      xField: 1968,
      yField: 544.1,
    },
    {
      seriesField: '亚太地区',
      xField: 1969,
      yField: 619.8,
    },
    {
      seriesField: '亚太地区',
      xField: 1970,
      yField: 704.9,
    },
    {
      seriesField: '亚太地区',
      xField: 1971,
      yField: 771.4,
    },
    {
      seriesField: '亚太地区',
      xField: 1972,
      yField: 817.9,
    },
    {
      seriesField: '亚太地区',
      xField: 1973,
      yField: 885.1,
    },
    {
      seriesField: '亚太地区',
      xField: 1974,
      yField: 902.2,
    },
    {
      seriesField: '亚太地区',
      xField: 1975,
      yField: 936.1,
    },
    {
      seriesField: '亚太地区',
      xField: 1976,
      yField: 983.2,
    },
    {
      seriesField: '亚太地区',
      xField: 1977,
      yField: 1037.3,
    },
    {
      seriesField: '亚太地区',
      xField: 1978,
      yField: 1106.2,
    },
    {
      seriesField: '亚太地区',
      xField: 1979,
      yField: 1157.6,
    },
    {
      seriesField: '亚太地区',
      xField: 1980,
      yField: 1168,
    },
    {
      seriesField: '亚太地区',
      xField: 1981,
      yField: 1175,
    },
    {
      seriesField: '亚太地区',
      xField: 1982,
      yField: 1186.8,
    },
    {
      seriesField: '亚太地区',
      xField: 1983,
      yField: 1240.7,
    },
    {
      seriesField: '亚太地区',
      xField: 1984,
      yField: 1326.7,
    },
    {
      seriesField: '亚太地区',
      xField: 1985,
      yField: 1395.9,
    },
    {
      seriesField: '亚太地区',
      xField: 1986,
      yField: 1456.5,
    },
    {
      seriesField: '亚太地区',
      xField: 1987,
      yField: 1538,
    },
    {
      seriesField: '亚太地区',
      xField: 1988,
      yField: 1650.5,
    },
    {
      seriesField: '亚太地区',
      xField: 1989,
      yField: 1740.4,
    },
    {
      seriesField: '亚太地区',
      xField: 1990,
      yField: 1812.8,
    },
    {
      seriesField: '亚太地区',
      xField: 1991,
      yField: 1896.9,
    },
    {
      seriesField: '亚太地区',
      xField: 1992,
      yField: 1984.5,
    },
    {
      seriesField: '亚太地区',
      xField: 1993,
      yField: 2088.9,
    },
    {
      seriesField: '亚太地区',
      xField: 1994,
      yField: 2204.3,
    },
    {
      seriesField: '亚太地区',
      xField: 1995,
      yField: 2306.8,
    },
    {
      seriesField: '亚太地区',
      xField: 1996,
      yField: 2413.2,
    },
    {
      seriesField: '亚太地区',
      xField: 1997,
      yField: 2487,
    },
    {
      seriesField: '亚太地区',
      xField: 1998,
      yField: 2481,
    },
    {
      seriesField: '亚太地区',
      xField: 1999,
      yField: 2577.9,
    },
    {
      seriesField: '亚太地区',
      xField: 2000,
      yField: 2671.9,
    },
    {
      seriesField: '亚太地区',
      xField: 2001,
      yField: 2759.7,
    },
    {
      seriesField: '亚太地区',
      xField: 2002,
      yField: 2901.2,
    },
    {
      seriesField: '亚太地区',
      xField: 2003,
      yField: 3145.5,
    },
    {
      seriesField: '亚太地区',
      xField: 2004,
      yField: 3445.8,
    },
    {
      seriesField: '亚太地区',
      xField: 2005,
      yField: 3724.3,
    },
    {
      seriesField: '亚太地区',
      xField: 2006,
      yField: 3944,
    },
    {
      seriesField: '亚太地区',
      xField: 2007,
      yField: 4195.2,
    },
    {
      seriesField: '亚太地区',
      xField: 2008,
      yField: 4310.8,
    },
    {
      seriesField: '亚太地区',
      xField: 2009,
      yField: 4411.1,
    },
    {
      seriesField: '亚太地区',
      xField: 2010,
      yField: 4696.1,
    },
    {
      seriesField: '亚太地区',
      xField: 2011,
      yField: 4951.1,
    },
    {
      seriesField: '亚太地区',
      xField: 2012,
      yField: 5118.2,
    },
    {
      seriesField: '亚太地区',
      xField: 2013,
      yField: 5269.9,
    },
    {
      seriesField: '亚太地区',
      xField: 2014,
      yField: 5382.9,
    },
    {
      seriesField: '亚太地区',
      xField: 2015,
      yField: 5472.4,
    },
    {
      seriesField: '亚太地区',
      xField: 2016,
      yField: 5585.5,
    },
    {
      seriesField: '亚太地区',
      xField: 2017,
      yField: 5743.6,
    },
  ],
};

export const Schemas = {
  DefaultDataSource: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        xField: {
          title: 'x轴字段名',
          type: 'string'
        },
        yField: {
          title: 'y轴字段名',
          type: 'number'
        }
      }
    }
  },
  StackDataSource: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        xField: {
          title: 'x轴字段名',
          type: 'string'
        },
        yField: {
          title: 'y轴字段名',
          type: 'number'
        },
        seriesField: {
          title: '分组字段名',
          type: 'string'
        }
      }
    }
  }
};
