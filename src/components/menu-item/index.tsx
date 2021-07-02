import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'

interface Props {
    title: string;
    imageUrl: string;
    size: 'lg' | 'sm'
}

const MenuItem: React.FC<Props> = ({title, imageUrl, size}) => {
    const history = useHistory()
    const currentPath = history.location.pathname
    const style = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "100% 100%",
    }

    return (
        <div onClick={()=> history.push(`${currentPath}${title}`)} className={`menu-item ${size === 'lg' ? 'large': ''}`}>
          <div style={style} className="bg-image"></div>
          <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
    )
}

export default MenuItem
