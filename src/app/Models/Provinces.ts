export class Provinces {
    object:
      {
        cities:
          {
            city: {
              id: number,
              name: string;
            };
            userCount: number;
          }[];
        province: {
          id: number;
          name: string;
        };
        userCount: number;
      }[]
    ;
    status: boolean;
    message: string;
  }
  export class Province{
    cities:
      {
        city: {
          id: number,
          name: string;
        };
        userCount: number;
      }[];

    province: {
      id: number;
      name: string;
    };
    userCount: number;
  }
