import Directory from "../../components/directory/directory.component";


const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/11/21/11/16/fashion-1844724__480.jpg',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/15/42/woman-1839955__480.jpg',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918__480.jpg',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849__480.jpg',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814__480.jpg',
    },
  ];

  return (
    <Directory categories={categories} />
  );
}

export default Home;