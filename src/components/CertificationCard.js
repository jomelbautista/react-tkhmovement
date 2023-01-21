import React from 'react'

const CertificationCard = ({ certification }) => {
  return (
    <li className="certification text-brand">
      {certification.title}
    </li>
  )
}

export default CertificationCard