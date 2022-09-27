import { ChartConfigProps } from '../utils/constants';

export enum SubTypeEnum {
  Default = 'default',
  More = 'more',
  Step = 'step'
}
export interface Data {
  config: ChartConfigProps & {
    stepType?: string;
    seriesField?: string;
    smooth?: boolean;
  };
  subType?: SubTypeEnum;
}

export const InputIds = {
  SetData: 'data'
};

export const MockData = {
  default: [
    { xField: '1991', yField: 3 },
    { xField: '1992', yField: 4 },
    { xField: '1993', yField: 3.5 },
    { xField: '1994', yField: 5 },
    { xField: '1995', yField: 4.9 },
    { xField: '1996', yField: 6 },
    { xField: '1997', yField: 7 },
    { xField: '1998', yField: 9 },
    { xField: '1999', yField: 13 },
  ],
  more: [
    {
      xField: '1850',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1850',
      yField: 54,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1850',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1850',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1850',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1851',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1851',
      yField: 54,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1851',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1851',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1851',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1852',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1852',
      yField: 57,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1852',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1852',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1852',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1853',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1853',
      yField: 59,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1853',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1853',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1853',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1854',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1854',
      yField: 69,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1854',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1854',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1854',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1855',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1855',
      yField: 71,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1855',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1855',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1855',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1856',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1856',
      yField: 76,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1856',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1856',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1856',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1857',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1857',
      yField: 77,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1857',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1857',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1857',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1858',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1858',
      yField: 78,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1858',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1858',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1858',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1859',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1859',
      yField: 83,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1859',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1859',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1859',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1860',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1860',
      yField: 91,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1860',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1860',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1860',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1861',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1861',
      yField: 95,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1861',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1861',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1861',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1862',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1862',
      yField: 96,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1862',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1862',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1862',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1863',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1863',
      yField: 103,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1863',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1863',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1863',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1864',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1864',
      yField: 112,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1864',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1864',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1864',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1865',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1865',
      yField: 119,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1865',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1865',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1865',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1866',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1866',
      yField: 122,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1866',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1866',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1866',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1867',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1867',
      yField: 130,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1867',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1867',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1867',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1868',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1868',
      yField: 134,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1868',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1868',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1868',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1869',
      yField: 0,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1869',
      yField: 142,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1869',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1869',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1869',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1870',
      yField: 1,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1870',
      yField: 146,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1870',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1870',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1870',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1871',
      yField: 1,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1871',
      yField: 156,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1871',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1871',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1871',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1872',
      yField: 1,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1872',
      yField: 173,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1872',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1872',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1872',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1873',
      yField: 1,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1873',
      yField: 183,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1873',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1873',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1873',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1874',
      yField: 1,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1874',
      yField: 173,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1874',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1874',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1874',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1875',
      yField: 1,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1875',
      yField: 187,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1875',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1875',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1875',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1876',
      yField: 1,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1876',
      yField: 190,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1876',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1876',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1876',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1877',
      yField: 2,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1877',
      yField: 192,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1877',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1877',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1877',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1878',
      yField: 2,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1878',
      yField: 194,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1878',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1878',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1878',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1879',
      yField: 3,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1879',
      yField: 207,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1879',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1879',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1879',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1880',
      yField: 3,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1880',
      yField: 233,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1880',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1880',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1880',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1881',
      yField: 4,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1881',
      yField: 239,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1881',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1881',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1881',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1882',
      yField: 4,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1882',
      yField: 252,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1882',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1882',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1882',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1883',
      yField: 3,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1883',
      yField: 269,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1883',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1883',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1883',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1884',
      yField: 4,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1884',
      yField: 271,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1884',
      yField: 0,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1884',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1884',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1885',
      yField: 4,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1885',
      yField: 273,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1885',
      yField: 1,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1885',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1885',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1886',
      yField: 5,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1886',
      yField: 275,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1886',
      yField: 2,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1886',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1886',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1887',
      yField: 5,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1887',
      yField: 287,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1887',
      yField: 3,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1887',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1887',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1888',
      yField: 5,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1888',
      yField: 317,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1888',
      yField: 5,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1888',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1888',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1889',
      yField: 6,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1889',
      yField: 318,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1889',
      yField: 3,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1889',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1889',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1890',
      yField: 8,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1890',
      yField: 345,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1890',
      yField: 3,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1890',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1890',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1891',
      yField: 9,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1891',
      yField: 360,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1891',
      yField: 2,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1891',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1891',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1892',
      yField: 9,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1892',
      yField: 363,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1892',
      yField: 2,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1892',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1892',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1893',
      yField: 10,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1893',
      yField: 358,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1893',
      yField: 2,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1893',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1893',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1894',
      yField: 9,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1894',
      yField: 372,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1894',
      yField: 2,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1894',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1894',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1895',
      yField: 11,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1895',
      yField: 393,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1895',
      yField: 2,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1895',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1895',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1896',
      yField: 12,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1896',
      yField: 405,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1896',
      yField: 2,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1896',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1896',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1897',
      yField: 13,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1897',
      yField: 425,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1897',
      yField: 2,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1897',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1897',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1898',
      yField: 13,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1898',
      yField: 449,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1898',
      yField: 2,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1898',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1898',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1899',
      yField: 14,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1899',
      yField: 491,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1899',
      yField: 3,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1899',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1899',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1900',
      yField: 16,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1900',
      yField: 515,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1900',
      yField: 3,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1900',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1900',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1901',
      yField: 18,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1901',
      yField: 531,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1901',
      yField: 4,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1901',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1901',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1902',
      yField: 19,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1902',
      yField: 543,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1902',
      yField: 4,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1902',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1902',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1903',
      yField: 20,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1903',
      yField: 593,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1903',
      yField: 4,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1903',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1903',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1904',
      yField: 23,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1904',
      yField: 597,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1904',
      yField: 4,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1904',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1904',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1905',
      yField: 23,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1905',
      yField: 636,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1905',
      yField: 5,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1905',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1905',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1906',
      yField: 23,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1906',
      yField: 680,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1906',
      yField: 5,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1906',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1906',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1907',
      yField: 28,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1907',
      yField: 750,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1907',
      yField: 5,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1907',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1907',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1908',
      yField: 30,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1908',
      yField: 714,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1908',
      yField: 5,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1908',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1908',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1909',
      yField: 32,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1909',
      yField: 747,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1909',
      yField: 6,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1909',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1909',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1910',
      yField: 34,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1910',
      yField: 778,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1910',
      yField: 7,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1910',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1910',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1911',
      yField: 36,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1911',
      yField: 792,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1911',
      yField: 7,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1911',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1911',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1912',
      yField: 37,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1912',
      yField: 834,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1912',
      yField: 8,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1912',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1912',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1913',
      yField: 41,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1913',
      yField: 895,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1913',
      yField: 8,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1913',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1913',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1914',
      yField: 42,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1914',
      yField: 800,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1914',
      yField: 8,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1914',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1914',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1915',
      yField: 45,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1915',
      yField: 784,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1915',
      yField: 9,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1915',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1915',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1916',
      yField: 48,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1916',
      yField: 842,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1916',
      yField: 10,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1916',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1916',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1917',
      yField: 54,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1917',
      yField: 891,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1917',
      yField: 11,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1917',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1917',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1918',
      yField: 53,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1918',
      yField: 873,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1918',
      yField: 10,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1918',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1918',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1919',
      yField: 61,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1919',
      yField: 735,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1919',
      yField: 10,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1919',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1919',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1920',
      yField: 78,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1920',
      yField: 843,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1920',
      yField: 11,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1920',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1920',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1921',
      yField: 84,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1921',
      yField: 709,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1921',
      yField: 10,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1921',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1921',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1922',
      yField: 94,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1922',
      yField: 740,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1922',
      yField: 11,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1922',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1922',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1923',
      yField: 111,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1923',
      yField: 845,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1923',
      yField: 14,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1923',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1923',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1924',
      yField: 110,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1924',
      yField: 836,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1924',
      yField: 16,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1924',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1924',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1925',
      yField: 116,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1925',
      yField: 842,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1925',
      yField: 17,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1925',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1925',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1926',
      yField: 119,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1926',
      yField: 846,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1926',
      yField: 19,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1926',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1926',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1927',
      yField: 136,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1927',
      yField: 905,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1927',
      yField: 21,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1927',
      yField: 0,
      seriesField: 'Cement production',
    },
    {
      xField: '1927',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1928',
      yField: 143,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1928',
      yField: 890,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1928',
      yField: 23,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1928',
      yField: 10,
      seriesField: 'Cement production',
    },
    {
      xField: '1928',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1929',
      yField: 160,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1929',
      yField: 947,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1929',
      yField: 28,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1929',
      yField: 10,
      seriesField: 'Cement production',
    },
    {
      xField: '1929',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1930',
      yField: 152,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1930',
      yField: 862,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1930',
      yField: 28,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1930',
      yField: 10,
      seriesField: 'Cement production',
    },
    {
      xField: '1930',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1931',
      yField: 147,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1931',
      yField: 759,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1931',
      yField: 25,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1931',
      yField: 8,
      seriesField: 'Cement production',
    },
    {
      xField: '1931',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1932',
      yField: 141,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1932',
      yField: 675,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1932',
      yField: 24,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1932',
      yField: 7,
      seriesField: 'Cement production',
    },
    {
      xField: '1932',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1933',
      yField: 154,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1933',
      yField: 708,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1933',
      yField: 25,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1933',
      yField: 7,
      seriesField: 'Cement production',
    },
    {
      xField: '1933',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1934',
      yField: 162,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1934',
      yField: 775,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1934',
      yField: 28,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1934',
      yField: 8,
      seriesField: 'Cement production',
    },
    {
      xField: '1934',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1935',
      yField: 176,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1935',
      yField: 811,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1935',
      yField: 30,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1935',
      yField: 9,
      seriesField: 'Cement production',
    },
    {
      xField: '1935',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1936',
      yField: 192,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1936',
      yField: 893,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1936',
      yField: 34,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1936',
      yField: 11,
      seriesField: 'Cement production',
    },
    {
      xField: '1936',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1937',
      yField: 219,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1937',
      yField: 941,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1937',
      yField: 38,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1937',
      yField: 11,
      seriesField: 'Cement production',
    },
    {
      xField: '1937',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1938',
      yField: 214,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1938',
      yField: 880,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1938',
      yField: 37,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1938',
      yField: 12,
      seriesField: 'Cement production',
    },
    {
      xField: '1938',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1939',
      yField: 222,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1939',
      yField: 918,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1939',
      yField: 38,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1939',
      yField: 13,
      seriesField: 'Cement production',
    },
    {
      xField: '1939',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1940',
      yField: 229,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1940',
      yField: 1017,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1940',
      yField: 42,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1940',
      yField: 11,
      seriesField: 'Cement production',
    },
    {
      xField: '1940',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1941',
      yField: 236,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1941',
      yField: 1043,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1941',
      yField: 42,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1941',
      yField: 12,
      seriesField: 'Cement production',
    },
    {
      xField: '1941',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1942',
      yField: 222,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1942',
      yField: 1063,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1942',
      yField: 45,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1942',
      yField: 11,
      seriesField: 'Cement production',
    },
    {
      xField: '1942',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1943',
      yField: 239,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1943',
      yField: 1092,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1943',
      yField: 50,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1943',
      yField: 10,
      seriesField: 'Cement production',
    },
    {
      xField: '1943',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1944',
      yField: 275,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1944',
      yField: 1047,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1944',
      yField: 54,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1944',
      yField: 7,
      seriesField: 'Cement production',
    },
    {
      xField: '1944',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1945',
      yField: 275,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1945',
      yField: 820,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1945',
      yField: 59,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1945',
      yField: 7,
      seriesField: 'Cement production',
    },
    {
      xField: '1945',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1946',
      yField: 292,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1946',
      yField: 875,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1946',
      yField: 61,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1946',
      yField: 10,
      seriesField: 'Cement production',
    },
    {
      xField: '1946',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1947',
      yField: 322,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1947',
      yField: 992,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1947',
      yField: 67,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1947',
      yField: 12,
      seriesField: 'Cement production',
    },
    {
      xField: '1947',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1948',
      yField: 364,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1948',
      yField: 1015,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1948',
      yField: 76,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1948',
      yField: 14,
      seriesField: 'Cement production',
    },
    {
      xField: '1948',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1949',
      yField: 362,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1949',
      yField: 960,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1949',
      yField: 81,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1949',
      yField: 16,
      seriesField: 'Cement production',
    },
    {
      xField: '1949',
      yField: 0,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1950',
      yField: 423,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1950',
      yField: 1070,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1950',
      yField: 97,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1950',
      yField: 18,
      seriesField: 'Cement production',
    },
    {
      xField: '1950',
      yField: 23,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1951',
      yField: 479,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1951',
      yField: 1129,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1951',
      yField: 115,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1951',
      yField: 20,
      seriesField: 'Cement production',
    },
    {
      xField: '1951',
      yField: 24,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1952',
      yField: 504,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1952',
      yField: 1119,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1952',
      yField: 124,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1952',
      yField: 22,
      seriesField: 'Cement production',
    },
    {
      xField: '1952',
      yField: 26,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1953',
      yField: 533,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1953',
      yField: 1125,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1953',
      yField: 131,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1953',
      yField: 24,
      seriesField: 'Cement production',
    },
    {
      xField: '1953',
      yField: 27,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1954',
      yField: 557,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1954',
      yField: 1116,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1954',
      yField: 138,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1954',
      yField: 27,
      seriesField: 'Cement production',
    },
    {
      xField: '1954',
      yField: 27,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1955',
      yField: 625,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1955',
      yField: 1208,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1955',
      yField: 150,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1955',
      yField: 30,
      seriesField: 'Cement production',
    },
    {
      xField: '1955',
      yField: 31,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1956',
      yField: 679,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1956',
      yField: 1273,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1956',
      yField: 161,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1956',
      yField: 32,
      seriesField: 'Cement production',
    },
    {
      xField: '1956',
      yField: 32,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1957',
      yField: 714,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1957',
      yField: 1309,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1957',
      yField: 178,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1957',
      yField: 34,
      seriesField: 'Cement production',
    },
    {
      xField: '1957',
      yField: 35,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1958',
      yField: 731,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1958',
      yField: 1336,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1958',
      yField: 192,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1958',
      yField: 36,
      seriesField: 'Cement production',
    },
    {
      xField: '1958',
      yField: 35,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1959',
      yField: 789,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1959',
      yField: 1382,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1959',
      yField: 206,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1959',
      yField: 40,
      seriesField: 'Cement production',
    },
    {
      xField: '1959',
      yField: 36,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1960',
      yField: 849,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1960',
      yField: 1410,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1960',
      yField: 227,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1960',
      yField: 43,
      seriesField: 'Cement production',
    },
    {
      xField: '1960',
      yField: 39,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1961',
      yField: 904,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1961',
      yField: 1349,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1961',
      yField: 240,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1961',
      yField: 45,
      seriesField: 'Cement production',
    },
    {
      xField: '1961',
      yField: 42,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1962',
      yField: 980,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1962',
      yField: 1351,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1962',
      yField: 263,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1962',
      yField: 49,
      seriesField: 'Cement production',
    },
    {
      xField: '1962',
      yField: 44,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1963',
      yField: 1052,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1963',
      yField: 1396,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1963',
      yField: 286,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1963',
      yField: 51,
      seriesField: 'Cement production',
    },
    {
      xField: '1963',
      yField: 47,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1964',
      yField: 1137,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1964',
      yField: 1435,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1964',
      yField: 316,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1964',
      yField: 57,
      seriesField: 'Cement production',
    },
    {
      xField: '1964',
      yField: 51,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1965',
      yField: 1219,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1965',
      yField: 1460,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1965',
      yField: 337,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1965',
      yField: 59,
      seriesField: 'Cement production',
    },
    {
      xField: '1965',
      yField: 55,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1966',
      yField: 1323,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1966',
      yField: 1478,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1966',
      yField: 364,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1966',
      yField: 63,
      seriesField: 'Cement production',
    },
    {
      xField: '1966',
      yField: 60,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1967',
      yField: 1423,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1967',
      yField: 1448,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1967',
      yField: 392,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1967',
      yField: 65,
      seriesField: 'Cement production',
    },
    {
      xField: '1967',
      yField: 66,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1968',
      yField: 1551,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1968',
      yField: 1448,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1968',
      yField: 424,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1968',
      yField: 70,
      seriesField: 'Cement production',
    },
    {
      xField: '1968',
      yField: 73,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1969',
      yField: 1673,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1969',
      yField: 1486,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1969',
      yField: 467,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1969',
      yField: 74,
      seriesField: 'Cement production',
    },
    {
      xField: '1969',
      yField: 80,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1970',
      yField: 1839,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1970',
      yField: 1556,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1970',
      yField: 493,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1970',
      yField: 78,
      seriesField: 'Cement production',
    },
    {
      xField: '1970',
      yField: 87,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1971',
      yField: 1947,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1971',
      yField: 1559,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1971',
      yField: 530,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1971',
      yField: 84,
      seriesField: 'Cement production',
    },
    {
      xField: '1971',
      yField: 88,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1972',
      yField: 2057,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1972',
      yField: 1576,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1972',
      yField: 560,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1972',
      yField: 89,
      seriesField: 'Cement production',
    },
    {
      xField: '1972',
      yField: 95,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1973',
      yField: 2241,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1973',
      yField: 1581,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1973',
      yField: 588,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1973',
      yField: 95,
      seriesField: 'Cement production',
    },
    {
      xField: '1973',
      yField: 110,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1974',
      yField: 2245,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1974',
      yField: 1579,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1974',
      yField: 597,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1974',
      yField: 96,
      seriesField: 'Cement production',
    },
    {
      xField: '1974',
      yField: 107,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1975',
      yField: 2132,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1975',
      yField: 1673,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1975',
      yField: 604,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1975',
      yField: 95,
      seriesField: 'Cement production',
    },
    {
      xField: '1975',
      yField: 92,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1976',
      yField: 2314,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1976',
      yField: 1710,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1976',
      yField: 630,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1976',
      yField: 103,
      seriesField: 'Cement production',
    },
    {
      xField: '1976',
      yField: 108,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1977',
      yField: 2398,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1977',
      yField: 1756,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1977',
      yField: 650,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1977',
      yField: 108,
      seriesField: 'Cement production',
    },
    {
      xField: '1977',
      yField: 104,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1978',
      yField: 2392,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1978',
      yField: 1780,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1978',
      yField: 680,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1978',
      yField: 116,
      seriesField: 'Cement production',
    },
    {
      xField: '1978',
      yField: 106,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1979',
      yField: 2544,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1979',
      yField: 1875,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1979',
      yField: 721,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1979',
      yField: 119,
      seriesField: 'Cement production',
    },
    {
      xField: '1979',
      yField: 98,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1980',
      yField: 2422,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1980',
      yField: 1935,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1980',
      yField: 737,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1980',
      yField: 120,
      seriesField: 'Cement production',
    },
    {
      xField: '1980',
      yField: 86,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1981',
      yField: 2289,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1981',
      yField: 1908,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1981',
      yField: 755,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1981',
      yField: 121,
      seriesField: 'Cement production',
    },
    {
      xField: '1981',
      yField: 65,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1982',
      yField: 2196,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1982',
      yField: 1976,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1982',
      yField: 738,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1982',
      yField: 121,
      seriesField: 'Cement production',
    },
    {
      xField: '1982',
      yField: 64,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1983',
      yField: 2176,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1983',
      yField: 1977,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1983',
      yField: 739,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1983',
      yField: 125,
      seriesField: 'Cement production',
    },
    {
      xField: '1983',
      yField: 58,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1984',
      yField: 2199,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1984',
      yField: 2074,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1984',
      yField: 807,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1984',
      yField: 128,
      seriesField: 'Cement production',
    },
    {
      xField: '1984',
      yField: 51,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1985',
      yField: 2186,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1985',
      yField: 2216,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1985',
      yField: 835,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1985',
      yField: 131,
      seriesField: 'Cement production',
    },
    {
      xField: '1985',
      yField: 49,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1986',
      yField: 2293,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1986',
      yField: 2277,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1986',
      yField: 830,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1986',
      yField: 137,
      seriesField: 'Cement production',
    },
    {
      xField: '1986',
      yField: 46,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1987',
      yField: 2306,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1987',
      yField: 2339,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1987',
      yField: 892,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1987',
      yField: 143,
      seriesField: 'Cement production',
    },
    {
      xField: '1987',
      yField: 44,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1988',
      yField: 2412,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1988',
      yField: 2387,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1988',
      yField: 935,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1988',
      yField: 152,
      seriesField: 'Cement production',
    },
    {
      xField: '1988',
      yField: 50,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1989',
      yField: 2459,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1989',
      yField: 2428,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1989',
      yField: 982,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1989',
      yField: 156,
      seriesField: 'Cement production',
    },
    {
      xField: '1989',
      yField: 41,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1990',
      yField: 2492,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1990',
      yField: 2359,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1990',
      yField: 1026,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1990',
      yField: 157,
      seriesField: 'Cement production',
    },
    {
      xField: '1990',
      yField: 40,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1991',
      yField: 2601,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1991',
      yField: 2284,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1991',
      yField: 1051,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1991',
      yField: 161,
      seriesField: 'Cement production',
    },
    {
      xField: '1991',
      yField: 45,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1992',
      yField: 2499,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1992',
      yField: 2290,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1992',
      yField: 1085,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1992',
      yField: 167,
      seriesField: 'Cement production',
    },
    {
      xField: '1992',
      yField: 36,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1993',
      yField: 2515,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1993',
      yField: 2225,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1993',
      yField: 1117,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1993',
      yField: 176,
      seriesField: 'Cement production',
    },
    {
      xField: '1993',
      yField: 37,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1994',
      yField: 2539,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1994',
      yField: 2278,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1994',
      yField: 1133,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1994',
      yField: 186,
      seriesField: 'Cement production',
    },
    {
      xField: '1994',
      yField: 39,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1995',
      yField: 2560,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1995',
      yField: 2359,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1995',
      yField: 1151,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1995',
      yField: 197,
      seriesField: 'Cement production',
    },
    {
      xField: '1995',
      yField: 39,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1996',
      yField: 2626,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1996',
      yField: 2382,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1996',
      yField: 1198,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1996',
      yField: 203,
      seriesField: 'Cement production',
    },
    {
      xField: '1996',
      yField: 40,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1997',
      yField: 2701,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1997',
      yField: 2409,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1997',
      yField: 1197,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1997',
      yField: 209,
      seriesField: 'Cement production',
    },
    {
      xField: '1997',
      yField: 40,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1998',
      yField: 2763,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1998',
      yField: 2343,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1998',
      yField: 1224,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1998',
      yField: 209,
      seriesField: 'Cement production',
    },
    {
      xField: '1998',
      yField: 36,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '1999',
      yField: 2741,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '1999',
      yField: 2310,
      seriesField: 'Solid fuel',
    },
    {
      xField: '1999',
      yField: 1258,
      seriesField: 'Gas fuel',
    },
    {
      xField: '1999',
      yField: 217,
      seriesField: 'Cement production',
    },
    {
      xField: '1999',
      yField: 35,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2000',
      yField: 2845,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2000',
      yField: 2327,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2000',
      yField: 1289,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2000',
      yField: 226,
      seriesField: 'Cement production',
    },
    {
      xField: '2000',
      yField: 46,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2001',
      yField: 2848,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2001',
      yField: 2445,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2001',
      yField: 1316,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2001',
      yField: 237,
      seriesField: 'Cement production',
    },
    {
      xField: '2001',
      yField: 47,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2002',
      yField: 2832,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2002',
      yField: 2518,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2002',
      yField: 1342,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2002',
      yField: 252,
      seriesField: 'Cement production',
    },
    {
      xField: '2002',
      yField: 49,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2003',
      yField: 2958,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2003',
      yField: 2695,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2003',
      yField: 1397,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2003',
      yField: 276,
      seriesField: 'Cement production',
    },
    {
      xField: '2003',
      yField: 48,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2004',
      yField: 3043,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2004',
      yField: 2906,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2004',
      yField: 1443,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2004',
      yField: 298,
      seriesField: 'Cement production',
    },
    {
      xField: '2004',
      yField: 54,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2005',
      yField: 3068,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2005',
      yField: 3108,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2005',
      yField: 1485,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2005',
      yField: 320,
      seriesField: 'Cement production',
    },
    {
      xField: '2005',
      yField: 60,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2006',
      yField: 3091,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2006',
      yField: 3293,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2006',
      yField: 1534,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2006',
      yField: 356,
      seriesField: 'Cement production',
    },
    {
      xField: '2006',
      yField: 62,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2007',
      yField: 3071,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2007',
      yField: 3422,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2007',
      yField: 1562,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2007',
      yField: 382,
      seriesField: 'Cement production',
    },
    {
      xField: '2007',
      yField: 66,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2008',
      yField: 3103,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2008',
      yField: 3587,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2008',
      yField: 1630,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2008',
      yField: 388,
      seriesField: 'Cement production',
    },
    {
      xField: '2008',
      yField: 69,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2009',
      yField: 3042,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2009',
      yField: 3590,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2009',
      yField: 1584,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2009',
      yField: 415,
      seriesField: 'Cement production',
    },
    {
      xField: '2009',
      yField: 66,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2010',
      yField: 3107,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2010',
      yField: 3812,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2010',
      yField: 1696,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2010',
      yField: 446,
      seriesField: 'Cement production',
    },
    {
      xField: '2010',
      yField: 67,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2011',
      yField: 3134,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2011',
      yField: 4055,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2011',
      yField: 1756,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2011',
      yField: 494,
      seriesField: 'Cement production',
    },
    {
      xField: '2011',
      yField: 64,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2012',
      yField: 3200,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2012',
      yField: 4106,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2012',
      yField: 1783,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2012',
      yField: 519,
      seriesField: 'Cement production',
    },
    {
      xField: '2012',
      yField: 65,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2013',
      yField: 3220,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2013',
      yField: 4126,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2013',
      yField: 1806,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2013',
      yField: 554,
      seriesField: 'Cement production',
    },
    {
      xField: '2013',
      yField: 68,
      seriesField: 'Gas flarinl',
    },
    {
      xField: '2014',
      yField: 3280,
      seriesField: 'Liquid fuel',
    },
    {
      xField: '2014',
      yField: 4117,
      seriesField: 'Solid fuel',
    },
    {
      xField: '2014',
      yField: 1823,
      seriesField: 'Gas fuel',
    },
    {
      xField: '2014',
      yField: 568,
      seriesField: 'Cement production',
    },
    {
      xField: '2014',
      yField: 68,
      seriesField: 'Gas flarinl',
    },
  ],
  step: []
};
MockData.step = MockData.default;;

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
  MoreDataSource: {
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
