import React from 'react'
import GridList from '~/components/GridList/GridList.component'
import GridListItem from '~/components/GridListItem/GridListItem.component'
import { PlaylistModelWithId } from '~/models/playlist.model'


interface MainProps {
    items: PlaylistModelWithId[]
}

const Main = ({items}: MainProps) => {
  return (
    <GridList>
        {items.map(item => (
            <GridListItem item={item} key={item.id} />
        ))}
    </GridList>
  )
}

export default Main