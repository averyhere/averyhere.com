'use client'

import { useState, useEffect, useRef } from 'react'
import buttonStyles from "./button/button.module.css"
import accordionStyles from "./accordion.module.css"
import { HiOutlineExternalLink } from "react-icons/hi"
import { PiArrowFatLineDownDuotone } from "react-icons/pi";
import { Button } from '@/components'

export const Accordion = ({data}:{data:any}) => {
  
  return (
    <div className="divide-y divide-purple divide-dashed">
      {data?.map((item:any) => (
        <AccordionItem data={item} key={item.id} />
      ))}
    </div>
  )
}

const AccordionItem = ({data}: {data:any}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    // Fix for animation while retaining accessibility
    if (isOpen) {
      // Immediately make visible
      setIsVisible(true)
    } else {
      // Closing, wait a moment and set invisible
      setTimeout(()=>{
        setIsVisible(false)
      }, 500)
    }

  }, [isOpen])

  return (
    <article className=" py-2" key={data.id}>
      <button 
        className={`flex w-full items-start justify-between cursor-pointer ${buttonStyles.nestedButtonGroup}`} 
        onClick={()=>{setIsOpen(!isOpen)}}
        aria-expanded={isOpen}
        aria-controls={`accordionPanel-${data.id}`}
        id={`accordionTrigger-${data.id}`}
      >
        <div className='text-left'>
          <h2 className="font-bold text-xl mr-2">{data.title}</h2>
          <div><span className="inline text-purple font-bold text-sm" aria-hidden="true">/&zwj;/</span>&nbsp;<span className="inline font-light text-sm">{data.subtitle}</span></div>
        </div>
        <div className={`${buttonStyles.button} !p-1`}>
          <span className='sr-only'>{isOpen ? 'Close' : 'Open'}</span>
          <PiArrowFatLineDownDuotone aria-hidden="true" className={`size-6 transition ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      
      <section 
        id={`accordionPanel-${data.id}`}
        role="region"
        aria-labelledby={`accordionTrigger-${data.id}`}
        aria-hidden={!isOpen}
        className={accordionStyles['accordion-panel']}
        style={{
          height: isOpen ? ref.current?.offsetHeight : 0,
          visibility: isVisible ? 'visible' : 'hidden',
        }}
        // className={`overflow-hidden h-auto transition-all ease-in-out duration-1000 ${isOpen ? `max-h-[${panelHeight}px]` : 'max-h-0'}`}
      >
        <div ref={ref} className={accordionStyles['accordion-innerPanel']}>
          <div className="prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{__html: data.overview}} />
          {data.link_url && data.link_text && (
            <div className="mt-6 flex justify-end">
              <Button
                href={data.link_url}
                size="sm"
                icon={HiOutlineExternalLink}
                iconPosition="end"
                external
              >
                {data.link_text}
              </Button>
            </div>
          )}
        </div>
      </section>
    </article>
  )
}
