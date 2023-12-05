import React from 'react'
import Community from './component/Community'
import Casestudy from './component/Casestudy'
import Bloog from './component/Bloog'
import Media from './component/Media'
import Event from './component/Event'
import Chubs from './component/Chubs'
import Africans from './component/Africans'


export default function CommunityPage() {
  return (
    <div className='max-w-[90rem] bg-white '>
      <Community />
      <Casestudy />
      <Bloog />
      <Media />
      <Event />
      <Chubs /> 
      <Africans />     
    </div>
  )
}
