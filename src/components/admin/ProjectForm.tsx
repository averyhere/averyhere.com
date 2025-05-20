'use client'

import { useState } from "react"
// import { updateProfile } from './actions'
import buttonStyles from "@/components/button/button.module.css"
import { useRef } from 'react';

// import { Editor } from '@/components/forms/Editor'

import RichTextEditor, { type RichTextEditorHandle } from '@/components/forms/Editor'

export const ProjectForm = ({data}: {data?: any}) => {

  const ref = useRef(null);

  const handleSubmit = (e) => {
    console.log("🚀 ~ handleSubmit ~ e:", e)
    // const overview = (ref?.current as any)?.getContent();
    // console.log("🚀 ~ handleSubmit ~ overview:", overview)
  }

  return (
    <form className="w-full flex flex-col gap-4">
      
      <div className="flex flex-col">
        <label>Slug</label>
        <input name="slug" type="text" className="bg-purple/20 p-2" required />
      </div>
      
      <div className="flex flex-col">
        <label>Title</label>
        <input name="title" type="text" className="bg-purple/20 p-2" required />
      </div>
      
      <div className="flex flex-col">
        <label>Subtitle</label>
        <input name="subtitle" type="text" className="bg-purple/20 p-2" required />
      </div>
      
      <div className="flex flex-col">
        <label>Overview</label>
        {/* <textarea name="overview" className="bg-purple/20 p-2" required /> */}
        <RichTextEditor ref={ref} />
      </div>

      <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-4 border border-purple p-2'>
        <legend className="text-xl">Button Link</legend>

        <div className="flex flex-col">
          <label>Button Text</label>
          <input name="link_text" type="text" className="bg-purple/20 p-2" required />
        </div>

        <div className="flex flex-col">
          <label>Button URL</label>
          <input name="link_url" type="text" className="bg-purple/20 p-2" required />
        </div>
      </fieldset>


      <button type="submit" className={`${buttonStyles.button} col-start-2 justify-self-end`} formAction={handleSubmit}>Create</button>

    </form>
  )
}