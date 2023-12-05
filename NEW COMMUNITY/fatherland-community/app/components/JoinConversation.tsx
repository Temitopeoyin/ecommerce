"use client"

import Container from '@/components/ui/container'
import React, { useState } from 'react'
// import { AiOutlineUp } from "react-icons/ai"
// import { BiChevronUp } from 'react-icons/bi'
import { BsReply } from 'react-icons/bs'
import { FaRegShareSquare } from 'react-icons/fa'
import { HiOutlineArrowCircleRight, HiOutlineChevronUp } from 'react-icons/hi'

const TOPICS = [
  {
    id: "1",
    name: "Black Holes",
    time: "2 days ago",
    replies: 2,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
  {
    id: "2",
    name: "The Dendera Light",
    time: "2 days ago",
    replies: 3,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
  {
    id: "3",
    name: "The Dancing Plaque",
    time: "2 days ago",
    replies: 3,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
]

export default function JoinConversation() {
  const [showContent, setShowContent] = useState<boolean>(true)

  console.log(showContent)

  const renderComments = TOPICS.map(topic => {
    return (
      <React.Fragment key={topic.id}>
        <div className='mt-8 flex space-x-4'>
          <HiOutlineChevronUp className="my-auto cursor-pointer hover:" onClick={() => setShowContent(!showContent)} />
          <h5 className='text-secondary text-lg font-[500]  '>{topic.name}</h5>
          <p className='text-muted text-base font-[300] '>{topic.time}</p>
        </div>
        {
          showContent ? (
            <div  className="px-8 mt-4 ">
              <p className='font-[300] leading-7 '>{topic.content}</p>
              <p className='underline mt-4 cursor-pointer flex'>Learn More <HiOutlineArrowCircleRight className="my-auto ml-4" /> </p>
              <div className='flex space-x-5 mt-4'>
                <p className='flex'><BsReply className="my-auto mr-2" /> {topic.replies} Replies </p>
                <p className='flex'><FaRegShareSquare className="my-auto mr-2" /> Share</p>
              </div>
            </div>
          ) : null
        }
      </React.Fragment>
    )
  })
  
  return (
    <Container>
      <div className='mt-20 '>
        <h4 className='text-3xl text-[#161915] font-[600]  '>Join Conversation</h4>
        <p className='text-muted text-[#14202d] text-lg '>Check out the most popular topics</p>
      </div>
      <div className='mt-10 mb-20 border-[20px] border-[#26D44B33]  rounded-lg p-12'>
        <h5 className='text-[#000] font-[600] '>ALL TOPICS</h5>
        {renderComments}
      </div>
    </Container>
  )
}
