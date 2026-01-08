import React, { useState, useEffect } from 'react'

const AdaptiveCurve = ({ strokeColor = '#FF96B2', fillColor = '#FFF', strokeWidth = '30px' }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1500)
  const [pathData, setPathData] = useState('')

  useEffect(() => {
    // Inicializar el path al montar
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Throttle para mejorar el rendimiento
    let timeoutId
    const throttledResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        handleResize()
      }, 100)
    }

    window.addEventListener('resize', throttledResize)
    return () => {
      window.removeEventListener('resize', throttledResize)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    // Calcular el path dinámicamente basado en el ancho de la pantalla
    const calculatePath = () => {
      // Path original completo (desktop) - mantiene la forma original
      const desktopPath = `M321.39,56.44c58-10.79,114.16-30.13,172-41.86c82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,${windowWidth},3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z`
      
      // Path intermedio para tablet - menos complejo pero mantiene la forma
      const tabletPath = `M250,50c45-9,90-25,135-35c65-14,130-16,195-2C650,25,720,60,790,75c50,14,100,20,${windowWidth},10V0H0V25A500,500,0,0,0,250,50Z`
      
      // Path simplificado para móvil - más suave y menos pronunciado para no cubrir contenido
      const mobilePath = `M150,35c35-6,70-15,105-20c45-9,90-10,135-2C450,20,500,40,550,50c35,10,70,15,${windowWidth},8V0H0V18A300,300,0,0,0,150,35Z`

      // Seleccionar path según breakpoints
      if (windowWidth < 640) {
        // Móvil: path simplificado y menos pronunciado
        setPathData(mobilePath)
      } else if (windowWidth < 1024) {
        // Tablet: path intermedio
        setPathData(tabletPath)
      } else {
        // Desktop: path completo original
        setPathData(desktopPath)
      }
    }

    calculatePath()
  }, [windowWidth])

  // Path por defecto (desktop) mientras carga
  const defaultPath = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86c82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,2140.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"

  // No renderizar el SVG en pantallas móviles
  if (windowWidth < 640) {
    return null
  }

  return (
    <div className="custom-shape-divider-top-1">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1500 120" 
        preserveAspectRatio="none"
        style={{ transition: 'all 0.3s ease-in-out' }}
      >
        <path 
          d={pathData || defaultPath}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill="none"
          style={{ 
            transition: 'd 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            vectorEffect: 'non-scaling-stroke'
          }}
        />
        <path 
          d={pathData || defaultPath}
          fill={fillColor}
          style={{ 
            transition: 'd 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </svg>
    </div>
  )
}

export default AdaptiveCurve

