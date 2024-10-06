import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getData() {
    return [
      {
        id: 1000,
        name: 'James Butt',
        country: {
          name: 'Algeria',
          code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 70663
      },
      {
        id: 1001,
        name: 'Josephine Darakjy',
        country: {
          name: 'Egypt',
          code: 'eg'
        },
        company: 'Chanay, Jeffrey A Esq',
        date: '2019-02-09',
        status: 'proposal',
        verified: true,
        activity: 0,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 82429
      },
      {
        id: 1002,
        name: 'Art Venere',
        country: {
          name: 'Panama',
          code: 'pa'
        },
        company: 'Chemel, James L Cpa',
        date: '2017-05-13',
        status: 'qualified',
        verified: false,
        activity: 63,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 28334
      },
      {
        id: 1003,
        name: 'Lenna Paprocki',
        country: {
          name: 'Slovenia',
          code: 'si'
        },
        company: 'Feltz Printing Service',
        date: '2020-09-15',
        status: 'new',
        verified: false,
        activity: 37,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 88521
      },
      {
        id: 1004,
        name: 'Donette Foller',
        country: {
          name: 'South Africa',
          code: 'za'
        },
        company: 'Printing Dimensions',
        date: '2016-05-20',
        status: 'proposal',
        verified: true,
        activity: 33,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 93905
      },
      {
        id: 1005,
        name: 'Simona Morasca',
        country: {
          name: 'Egypt',
          code: 'eg'
        },
        company: 'Chapman, Ross E Esq',
        date: '2018-02-16',
        status: 'qualified',
        verified: false,
        activity: 68,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 50041
      },
      {
        id: 1006,
        name: 'Mitsue Tollner',
        country: {
          name: 'Paraguay',
          code: 'py'
        },
        company: 'Morlong Associates',
        date: '2018-02-19',
        status: 'renewal',
        verified: true,
        activity: 54,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 58706
      },
      {
        id: 1007,
        name: 'Leota Dilliard',
        country: {
          name: 'Serbia',
          code: 'rs'
        },
        company: 'Commercial Press',
        date: '2019-08-13',
        status: 'renewal',
        verified: true,
        activity: 69,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 26640
      },
      {
        id: 1008,
        name: 'Sage Wieser',
        country: {
          name: 'Egypt',
          code: 'eg'
        },
        company: 'Truhlar And Truhlar Attys',
        date: '2018-11-21',
        status: 'unqualified',
        verified: true,
        activity: 76,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 65369
      },
      {
        id: 1009,
        name: 'Kris Marrier',
        country: {
          name: 'Mexico',
          code: 'mx'
        },
        company: 'King, Christopher A Esq',
        date: '2015-07-07',
        status: 'proposal',
        verified: false,
        activity: 3,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 63451
      },
      {
        id: 1010,
        name: 'Minna Amigon',
        country: {
          name: 'Romania',
          code: 'ro'
        },
        company: 'Dorl, James J Esq',
        date: '2018-11-07',
        status: 'qualified',
        verified: false,
        activity: 38,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 71169
      },
      {
        id: 1011,
        name: 'Abel Maclead',
        country: {
          name: 'Singapore',
          code: 'sg'
        },
        company: 'Rangoni Of Florence',
        date: '2017-03-11',
        status: 'qualified',
        verified: true,
        activity: 87,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png'
        },
        balance: 96842
      },
      {
        id: 1012,
        name: 'Kiley Caldarera',
        country: {
          name: 'Serbia',
          code: 'rs'
        },
        company: 'Feiner Bros',
        date: '2015-10-20',
        status: 'unqualified',
        verified: false,
        activity: 80,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 92734
      },
      {
        id: 1013,
        name: 'Graciela Ruta',
        country: {
          name: 'Chile',
          code: 'cl'
        },
        company: 'Buckley Miller & Wright',
        date: '2016-07-25',
        status: 'negotiation',
        verified: false,
        activity: 59,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 45250
      },
      {
        id: 1014,
        name: 'Cammy Albares',
        country: {
          name: 'Philippines',
          code: 'ph'
        },
        company: 'Rousseaux, Michael Esq',
        date: '2019-06-25',
        status: 'new',
        verified: true,
        activity: 90,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 30236
      },
      {
        id: 1015,
        name: 'Mattie Poquette',
        country: {
          name: 'Venezuela',
          code: 've'
        },
        company: 'Century Communications',
        date: '2017-12-12',
        status: 'negotiation',
        verified: false,
        activity: 52,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 64533
      },
      {
        id: 1016,
        name: 'Meaghan Garufi',
        country: {
          name: 'Malaysia',
          code: 'my'
        },
        company: 'Bolton, Wilbur Esq',
        date: '2018-07-04',
        status: 'unqualified',
        verified: false,
        activity: 31,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 37279
      },
      {
        id: 1017,
        name: 'Gladys Rim',
        country: {
          name: 'Netherlands',
          code: 'nl'
        },
        company: 'T M Byxbee Company Pc',
        date: '2020-02-27',
        status: 'renewal',
        verified: true,
        activity: 48,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 27381
      },
      {
        id: 1018,
        name: 'Yuki Whobrey',
        country: {
          name: 'Israel',
          code: 'il'
        },
        company: 'Farmers Insurance Group',
        date: '2017-12-21',
        status: 'negotiation',
        verified: true,
        activity: 16,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png'
        },
        balance: 9257
      },
      {
        id: 1019,
        name: 'Fletcher Flosi',
        country: {
          name: 'Argentina',
          code: 'ar'
        },
        company: 'Post Box Services Plus',
        date: '2016-01-04',
        status: 'renewal',
        verified: true,
        activity: 19,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 67783
      },
      {
        id: 1020,
        name: 'Bette Nicka',
        country: {
          name: 'Paraguay',
          code: 'py'
        },
        company: 'Sport En Art',
        date: '2016-10-21',
        status: 'renewal',
        verified: false,
        activity: 100,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 4609
      },
      {
        id: 1021,
        name: 'Veronika Inouye',
        country: {
          name: 'Ecuador',
          code: 'ec'
        },
        company: 'C 4 Network Inc',
        date: '2017-03-24',
        status: 'renewal',
        verified: false,
        activity: 72,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 26565
      },
      {
        id: 1022,
        name: 'Willard Kolmetz',
        country: {
          name: 'Tunisia',
          code: 'tn'
        },
        company: 'Ingalls, Donald R Esq',
        date: '2017-04-15',
        status: 'renewal',
        verified: true,
        activity: 94,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 75876
      },
      {
        id: 1023,
        name: 'Maryann Royster',
        country: {
          name: 'Belarus',
          code: 'by'
        },
        company: 'Franklin, Peter L Esq',
        date: '2017-03-11',
        status: 'qualified',
        verified: false,
        activity: 56,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 41121
      },
      {
        id: 1024,
        name: 'Alisha Slusarski',
        country: {
          name: 'Iceland',
          code: 'is'
        },
        company: 'Wtlz Power 107 Fm',
        date: '2018-03-27',
        status: 'qualified',
        verified: true,
        activity: 7,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 91691
      },
      {
        id: 1025,
        name: 'Allene Iturbide',
        country: {
          name: 'Italy',
          code: 'it'
        },
        company: 'Ledecky, David Esq',
        date: '2016-02-20',
        status: 'qualified',
        verified: true,
        activity: 1,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 40137
      },
      {
        id: 1026,
        name: 'Chanel Caudy',
        country: {
          name: 'Argentina',
          code: 'ar'
        },
        company: 'Professional Image Inc',
        date: '2018-06-24',
        status: 'new',
        verified: true,
        activity: 26,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 21304
      },
      {
        id: 1027,
        name: 'Ezekiel Chui',
        country: {
          name: 'Ireland',
          code: 'ie'
        },
        company: 'Sider, Donald C Esq',
        date: '2016-09-24',
        status: 'new',
        verified: false,
        activity: 76,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 60454
      },
      {
        id: 1028,
        name: 'Willow Kusko',
        country: {
          name: 'Romania',
          code: 'ro'
        },
        company: 'U Pull It',
        date: '2020-04-11',
        status: 'qualified',
        verified: true,
        activity: 7,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 17565
      },
      {
        id: 1029,
        name: 'Bernardo Figeroa',
        country: {
          name: 'Israel',
          code: 'il'
        },
        company: 'Clark, Richard Cpa',
        date: '2018-04-11',
        status: 'renewal',
        verified: true,
        activity: 81,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 17774
      },
      {
        id: 1030,
        name: 'Ammie Corrio',
        country: {
          name: 'Hungary',
          code: 'hu'
        },
        company: 'Moskowitz, Barry S',
        date: '2016-06-11',
        status: 'negotiation',
        verified: true,
        activity: 56,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 49201
      },
      {
        id: 1031,
        name: 'Francine Vocelka',
        country: {
          name: 'Honduras',
          code: 'hn'
        },
        company: 'Cascade Realty Advisors Inc',
        date: '2017-08-02',
        status: 'qualified',
        verified: true,
        activity: 94,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 67126
      },
      {
        id: 1032,
        name: 'Ernie Stenseth',
        country: {
          name: 'Australia',
          code: 'au'
        },
        company: 'Knwz Newsradio',
        date: '2018-06-06',
        status: 'renewal',
        verified: true,
        activity: 68,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 76017
      },
      {
        id: 1033,
        name: 'Albina Glick',
        country: {
          name: 'Ukraine',
          code: 'ua'
        },
        company: 'Giampetro, Anthony D',
        date: '2019-08-08',
        status: 'proposal',
        verified: true,
        activity: 85,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png'
        },
        balance: 91201
      },
      {
        id: 1034,
        name: 'Alishia Sergi',
        country: {
          name: 'Qatar',
          code: 'qa'
        },
        company: 'Milford Enterprises Inc',
        date: '2018-05-19',
        status: 'negotiation',
        verified: false,
        activity: 46,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 12237
      },
      {
        id: 1035,
        name: 'Solange Shinko',
        country: {
          name: 'Cameroon',
          code: 'cm'
        },
        company: 'Mosocco, Ronald A',
        date: '2015-02-12',
        status: 'qualified',
        verified: true,
        activity: 32,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 34072
      },
      {
        id: 1036,
        name: 'Jose Stockham',
        country: {
          name: 'Italy',
          code: 'it'
        },
        company: 'Tri State Refueler Co',
        date: '2018-04-25',
        status: 'qualified',
        verified: true,
        activity: 77,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 94909
      },
      {
        id: 1037,
        name: 'Rozella Ostrosky',
        country: {
          name: 'Venezuela',
          code: 've'
        },
        company: 'Parkway Company',
        date: '2016-02-27',
        status: 'unqualified',
        verified: true,
        activity: 66,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 57245
      },
      {
        id: 1038,
        name: 'Valentine Gillian',
        country: {
          name: 'Paraguay',
          code: 'py'
        },
        company: 'Fbs Business Finance',
        date: '2019-09-17',
        status: 'qualified',
        verified: true,
        activity: 25,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png'
        },
        balance: 75502
      },
      {
        id: 1039,
        name: 'Kati Rulapaugh',
        country: {
          name: 'Puerto Rico',
          code: 'pr'
        },
        company: 'Eder Assocs Consltng Engrs Pc',
        date: '2016-12-03',
        status: 'renewal',
        verified: false,
        activity: 51,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 82075
      },
      {
        id: 1040,
        name: 'Youlanda Schemmer',
        country: {
          name: 'Bolivia',
          code: 'bo'
        },
        company: 'Tri M Tool Inc',
        date: '2017-12-15',
        status: 'negotiation',
        verified: true,
        activity: 49,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 19208
      },
      {
        id: 1041,
        name: 'Dyan Oldroyd',
        country: {
          name: 'Argentina',
          code: 'ar'
        },
        company: 'International Eyelets Inc',
        date: '2017-02-02',
        status: 'qualified',
        verified: false,
        activity: 5,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 50194
      },
      {
        id: 1042,
        name: 'Roxane Campain',
        country: {
          name: 'France',
          code: 'fr'
        },
        company: 'Rapid Trading Intl',
        date: '2018-12-25',
        status: 'unqualified',
        verified: false,
        activity: 100,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 77714
      },
      {
        id: 1043,
        name: 'Lavera Perin',
        country: {
          name: 'Vietnam',
          code: 'vn'
        },
        company: 'Abc Enterprises Inc',
        date: '2018-04-10',
        status: 'qualified',
        verified: false,
        activity: 71,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 35740
      },
      {
        id: 1044,
        name: 'Erick Ferencz',
        country: {
          name: 'Belgium',
          code: 'be'
        },
        company: 'Cindy Turner Associates',
        date: '2018-05-06',
        status: 'unqualified',
        verified: true,
        activity: 54,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 30790
      },
      {
        id: 1045,
        name: 'Fatima Saylors',
        country: {
          name: 'Canada',
          code: 'ca'
        },
        company: 'Stanton, James D Esq',
        date: '2019-07-10',
        status: 'renewal',
        verified: true,
        activity: 93,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 52343
      },
      {
        id: 1046,
        name: 'Jina Briddick',
        country: {
          name: 'Mexico',
          code: 'mx'
        },
        company: 'Grace Pastries Inc',
        date: '2018-02-19',
        status: 'unqualified',
        verified: false,
        activity: 97,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 53966
      },
      {
        id: 1047,
        name: 'Kanisha Waycott',
        country: {
          name: 'Ecuador',
          code: 'ec'
        },
        company: 'Schroer, Gene E Esq',
        date: '2019-11-27',
        status: 'new',
        verified: false,
        activity: 80,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 9920
      },
      {
        id: 1048,
        name: 'Emerson Bowley',
        country: {
          name: 'Finland',
          code: 'fi'
        },
        company: 'Knights Inn',
        date: '2018-11-24',
        status: 'new',
        verified: false,
        activity: 63,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 78069
      },
      {
        id: 1049,
        name: 'Blair Malet',
        country: {
          name: 'Finland',
          code: 'fi'
        },
        company: 'Bollinger Mach Shp & Shipyard',
        date: '2018-04-19',
        status: 'new',
        verified: true,
        activity: 92,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 65005
      },
      {
        id: 1050,
        name: 'Brock Bolognia',
        country: {
          name: 'Bolivia',
          code: 'bo'
        },
        company: 'Orinda News',
        date: '2019-09-06',
        status: 'renewal',
        verified: true,
        activity: 72,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 51038
      },
      {
        id: 1051,
        name: 'Lorrie Nestle',
        country: {
          name: 'Germany',
          code: 'de'
        },
        company: 'Ballard Spahr Andrews',
        date: '2018-04-26',
        status: 'renewal',
        verified: false,
        activity: 36,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 28218
      },
      {
        id: 1052,
        name: 'Sabra Uyetake',
        country: {
          name: 'Peru',
          code: 'pe'
        },
        company: 'Lowy Limousine Service',
        date: '2018-04-12',
        status: 'new',
        verified: false,
        activity: 31,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 78527
      },
      {
        id: 1053,
        name: 'Marjory Mastella',
        country: {
          name: 'Netherlands',
          code: 'nl'
        },
        company: 'Vicon Corporation',
        date: '2018-01-24',
        status: 'negotiation',
        verified: false,
        activity: 89,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 23381
      },
      {
        id: 1054,
        name: 'Karl Klonowski',
        country: {
          name: 'Saudi Arabia',
          code: 'sa'
        },
        company: 'Rossi, Michael M',
        date: '2017-04-17',
        status: 'unqualified',
        verified: true,
        activity: 27,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 64821
      },
      {
        id: 1055,
        name: 'Tonette Wenner',
        country: {
          name: 'Australia',
          code: 'au'
        },
        company: 'Northwest Publishing',
        date: '2019-04-14',
        status: 'qualified',
        verified: false,
        activity: 27,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 55334
      },
      {
        id: 1056,
        name: 'Amber Monarrez',
        country: {
          name: 'Sweden',
          code: 'se'
        },
        company: 'Branford Wire & Mfg Co',
        date: '2019-09-09',
        status: 'new',
        verified: false,
        activity: 79,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png'
        },
        balance: 83391
      },
      {
        id: 1057,
        name: 'Shenika Seewald',
        country: {
          name: 'Australia',
          code: 'au'
        },
        company: 'East Coast Marketing',
        date: '2017-02-18',
        status: 'renewal',
        verified: true,
        activity: 39,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 31580
      },
      {
        id: 1058,
        name: 'Delmy Ahle',
        country: {
          name: 'Belgium',
          code: 'be'
        },
        company: 'Wye Technologies Inc',
        date: '2020-10-05',
        status: 'unqualified',
        verified: false,
        activity: 55,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 11723
      },
      {
        id: 1059,
        name: 'Deeanna Juhas',
        country: {
          name: 'Sweden',
          code: 'se'
        },
        company: 'Healy, George W Iv',
        date: '2018-09-28',
        status: 'negotiation',
        verified: false,
        activity: 79,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 8454
      },
      {
        id: 1060,
        name: 'Blondell Pugh',
        country: {
          name: 'Ireland',
          code: 'ie'
        },
        company: 'Alpenlite Inc',
        date: '2016-06-16',
        status: 'renewal',
        verified: false,
        activity: 49,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png'
        },
        balance: 99235
      },
      {
        id: 1061,
        name: 'Jamal Vanausdal',
        country: {
          name: 'Morocco',
          code: 'ma'
        },
        company: 'Hubbard, Bruce Esq',
        date: '2017-05-25',
        status: 'proposal',
        verified: true,
        activity: 87,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 15656
      },
      {
        id: 1062,
        name: 'Cecily Hollack',
        country: {
          name: 'Bolivia',
          code: 'bo'
        },
        company: 'Arthur A Oliver & Son Inc',
        date: '2020-05-09',
        status: 'negotiation',
        verified: true,
        activity: 5,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 60586
      },
      {
        id: 1063,
        name: 'Carmelina Lindall',
        country: {
          name: 'Puerto Rico',
          code: 'pr'
        },
        company: 'George Jessop Carter Jewelers',
        date: '2019-09-07',
        status: 'qualified',
        verified: true,
        activity: 77,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 86239
      },
      {
        id: 1064,
        name: 'Maurine Yglesias',
        country: {
          name: 'Taiwan',
          code: 'tw'
        },
        company: 'Schultz, Thomas C Md',
        date: '2015-08-10',
        status: 'renewal',
        verified: false,
        activity: 94,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 15621
      },
      {
        id: 1065,
        name: 'Tawna Buvens',
        country: {
          name: 'Indonesia',
          code: 'id'
        },
        company: 'H H H Enterprises Inc',
        date: '2018-03-20',
        status: 'new',
        verified: false,
        activity: 25,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 77248
      },
      {
        id: 1066,
        name: 'Penney Weight',
        country: {
          name: 'South Africa',
          code: 'za'
        },
        company: 'Hawaiian King Hotel',
        date: '2020-03-03',
        status: 'qualified',
        verified: false,
        activity: 96,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 478
      },
      {
        id: 1067,
        name: 'Elly Morocco',
        country: {
          name: 'Thailand',
          code: 'th'
        },
        company: 'Killion Industries',
        date: '2018-09-18',
        status: 'qualified',
        verified: true,
        activity: 38,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 62505
      },
      {
        id: 1068,
        name: 'Ilene Eroman',
        country: {
          name: 'Netherlands',
          code: 'nl'
        },
        company: 'Robinson, William J Esq',
        date: '2019-06-08',
        status: 'new',
        verified: true,
        activity: 49,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 91480
      },
      {
        id: 1069,
        name: 'Vallie Mondella',
        country: {
          name: 'Latvia',
          code: 'lv'
        },
        company: 'Private Properties',
        date: '2018-12-06',
        status: 'new',
        verified: false,
        activity: 16,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 21671
      },
      {
        id: 1070,
        name: 'Kallie Blackwood',
        country: {
          name: 'Iceland',
          code: 'is'
        },
        company: 'Rowley Schlimgen Inc',
        date: '2017-04-05',
        status: 'unqualified',
        verified: false,
        activity: 25,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 13775
      },
      {
        id: 1071,
        name: 'Johnetta Abdallah',
        country: {
          name: 'Netherlands',
          code: 'nl'
        },
        company: 'Forging Specialties',
        date: '2015-02-02',
        status: 'new',
        verified: false,
        activity: 16,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 60253
      },
      {
        id: 1072,
        name: 'Bobbye Rhym',
        country: {
          name: 'Ukraine',
          code: 'ua'
        },
        company: 'Smits, Patricia Garity',
        date: '2018-08-17',
        status: 'qualified',
        verified: true,
        activity: 85,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 75225
      },
      {
        id: 1073,
        name: 'Micaela Rhymes',
        country: {
          name: 'France',
          code: 'fr'
        },
        company: 'H Lee Leonard Attorney At Law',
        date: '2018-09-08',
        status: 'renewal',
        verified: true,
        activity: 92,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 3308
      },
      {
        id: 1074,
        name: 'Tamar Hoogland',
        country: {
          name: 'Guatemala',
          code: 'gt'
        },
        company: 'A K Construction Co',
        date: '2018-11-13',
        status: 'proposal',
        verified: true,
        activity: 22,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 19711
      },
      {
        id: 1075,
        name: 'Moon Parlato',
        country: {
          name: 'Czech Republic',
          code: 'cz'
        },
        company: 'Ambelang, Jessica M Md',
        date: '2019-08-18',
        status: 'renewal',
        verified: false,
        activity: 64,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 55110
      },
      {
        id: 1076,
        name: 'Laurel Reitler',
        country: {
          name: 'United Kingdom',
          code: 'gb'
        },
        company: 'Q A Service',
        date: '2015-04-02',
        status: 'negotiation',
        verified: false,
        activity: 80,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 62392
      },
      {
        id: 1077,
        name: 'Delisa Crupi',
        country: {
          name: 'Taiwan',
          code: 'tw'
        },
        company: 'Wood & Whitacre Contractors',
        date: '2017-09-15',
        status: 'unqualified',
        verified: false,
        activity: 70,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 76530
      },
      {
        id: 1078,
        name: 'Viva Toelkes',
        country: {
          name: 'United States',
          code: 'us'
        },
        company: 'Mark Iv Press Ltd',
        date: '2017-03-27',
        status: 'qualified',
        verified: false,
        activity: 16,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 7460
      },
      {
        id: 1079,
        name: 'Elza Lipke',
        country: {
          name: 'Ireland',
          code: 'ie'
        },
        company: 'Museum Of Science & Industry',
        date: '2017-06-01',
        status: 'proposal',
        verified: true,
        activity: 90,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 42251
      },
      {
        id: 1080,
        name: 'Devorah Chickering',
        country: {
          name: 'Spain',
          code: 'es'
        },
        company: 'Garrison Ind',
        date: '2017-03-14',
        status: 'proposal',
        verified: true,
        activity: 96,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 36435
      },
      {
        id: 1081,
        name: 'Timothy Mulqueen',
        country: {
          name: 'Netherlands',
          code: 'nl'
        },
        company: 'Saronix Nymph Products',
        date: '2018-07-09',
        status: 'renewal',
        verified: true,
        activity: 77,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 39197
      },
      {
        id: 1082,
        name: 'Arlette Honeywell',
        country: {
          name: 'Panama',
          code: 'pa'
        },
        company: 'Smc Inc',
        date: '2018-09-11',
        status: 'proposal',
        verified: true,
        activity: 46,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 72707
      },
      {
        id: 1083,
        name: 'Dominque Dickerson',
        country: {
          name: 'Argentina',
          code: 'ar'
        },
        company: 'E A I Electronic Assocs Inc',
        date: '2017-11-12',
        status: 'qualified',
        verified: true,
        activity: 83,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png'
        },
        balance: 97965
      },

      {
        id: 1253,
        name: 'Heike Berganza',
        country: {
          name: 'Bulgaria',
          code: 'bg'
        },
        company: 'Cali Sportswear Cutting Dept',
        date: '2019-01-21',
        status: 'unqualified',
        verified: true,
        activity: 95,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 78159
      },
      {
        id: 1254,
        name: 'Carey Dopico',
        country: {
          name: 'Saudi Arabia',
          code: 'sa'
        },
        company: 'Garofani, John Esq',
        date: '2020-05-25',
        status: 'negotiation',
        verified: true,
        activity: 35,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 84097
      },
      {
        id: 1255,
        name: 'Dottie Hellickson',
        country: {
          name: 'Chile',
          code: 'cl'
        },
        company: 'Thompson Fabricating Co',
        date: '2016-02-12',
        status: 'qualified',
        verified: true,
        activity: 7,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 54606
      },
      {
        id: 1256,
        name: 'Deandrea Hughey',
        country: {
          name: 'South Africa',
          code: 'za'
        },
        company: 'Century 21 Krall Real Estate',
        date: '2018-09-26',
        status: 'unqualified',
        verified: true,
        activity: 96,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 2730
      },
      {
        id: 1257,
        name: 'Kimberlie Duenas',
        country: {
          name: 'Bulgaria',
          code: 'bg'
        },
        company: 'Mid Contntl Rlty & Prop Mgmt',
        date: '2015-07-27',
        status: 'qualified',
        verified: true,
        activity: 96,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 71836
      },
      {
        id: 1258,
        name: 'Martina Staback',
        country: {
          name: 'Luxembourg',
          code: 'lu'
        },
        company: 'Ace Signs Inc',
        date: '2017-02-14',
        status: 'new',
        verified: true,
        activity: 47,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 37044
      },
      {
        id: 1259,
        name: 'Skye Fillingim',
        country: {
          name: 'Belgium',
          code: 'be'
        },
        company: 'Rodeway Inn',
        date: '2017-02-12',
        status: 'new',
        verified: true,
        activity: 86,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 5990
      },
      {
        id: 1260,
        name: 'Jade Farrar',
        country: {
          name: 'Mexico',
          code: 'mx'
        },
        company: 'Bonnet & Daughter',
        date: '2017-02-23',
        status: 'new',
        verified: true,
        activity: 73,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 7878
      },
      {
        id: 1261,
        name: 'Charlene Hamilton',
        country: {
          name: 'India',
          code: 'in'
        },
        company: 'Oshins & Gibbons',
        date: '2017-09-23',
        status: 'unqualified',
        verified: true,
        activity: 32,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 38077
      },
      {
        id: 1262,
        name: 'Geoffrey Acey',
        country: {
          name: 'Hong Kong',
          code: 'hk'
        },
        company: 'Price Business Services',
        date: '2019-10-11',
        status: 'proposal',
        verified: true,
        activity: 98,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 24537
      },
      {
        id: 1263,
        name: 'Stevie Westerbeck',
        country: {
          name: 'Lithuania',
          code: 'lt'
        },
        company: 'Wise, Dennis W Md',
        date: '2017-08-01',
        status: 'renewal',
        verified: true,
        activity: 57,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 19164
      },
      {
        id: 1264,
        name: 'Pamella Fortino',
        country: {
          name: 'Panama',
          code: 'pa'
        },
        company: 'Super 8 Motel',
        date: '2018-09-03',
        status: 'new',
        verified: true,
        activity: 100,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 21880
      },
      {
        id: 1265,
        name: 'Harrison Haufler',
        country: {
          name: 'Malaysia',
          code: 'my'
        },
        company: 'John Wagner Associates',
        date: '2016-08-25',
        status: 'qualified',
        verified: true,
        activity: 85,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 14975
      },
      {
        id: 1266,
        name: 'Johnna Engelberg',
        country: {
          name: 'Thailand',
          code: 'th'
        },
        company: 'Thrifty Oil Co',
        date: '2019-06-02',
        status: 'renewal',
        verified: true,
        activity: 1,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 28001
      },
      {
        id: 1267,
        name: 'Buddy Cloney',
        country: {
          name: 'Hungary',
          code: 'hu'
        },
        company: 'Larkfield Photo',
        date: '2020-05-14',
        status: 'qualified',
        verified: true,
        activity: 9,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 44811
      },
      {
        id: 1268,
        name: 'Dalene Riden',
        country: {
          name: 'Bolivia',
          code: 'bo'
        },
        company: 'Silverman Planetarium',
        date: '2019-08-23',
        status: 'renewal',
        verified: true,
        activity: 31,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 70963
      },
      {
        id: 1269,
        name: 'Jerry Zurcher',
        country: {
          name: 'Ukraine',
          code: 'ua'
        },
        company: 'J & F Lumber',
        date: '2015-05-11',
        status: 'renewal',
        verified: true,
        activity: 52,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 27808
      },
      {
        id: 1270,
        name: 'Haydee Denooyer',
        country: {
          name: 'Ivory Coast',
          code: 'ci'
        },
        company: 'Cleaning Station Inc',
        date: '2016-04-17',
        status: 'qualified',
        verified: true,
        activity: 80,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 41216
      },
      {
        id: 1271,
        name: 'Joseph Cryer',
        country: {
          name: 'Philippines',
          code: 'ph'
        },
        company: 'Ames Stationers',
        date: '2019-11-26',
        status: 'qualified',
        verified: true,
        activity: 53,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 8819
      },
      {
        id: 1272,
        name: 'Deonna Kippley',
        country: {
          name: 'South Africa',
          code: 'za'
        },
        company: 'Midas Muffler Shops',
        date: '2017-08-26',
        status: 'qualified',
        verified: true,
        activity: 52,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        },
        balance: 77610
      },
      {
        id: 1273,
        name: 'Raymon Calvaresi',
        country: {
          name: 'South Africa',
          code: 'za'
        },
        company: 'Seaboard Securities Inc',
        date: '2017-07-09',
        status: 'qualified',
        verified: true,
        activity: 45,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 80612
      },
      {
        id: 1274,
        name: 'Alecia Bubash',
        country: {
          name: 'Poland',
          code: 'pl'
        },
        company: 'Petersen, James E Esq',
        date: '2016-05-19',
        status: 'new',
        verified: false,
        activity: 28,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 45311
      },
      {
        id: 1275,
        name: 'Ma Layous',
        country: {
          name: 'Latvia',
          code: 'lv'
        },
        company: 'Development Authority',
        date: '2016-02-11',
        status: 'qualified',
        verified: false,
        activity: 2,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 88737
      },
      {
        id: 1276,
        name: 'Detra Coyier',
        country: {
          name: 'Ivory Coast',
          code: 'ci'
        },
        company: 'Schott Fiber Optics Inc',
        date: '2019-06-05',
        status: 'proposal',
        verified: true,
        activity: 95,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 13224
      },
      {
        id: 1277,
        name: 'Terrilyn Rodeigues',
        country: {
          name: 'Thailand',
          code: 'th'
        },
        company: 'Stuart J Agins',
        date: '2016-08-04',
        status: 'renewal',
        verified: true,
        activity: 35,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 64656
      },
      {
        id: 1278,
        name: 'Salome Lacovara',
        country: {
          name: 'Romania',
          code: 'ro'
        },
        company: 'Mitsumi Electronics Corp',
        date: '2015-06-05',
        status: 'unqualified',
        verified: true,
        activity: 78,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 61947
      },
      {
        id: 1279,
        name: 'Garry Keetch',
        country: {
          name: 'Luxembourg',
          code: 'lu'
        },
        company: 'Italian Express Franchise Corp',
        date: '2015-06-20',
        status: 'unqualified',
        verified: true,
        activity: 86,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 6380
      },
      {
        id: 1280,
        name: 'Matthew Neither',
        country: {
          name: 'United Kingdom',
          code: 'gb'
        },
        company: 'American Council On Sci & Hlth',
        date: '2018-06-24',
        status: 'qualified',
        verified: true,
        activity: 4,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 80112
      },
      {
        id: 1281,
        name: 'Theodora Restrepo',
        country: {
          name: 'Paraguay',
          code: 'py'
        },
        company: 'Kleri, Patricia S Esq',
        date: '2017-08-15',
        status: 'renewal',
        verified: true,
        activity: 66,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 42038
      },
      {
        id: 1282,
        name: 'Noah Kalafatis',
        country: {
          name: 'Saudi Arabia',
          code: 'sa'
        },
        company: 'Twiggs Abrams Blanchard',
        date: '2020-06-24',
        status: 'negotiation',
        verified: true,
        activity: 35,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 36052
      },
      {
        id: 1283,
        name: 'Carmen Sweigard',
        country: {
          name: 'Bolivia',
          code: 'bo'
        },
        company: 'Maui Research & Technology Pk',
        date: '2019-08-08',
        status: 'new',
        verified: true,
        activity: 96,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 51660
      },
      {
        id: 1284,
        name: 'Lavonda Hengel',
        country: {
          name: 'Hungary',
          code: 'hu'
        },
        company: 'Bradley Nameplate Corp',
        date: '2019-10-25',
        status: 'negotiation',
        verified: true,
        activity: 48,
        representative: {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png'
        },
        balance: 56142
      },
      {
        id: 1285,
        name: 'Junita Stoltzman',
        country: {
          name: 'Turkey',
          code: 'tr'
        },
        company: 'Geonex Martel Inc',
        date: '2015-03-19',
        status: 'proposal',
        verified: true,
        activity: 64,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 21631
      },
      {
        id: 1286,
        name: 'Herminia Nicolozakes',
        country: {
          name: 'Venezuela',
          code: 've'
        },
        company: 'Sea Island Div Of Fstr Ind Inc',
        date: '2019-09-09',
        status: 'negotiation',
        verified: true,
        activity: 0,
        representative: {
          name: 'Anna Fali',
          image: 'annafali.png'
        },
        balance: 59171
      },
      {
        id: 1287,
        name: 'Casie Good',
        country: {
          name: 'Japan',
          code: 'jp'
        },
        company: 'Papay, Debbie J Esq',
        date: '2016-11-27',
        status: 'new',
        verified: true,
        activity: 87,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 97858
      },
      {
        id: 1288,
        name: 'Reena Maisto',
        country: {
          name: 'Panama',
          code: 'pa'
        },
        company: 'Lane Promotions',
        date: '2016-08-22',
        status: 'new',
        verified: true,
        activity: 16,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 90388
      },
      {
        id: 1289,
        name: 'Mirta Mallett',
        country: {
          name: 'Singapore',
          code: 'sg'
        },
        company: 'Stephen Kennerly Archts Inc Pc',
        date: '2017-11-27',
        status: 'renewal',
        verified: true,
        activity: 14,
        representative: {
          name: 'Onyama Limba',
          image: 'onyamalimba.png'
        },
        balance: 68632
      },
      {
        id: 1290,
        name: 'Cathrine Pontoriero',
        country: {
          name: 'Finland',
          code: 'fi'
        },
        company: 'Business Systems Of Wis Inc',
        date: '2020-02-07',
        status: 'negotiation',
        verified: true,
        activity: 58,
        representative: {
          name: 'Ioni Bowcher',
          image: 'ionibowcher.png'
        },
        balance: 95552
      },
      {
        id: 1291,
        name: 'Filiberto Tawil',
        country: {
          name: 'Panama',
          code: 'pa'
        },
        company: 'Flash, Elena Salerno Esq',
        date: '2018-01-28',
        status: 'proposal',
        verified: true,
        activity: 0,
        representative: {
          name: 'Asiya Javayant',
          image: 'asiyajavayant.png'
        },
        balance: 39725
      },
      {
        id: 1292,
        name: 'Raul Upthegrove',
        country: {
          name: 'Panama',
          code: 'pa'
        },
        company: 'Neeley, Gregory W Esq',
        date: '2019-11-16',
        status: 'renewal',
        verified: true,
        activity: 59,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 62251
      },
      {
        id: 1293,
        name: 'Sarah Candlish',
        country: {
          name: 'Hong Kong',
          code: 'hk'
        },
        company: 'Alabama Educational Tv Comm',
        date: '2019-06-09',
        status: 'proposal',
        verified: true,
        activity: 30,
        representative: {
          name: 'Xuxue Feng',
          image: 'xuxuefeng.png'
        },
        balance: 73523
      },
      {
        id: 1294,
        name: 'Lucy Treston',
        country: {
          name: 'Jamaica',
          code: 'jm'
        },
        company: 'Franz Inc',
        date: '2017-02-07',
        status: 'proposal',
        verified: true,
        activity: 59,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 41331
      },
      {
        id: 1295,
        name: 'Judy Aquas',
        country: {
          name: 'Romania',
          code: 'ro'
        },
        company: 'Plantation Restaurant',
        date: '2020-09-14',
        status: 'renewal',
        verified: true,
        activity: 86,
        representative: {
          name: 'Ivan Magalhaes',
          image: 'ivanmagalhaes.png'
        },
        balance: 24208
      },
      {
        id: 1296,
        name: 'Yvonne Tjepkema',
        country: {
          name: 'United Kingdom',
          code: 'gb'
        },
        company: 'Radio Communications Co',
        date: '2017-01-06',
        status: 'renewal',
        verified: true,
        activity: 33,
        representative: {
          name: 'Stephen Shaw',
          image: 'stephenshaw.png'
        },
        balance: 56409
      },
      {
        id: 1297,
        name: 'Kayleigh Lace',
        country: {
          name: 'Denmark',
          code: 'dk'
        },
        company: 'Dentalaw Divsn Hlth Care',
        date: '2019-11-04',
        status: 'negotiation',
        verified: true,
        activity: 70,
        representative: {
          name: 'Elwin Sharvill',
          image: 'elwinsharvill.png'
        },
        balance: 70025
      }
    ];
  }

  constructor(private http: HttpClient) {}

  getCustomersMini() {
    return Promise.resolve(this.getData().slice(0, 5));
  }

  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  }

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  }

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  }

  getCustomers(params?: any) {
    return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
  }
};
