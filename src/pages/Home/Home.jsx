import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Gallery from '../../components/Gallery/Gallery';
import SinglePhoto from '../../components/Gallery/SinglePhoto/SinglePhoto';
import WeddingBreadcrumb from '../../components/WeddingBreadcrumb/WeddingBreadcrumb';
import { fetchGallery } from '../../store/gallery/slice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGallery());
  }, []);
  return <><WeddingBreadcrumb parent="Gallery" child="wedding ideas" />
  <Gallery>

  </Gallery>
  </>;
};

export default Home;
