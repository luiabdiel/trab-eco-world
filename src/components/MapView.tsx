'use client'

import { Fragment, useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { createPortal } from 'react-dom'
import { IoMdClose } from 'react-icons/io'
import { API_KEY } from '@/constants/environments'
import positions from '../../positions.json'

const center = {
  lat: -9.411795767433379,
  lng: -40.503899748402446,
}

interface Position {
  Latitude: number
  Longitude: number
  name: string
  description: string
}

export function MapView() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  })

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(
    null,
  )

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
  }, [])

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedPosition(null)
  }

  const Modal = () => {
    if (!modalIsOpen || !selectedPosition) return null

    return createPortal(
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 p-3">
        <div className="relative w-full rounded bg-white p-5 sm:max-w-[425px]">
          <button
            onClick={closeModal}
            className="p- absolute right-1 top-1 rounded p-2 transition-colors hover:bg-slate-200"
          >
            <IoMdClose size={24} />
          </button>
          <h2 className="text-lg font-semibold xl:text-xl">
            {selectedPosition.name}
          </h2>
          <p className="mt-2 text-sm text-gray-600 xl:text-base">
            {selectedPosition.description}
          </p>
        </div>
      </div>,
      document.body,
    )
  }

  return (
    <Fragment>
      {isLoaded && (
        <GoogleMap
          onLoad={onLoad}
          mapContainerStyle={{ width: '100%', height: '91vh' }}
          center={center}
          zoom={5}
          options={{
            zoomControl: false,
            mapTypeControl: false,
            styles: [
              {
                elementType: 'labels',
                featureType: 'poi.business',
                stylers: [{ visibility: 'off' }],
              },
            ],
          }}
        >
          {positions.map((position, i) => (
            <Marker
              key={i}
              position={{
                lat: position.Latitude,
                lng: position.Longitude,
              }}
              onClick={() => {
                setSelectedPosition(position)
                setModalIsOpen(true)
              }}
            />
          ))}
        </GoogleMap>
      )}

      <Modal />
    </Fragment>
  )
}
