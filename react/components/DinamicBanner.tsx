import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getData.graphql'
import { AllCategories } from './AllCategories'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

interface PropsImage {
  src: string
  alt: string
}

const DinamicBanner = ({ src, alt }: PropsImage) => {
  const [visibility, setVisibility] = useState(false)

  const handledVisibility = () => {
    setVisibility(!visibility)
  }
  const CSS_HANDLES = ["deparment", "deparmentHidden", "deparmentHeader", "closeIcon", "clickIcon"]
  const handles = useCssHandles(CSS_HANDLES)
  const { data, loading } = useQuery(QUERY_VALUE)
  console.log('data-Banner', data)
  if (loading) {
    return (
      <div>Loading...</div>
    )
  } else if (visibility) {
    return <div className={handles.deparment}>
      <div className={handles.deparmentHeader}>
        <h3>Categorias</h3>
        <span className={handles.closeIcon} onClick={handledVisibility}>X</span>
      </div>
      <AllCategories deparments={data.categories} />
    </div>
  } else if (!visibility) {
    return <span onClick={handledVisibility}>
      <div className={handles.deparmentHidden}>
        <h3>Conoce nuestras categorias</h3>
        <img className={handles.clickIcon} src={src} alt={alt}></img>
      </div>
    </span>
  } else {
    return <div>Error</div>
  }
}

DinamicBanner.defaultProps = {
  src: '/assets/images/click-r.png'
}

DinamicBanner.schema = {
  title: 'Baner categorias',
  description: 'Configuracion Banner',
  type: 'object',
  properties: {
    srcdesktop: {
      title: 'imagen',
      description: 'Imagen',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    }, alt: {
      title: 'Alt de la imagen',
      description: 'click',
      type: 'string',
    },
  }
}

export default DinamicBanner
