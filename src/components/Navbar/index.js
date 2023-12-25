'use client'
import Image from 'next/image'
import Logo from '/public/miro.png'
import { forwardRef, useEffect, useRef, useState } from 'react'
import SignupModal from '../SignupModal'
import Popup from '../Popup'

const Index = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 })
  const navbarRef = useRef(null)
  const popupRef = useRef(null)
  const [showModal, setShowModal] = useState(false)

  const handleClickSignup = () => {
    setShowModal(true)
  }

  const handleLinkClick = (event) => {
    event.preventDefault()
    const navbarRect = navbarRef.current.getBoundingClientRect()
    const linkRect = event.target.getBoundingClientRect()
    setPopupPosition({
      top: linkRect.bottom - navbarRect.top,
      left: linkRect.left - navbarRect.left,
    })
    setShowPopup(true)
  }

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false)
    }
  }

  useEffect(() => {
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showPopup])

  const handleClick = (event) => {
    console.log(`${event.target.name} was clicked`)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
        borderBottom: '1px solid #ccc',
      }}
    >
      <div
        ref={navbarRef}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          background: '#fff',
          gap: '50px',
          width: '92%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              cursor: 'pointer',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image
              src={Logo}
              alt='Miro Logo'
              height='40'
              width='40'
              style={{ margin: '5px 10px 5px 10px' }}
            />
            <span
              onClick={handleClick}
              name='logo'
              style={{ fontSize: '25px' }}
            >
              miro
            </span>
          </div>
          <div>
            <a
              onClick={handleLinkClick}
              name='home'
              style={{
                margin: '0 10px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'black',
              }}
            >
              What is Miro
              <div
                style={{
                  display: 'inline-block',
                  borderRight: ' 2px solid black',
                  borderBottom: '2px solid black',
                  width: '7px',
                  height: '7px',
                  transform: 'rotate(-315deg)',
                  marginLeft: '10px',
                  marginBottom: '4px',
                }}
              />
            </a>

            <a
              onClick={handleLinkClick}
              name='solutions'
              style={{
                margin: '0 10px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'black',
              }}
            >
              Solutions
              <div
                style={{
                  display: 'inline-block',
                  borderRight: ' 2px solid black',
                  borderBottom: '2px solid black',
                  width: '7px',
                  height: '7px',
                  transform: 'rotate(-315deg)',
                  marginLeft: '10px',
                  marginBottom: '4px',
                }}
              />
            </a>
            <a
              onClick={handleLinkClick}
              name='solutions'
              style={{
                margin: '0 10px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'black',
              }}
            >
              Resources
              <div
                style={{
                  display: 'inline-block',
                  borderRight: ' 2px solid black',
                  borderBottom: '2px solid black',
                  width: '7px',
                  height: '7px',
                  transform: 'rotate(-315deg)',
                  marginLeft: '10px',
                  marginBottom: '4px',
                }}
              />
            </a>
            <a
              onClick={handleLinkClick}
              name='solutions'
              style={{
                margin: '0 10px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'black',
              }}
            >
              Enterprise
              <div
                style={{
                  display: 'inline-block',
                  borderRight: ' 2px solid black',
                  borderBottom: '2px solid black',
                  width: '7px',
                  height: '7px',
                  transform: 'rotate(-315deg)',
                  marginLeft: '10px',
                  marginBottom: '4px',
                }}
              />
            </a>
            <a
              onClick={handleClick}
              name='solutions'
              style={{
                margin: '0 10px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'black',
              }}
            >
              Pricing
            </a>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <a
            href='/solutions'
            onClick={handleClick}
            name='solutions'
            style={{
              margin: '0 10px',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'black',
            }}
          >
            Contact Sales
          </a>
          <button
            onClick={handleClick}
            name='login'
            style={{
              cursor: 'pointer',
              padding: '8px 10px',
              border: '1px solid black',
              borderRadius: '10px',
              backgroundColor: '#fff',
              color: 'black',
              fontSize: '1em',
            }}
          >
            Login
          </button>
          <button
            onClick={handleClickSignup} // Modified to show the modal on click
            name='signup'
            style={{
              margin: '0 5px',
              cursor: 'pointer',
              backgroundColor: '#2e4de6',
              color: '#fff',
              border: 'none',
              padding: '8px 15px',
              borderRadius: '5px',
              fontSize: '1em',
            }}
          >
            Sign up free
          </button>
        </div>
        {showPopup && (
          <Popup
            ref={popupRef}
            position={popupPosition}
            onClose={() => setShowPopup(false)}
          />
        )}
        {showModal && <SignupModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  )
}

export default Index
