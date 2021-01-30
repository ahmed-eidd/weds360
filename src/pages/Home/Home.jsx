import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchGallery} from '../../store/gallery/slice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGallery())
  },[])
  return (
    <div>
      Home  
    </div>
  )
}

export default Home
  