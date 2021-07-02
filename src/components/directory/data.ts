type Size = 'lg' | 'sm'

interface DataObj  {
  title : string;
  imageUrl : string;
  id : number;
  size : Size;
}

export const data : DataObj[] = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      size: 'sm'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      size: 'sm',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      size: 'sm'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      id: 4,
      size: 'lg'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 5,
      size: 'lg'
    }
  ]