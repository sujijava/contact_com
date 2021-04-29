import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

export default function Logout() {
  const history = useHistory()
  const { logout } = useAuth()
  const [error, setError] = useState('')

  useEffect(() => {
    logout()
    history.push('/')
  }, [])
  return <div>logout</div>
}
