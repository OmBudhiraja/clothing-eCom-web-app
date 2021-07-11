import React from 'react'
import { useAppSelector } from '../../redux/hook';
import MenuItem from '../menu-item';
import {selectDirectorySections} from '../../redux/directory/directorySlice'
import styled from 'styled-components'

const Directory: React.FC = () => {
    const sections = useAppSelector(state => selectDirectorySections(state))
    return (
        <DirectoryMenu>
            {sections && sections.map(({title, imageUrl, id, size, linkUrl}) => (
                <MenuItem key={id} title={title} linkUrl={linkUrl} imageUrl={imageUrl} size={size}  />
            ))}
        </DirectoryMenu>
    )
}

const DirectoryMenu = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default Directory
