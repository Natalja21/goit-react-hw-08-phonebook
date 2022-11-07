import { CirclesWithBar } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';
export default function Loader() {
  return (
    <Backdrop >
    <CirclesWithBar
            height="100"
            width="100"
            color="rgb(196, 159, 107)"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
      />
      </Backdrop>
  )
}