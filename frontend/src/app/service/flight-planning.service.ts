import {Injectable} from '@angular/core';

export interface Planning {
  flightNumber?: string;
  label?: string;
  dateTime?: {
    planningTime?: Date;
    actualTime?: Date;
  };
  departure?: {
    short?: string;
    long?: string;
  }
  status?: 'success' | 'info' | 'warning' | 'danger' | null | undefined;
  icon?: string;
  tooltip?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlightPlanningService {
  // this data can be get from onerecord server.
  // this.onerecordService.getLogisticEvents().subscribe();
  getFlight571() {
    return (
      {
        "ops1": [
          {
            flightNumber: 'TK-571',
            label: 'UWS',
            status: 'success',
            departure: {
              short: 'IST',
              long: 'ISTANBUL'
            },
            dateTime: {
              planningTime: new Date(2024, 9, 4, 22, 0, 0, 0),
              actualTime: new Date(2024, 9, 4, 21, 30, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'LIR',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 4, 22, 30, 0, 0),
              actualTime: new Date(2024, 9, 4, 22, 0, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'LPOW',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 4, 23, 0, 0, 0),
              actualTime: new Date(2024, 9, 4, 22, 35, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'ALS',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 4, 23, 15, 0, 0),
              actualTime: new Date(2024, 9, 4, 22, 55, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'ALE',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 4, 23, 45, 0, 0),
              actualTime: new Date(2024, 9, 4, 23, 40, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'OFB',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 4, 23, 50, 0, 0),
              actualTime: new Date(2024, 9, 4, 23, 45, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'WHU',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 0, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 0, 0, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'EXC',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 1, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 1, 0, 0, 0),
            },
            tooltip: 'FFM\nFWB\nFHL\nCPM\nLDM\nUCM'
          },
          {
            flightNumber: 'TK-571',
            label: 'EXR',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 1, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 1, 0, 0, 0),
            }
          }
        ] as Planning[],
        "ops2": [
          {
            flightNumber: 'TK-571',
            label: 'WDO',
            status: 'success',
            departure: {
              short: 'DOH',
              long: 'Hamad International'
            },
            dateTime: {
              planningTime: new Date(2024, 9, 5, 3, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 2, 50, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'ONB',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 3, 10, 0, 0),
              actualTime: new Date(2024, 9, 5, 3, 0, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'AUS',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 3, 20, 0, 0),
              actualTime: new Date(2024, 9, 5, 3, 10, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'AUE',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 4, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 4, 15, 0, 0),
            }
          },
          {
            flightNumber: 'TK-571',
            label: 'FIW',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 5, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 4, 45, 0, 0),
            }
          }
        ] as Planning[],
      }
    );
  }

  getFlight1071() {
    return (
      {
        "ops1": [
          {
            flightNumber: 'TK-1071',
            label: 'UWS',
            status: 'success',
            departure: {
              short: 'IST',
              long: 'ISTANBUL'
            },
            dateTime: {
              planningTime: new Date(2024, 9, 5, 7, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 6, 30, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'LIR',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 7, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 7, 0, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'FOW',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 8, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 7, 30, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'ALS',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 8, 10, 0, 0),
              actualTime: new Date(2024, 9, 5, 7, 53, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'ALE',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 8, 40, 0, 0),
              actualTime: new Date(2024, 9, 5, 8, 28, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'OFB',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 8, 50, 0, 0),
              actualTime: new Date(2024, 9, 5, 8, 40, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'WHU',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 9, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 8, 55, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'EXC',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 10, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 9, 0, 0, 0),
            },
            tooltip: 'FFM\nFWB\nFHL\nCPM\nLDM\nUCM'
          },
          {
            flightNumber: 'TK-1071',
            label: 'EXR',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 10, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 9, 30, 0, 0),
            },
          }
        ] as Planning[],
        "ops2": [
          {
            flightNumber: 'TK-1071',
            label: 'WDO',
            status: 'success',
            departure: {
              short: 'DOH',
              long: 'Hamad International'
            },
            dateTime: {
              planningTime: new Date(2024, 9, 5, 12, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 11, 55, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'ONB',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 12, 10, 0, 0),
              actualTime: new Date(2024, 9, 5, 12, 55, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'AUS',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 12, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 14, 0, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'AUE',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 13, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 15, 0, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1071',
            label: 'LPIW',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 14, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 16, 0, 0, 0),
            }
          }
        ] as Planning[],
      }
    );
  }

  getFlight1453() {
    return (
      {
        "ops1": [
          {
            flightNumber: 'TK-1453',
            label: 'UWS',
            status: 'success',
            departure: {
              short: 'IST',
              long: 'ISTANBUL'
            },
            dateTime: {
              planningTime: new Date(2024, 9, 5, 12, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 11, 30, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'LIR',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 12, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 12, 0, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'LPOW',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 13, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 13, 30, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'ALS',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 13, 50, 0, 0),
              actualTime: new Date(2024, 9, 5, 13, 15, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'ALE',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 14, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 15, 0, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'OFB',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 14, 50, 0, 0),
              actualTime: new Date(2024, 9, 5, 15, 20, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'WHU',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 15, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 15, 30, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'EXC',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 16, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 17, 0, 0, 0),
            },
            tooltip: 'FFM\nFWB\nFHL\nCPM\nLDM\nUCM'
          },
          {
            flightNumber: 'TK-1453',
            label: 'EXR',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 16, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 17, 30, 0, 0),
            }
          }
        ] as Planning[],
        "ops1_1": [
          {
            flightNumber: 'TK-1453',
            label: 'LPOW',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 13, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 13, 30, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'ALS',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 13, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 13, 15, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'ALE',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 14, 40, 0, 0),
              actualTime: new Date(2024, 9, 5, 15, 0, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'OFB',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 14, 50, 0, 0),
              actualTime: new Date(2024, 9, 5, 15, 20, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'WHU',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 15, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 15, 30, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'EXC',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 16, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 17, 0, 0, 0),
            },
            tooltip: 'FFM\nFWB\nFHL\nCPM\nLDM\nUCM'
          },
          {
            flightNumber: 'TK-1453',
            label: 'EXR',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 17, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 17, 30, 0, 0),
            }
          }
        ] as Planning[],
        "ops2": [
          {
            flightNumber: 'TK-1453',
            label: 'WDO',
            status: 'danger',
            departure: {
              short: 'DOH',
              long: 'Hamad International'
            },
            dateTime: {
              planningTime: new Date(2024, 9, 5, 18, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 18, 20, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'ONB',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 18, 10, 0, 0),
              actualTime: new Date(2024, 9, 5, 18, 30, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'AUS',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 18, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 18, 55, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'AUE',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 19, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 19, 45, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'LPIW',
            status: 'danger',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 20, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 20, 30, 0, 0),
            }
          }
        ] as Planning[],
        "ops3": [
          {
            flightNumber: 'TK-1453',
            label: 'WDO',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 18, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 18, 20, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'ONB',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 18, 40, 0, 0),
              actualTime: new Date(2024, 9, 5, 18, 30, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'AUS',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 19, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 18, 55, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'AUE',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 20, 0, 0, 0),
              actualTime: new Date(2024, 9, 5, 19, 45, 0, 0),
            }
          },
          {
            flightNumber: 'TK-1453',
            label: 'LPIW',
            status: 'success',
            dateTime: {
              planningTime: new Date(2024, 9, 5, 20, 30, 0, 0),
              actualTime: new Date(2024, 9, 5, 20, 30, 0, 0),
            }
          }
        ] as Planning[],
      }
    );
  }
}
