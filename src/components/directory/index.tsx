import React from 'react'
import { useAppSelector } from '../../redux/hook';
import MenuItem from '../menu-item';
import {selectDirectorySections} from '../../redux/directory/directorySlice'
import './index.scss'

const Directory: React.FC = () => {
    const sections = useAppSelector(state => selectDirectorySections(state))
    return (
        <div className='directory-menu'>
            {sections && sections.map(({title, imageUrl, id, size, linkUrl}) => (
                <MenuItem key={id} title={title} linkUrl={linkUrl} imageUrl={imageUrl} size={size}  />
            ))}
        </div>
    )
}

export default Directory
