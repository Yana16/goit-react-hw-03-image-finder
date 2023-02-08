import { RevolvingDot } from 'react-loader-spinner';
import style from '../Loader/loader.module.css';

const Loader = () => {
  return (
    <>
      <RevolvingDot
        radius={45}
        strokeWidth={5}
        color="#B9ECFE"
        ariaLabel="revolving-dot-loading"
        wrapperClass={style.Loader}
        visible={true}
      />
      <p className={style.Text}>Loading...</p>
    </>
  );
};

export default Loader;
