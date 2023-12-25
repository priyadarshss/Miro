import { forwardRef } from 'react'
import Image from 'next/image'

const Popup = forwardRef(({ onClose, position }, ref) => {
  const textAnimationStyle = {
    animation: 'fadeIn 0.5s ease-out',
  }

  return (
    <div
      ref={ref}
      style={{
        animation: 'fadeIn 0.2s ease-out',
        position: 'absolute',
        top: position.top + 40 + 'px',
        left: position.left + 'px',
        backgroundColor: '#FFFFFF',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        zIndex: 1000,
        fontFamily: '"Arial", sans-serif',
        color: '#333333',
        fontSize: '14px',
        lineHeight: '1.5',
        display: 'flex',
        justifyContent: 'space-between',
        width: '600px',
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
      <div style={{ width: '50%' }}>
        <h2
          style={{
            ...textAnimationStyle,
            color: 'gray',
            fontSize: '14px',
            marginBottom: '20px',
          }}
        >
          Product
        </h2>
        <ul
          style={{
            ...textAnimationStyle,
            listStyle: 'none',
            padding: '0',
            margin: '0',
          }}
        >
          {[
            'Product Overview',
            'Visual Project Management',
            'Diagramming & Process Mapping',
            'Product Development Workflows',
            'Content & Data Visualization',
          ].map((item) => (
            <li key={item} style={{ marginBottom: '20px' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          height: '240px',
          border: '1px solid gray',
          marginRight: '10px',
        }}
      />

      <div style={{ width: '45%' }}>
        <h2
          style={{
            ...textAnimationStyle,
            color: 'gray',
            fontSize: '14px',
            marginBottom: '20px',
          }}
        >
          What&apos;s New
        </h2>
        <div
          style={{
            ...textAnimationStyle,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Image
              src={
                'https://images.ctfassets.net/w6r2i5d8q73s/CKhiCgj9RX0CWyB1CVuU2/c946d50cb6a5442914ec5ef29c1e0c28/miro-creators_illustration-02_EN_standard_1_1_2x.png?fm=webp&q=75'
              }
              alt='Release'
              width={40}
              height={40}
              style={{ borderRadius: '4px', border: '1px solid black' }}
            />
            <span>Explore our 2023 releases</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Image
              src={
                'https://images.ctfassets.net/w6r2i5d8q73s/CKhiCgj9RX0CWyB1CVuU2/c946d50cb6a5442914ec5ef29c1e0c28/miro-creators_illustration-02_EN_standard_1_1_2x.png?fm=webp&q=75'
              }
              alt='Release'
              width={40}
              height={40}
              style={{ borderRadius: '4px', border: '1px solid black' }}
            />{' '}
            <span>Innovate with Miro Assist</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Image
              src={
                'https://images.ctfassets.net/w6r2i5d8q73s/CKhiCgj9RX0CWyB1CVuU2/c946d50cb6a5442914ec5ef29c1e0c28/miro-creators_illustration-02_EN_standard_1_1_2x.png?fm=webp&q=75'
              }
              alt='Release'
              width={40}
              height={40}
              style={{ borderRadius: '4px', border: '1px solid black' }}
            />{' '}
            <span>Plan your quarter with Azure</span>
          </div>
          <h3
            style={{
              color: '#2e4de6',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            See all updates
          </h3>
        </div>
      </div>
    </div>
  )
})

Popup.displayName = 'Popup'

export default Popup
