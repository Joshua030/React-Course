
import PropTypes from 'prop-types';
export const FirstApp = ({ title, subTitle }) => {
  return (
    <>
      <h1>{title} </h1>
      <p> {subTitle}</p>
    </>
  )
}

FirstApp.propTypes = {
title: PropTypes.string.isRequired,
subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Jose Ceballos',
  subTitle: 'No hay subtitulo'
  // title: 'No hay titulo'
}

