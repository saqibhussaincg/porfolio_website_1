import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaBehance} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='www.linkedin.com' target='_blank'><BsLinkedin /></a>
        <a href='www.linkedin.com' target='_blank'><FaGithub /></a>
        <a href='www.linkedin.com' target='_blank'><FaBehance /></a>
    </div>
  )
}

export default HeaderSocial