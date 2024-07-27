import PropTypes from 'prop-types'

import React from 'react'

export default function DefaultProtoTypes({ title, subtitle,value, name })  {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{value}</p>
      <p>{name}</p>
    </div>
  )
}

// Restricciones de tipado, esto en typescript no es requeried
DefaultProtoTypes.propTypes = {
  title: PropTypes.string.isRequired
}
// Valores por defecto
DefaultProtoTypes.defaultProps = {
  title: 'no hay titulo',
  subtitle: 'no hay ',
  value: 'No existe',
  name: 'Felipe Mendoza'
}