import React, { useState } from 'react'
import MenuItem from '../menu-item';
import './index.scss'
import {data} from './data'

const Directory: React.FC = () => {
    const [items] = useState(data)
    return (
        <div className='directory-menu'>
            {items && items.map(({title, imageUrl, id, size}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}  />
            ))}
        </div>
    )
}

export default Directory
