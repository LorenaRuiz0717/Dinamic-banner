import React from "react"
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'


type Props = {
  deparments: Categories[]
}

type Categories = {
  id: number,
  name: string
}



const AllCategories = ({ deparments }: Props) => {

  const CSS_HANDLES = ["deparment", "container_deparment", "container_deparment1"]
  const handles = useCssHandles(CSS_HANDLES)

  return (
    deparments ?
      <div className={handles.container_deparment1}>
        <div className={handles.container_deparment}>{deparments.map((deparment: Categories) => {
          return <div key={deparment.id}>
            <p>
              <span>{deparment.id}. </span>
              <span>{deparment.name}</span>
            </p>
          </div>
        })}</div>
      </div> :
      <>
        <div>Error</div>
      </>

  )
}
export { AllCategories }
