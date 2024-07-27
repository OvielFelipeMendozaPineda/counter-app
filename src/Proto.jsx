import PropTypes from 'prop-types'

export default function Proto(props) {

  return (
    <div>
      <h1> {props.title} </h1>
      <p>Propiedad: Description : {props.description} </p>
      <p> Propiedad: Value: {props.value} </p>
    </div>
  )
}
// Se definen como default props o se desestructuran al pasarlos como argumento al comoponente ({ tile, subtitle, value})
Proto.propTypes = {
  title: PropTypes.string.isRequired
}