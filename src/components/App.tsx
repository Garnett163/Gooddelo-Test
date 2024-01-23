import './App.css';
import { useEffect } from 'react';
import Home from './Home/Home';
import Preloader from './Preloader/Preloader';
import { useAppDispatch } from '../hooks/redux';
import { useGetDataQuery } from '../Api/mainApi';
import { setData, setExceedStatus } from '../redux/dushnilaSlice';

function App() {
  const dispatch = useAppDispatch();
  const { data, error, isError, isLoading, refetch } = useGetDataQuery();

  useEffect(() => {
    if (data) {
      dispatch(setData(data));
      if (+data?.co2 > 800 || +data?.temp > 27) {
        dispatch(setExceedStatus(true));
      } else {
        dispatch(setExceedStatus(false));
      }
    } else if (isError) {
      console.error('Произошла ошибка при получении данных', error);
    }
  }, [data, dispatch, error, isError]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 60000);

    return () => clearInterval(intervalId);
  }, [refetch]);

  if (isLoading) {
    return <Preloader />;
  }
  return <Home />;
}

export default App;
