'use client'

import { upsertProject, deleteProject } from './actions'
import { useSearchParams } from 'next/navigation'
import buttonStyles from "@/components/button/button.module.css"
import { useRef, useEffect, useState } from 'react';
import RichTextEditor, { type RichTextEditorHandle } from '@/components/RichTextEditor'
import { PiCheckFatDuotone, PiWarningDiamondDuotone } from "react-icons/pi";

export const ProjectForm = ({data}: {data?: any}) => {
  const [hasButton, setHasButton] = useState<boolean>(false)
  const searchParams = useSearchParams();
  const ref = useRef(null);

  const showToast = searchParams.get('success') && searchParams.get('action');
  const toastData = {
    success: searchParams.get('success') === 'true' ? true : false,
    action: searchParams.get('action') as string,
  }

  const handleSubmit = (formData: FormData) => {
    formData.append('overview',(ref?.current as any)?.getContent())
    upsertProject(formData);
  }

  useEffect(() => {
    if (data && data?.overview) {
      (ref?.current as any)?.setContent(data.overview);

      if (data?.link_text) setHasButton(true);
    }

    return () => {
      data = null; // Cleanup to avoid memory leaks
    };
  }, []);

  return (
    <>
    <form className="w-full flex flex-col gap-4">
      {data && (<input type="hidden" name="id" defaultValue={data.id} />)}
      
      <div className="flex flex-col">
        <label>Slug</label>
        <input name="slug" type="text" className="bg-purple/20 p-2" defaultValue={data?.slug} pattern="[a-z\-]+" required />
      </div>
      
      <div className="flex flex-col">
        <label>Title</label>
        <input name="title" type="text" className="bg-purple/20 p-2" defaultValue={data?.title} required />
      </div>
      
      <div className="flex flex-col">
        <label>Subtitle</label>
        <input name="subtitle" type="text" className="bg-purple/20 p-2" defaultValue={data?.subtitle} required />
      </div>
      
      <div className="flex flex-col">
        <label>Overview</label>
        <RichTextEditor ref={ref} />
      </div>

      <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-4 border border-purple p-2'>
        <legend className="text-xl">Button Link</legend>

        <div className="flex flex-col">
          <label>Button Text</label>
          <input name="link_text" type="text" className="bg-purple/20 p-2" defaultValue={data?.link_text} onChange={(e) => {if (e.target.value) {setHasButton(true)} else {setHasButton(false)}}} />
        </div>

        <div className="flex flex-col">
          <label>Button URL</label>
          <input name="link_url" type="text" className="bg-purple/20 p-2 disabled:opacity-20" defaultValue={data?.link_url} required={hasButton} disabled={!hasButton} />
        </div>
      </fieldset>

      <div className='flex items-center justify-end gap-4'>
        <button type="submit" className='text-bright-purple mb-2 opacity-50 hover:opacity-100 cursor-pointer' formAction={deleteProject}>
          Delete
        </button>
        <button type="submit" className={buttonStyles.button} formAction={(formData) => handleSubmit(formData)}>
          {data !== null ? 'Update' : 'Create'}
        </button>
      </div>

    </form>
    {showToast && (<Toast {...toastData} />)}    
    </>
  )
}

const Toast = ({success, action}: {success: boolean, action: string}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setIsVisible(false);
    }, 3500)

    return () => {

    }
  }, []);

  return (
    <aside className={`fixed transition-all duration-300 ease-in ${isVisible ? 'animate-bounce bottom-4 right-4' : 'right-4 -bottom-full'}`}>
      <div className={`flex items-center gap-2 p-4  ${success ? 'bg-blue text-bright-purple' : 'bg-pink text-bright-purple'}`}>
        {success && (
          <>
            <PiCheckFatDuotone className='size-10' />
            <h3>Project {action === 'update' ? 'updated' : action === 'insert' ? 'inserted' : 'deleted'}  successfully</h3>
          </>
        )}
        {!success && (
          <>
            <PiWarningDiamondDuotone className='size-10' />
            <h3>Error while {action === 'update' ? 'updating' : action === 'insert' ? 'inserting' : 'deleting'}  the project</h3>
          </>
        )}
      </div>
      <div className={`absolute top-1 left-1 w-full h-full -z-10 ${success ? 'bg-pink' : 'bg-blue'}`}></div>
    </aside>
  )
}