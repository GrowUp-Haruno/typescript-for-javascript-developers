import axios from 'axios';

export {};

let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios
  .get(url)
  .then((res) => {
    // const { data }: any = res;
    interface Article {
      id: number;
      title?: string;
      description: string;
    }
    let data: Article[] = res.data;
    data = [
      {
        id: 1,
        // title: "title",
        description: 'description',
      },
    ];
    console.log(data);
  })
  .catch(() => console.log('error'));
