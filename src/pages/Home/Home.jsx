import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Gallery from '../../components/Gallery/Gallery';
import SinglePhoto from '../../components/Gallery/SinglePhoto/SinglePhoto';
import WeddingBreadcrumb from '../../components/WeddingBreadcrumb/WeddingBreadcrumb';
import { fetchGallery } from '../../store/gallery/slice';
import Photo from '../../components/Gallery/SinglePhoto/SinglePhoto';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGallery());
  }, []);
  const images = useSelector((state) => state.gallery.items)
  return (
    <>
      <WeddingBreadcrumb parent="Gallery" child="wedding ideas" />
      <Gallery>
        {images.map((el) => <Photo photo={el.url} link={`/${el.id}`} key={el.id} title={el.author}/>)}
      </Gallery>
    </>
  );
};

export default Home;
