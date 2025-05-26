'use client'

import { upsertPage, deletePage } from '@/lib/actions/admin-actions/pages'
import buttonStyles from "@/components/ui/Button/button.module.css"
import { useRef, useEffect, useState } from 'react';
import { Toast, RichTextEditor } from '@/components/ui'

// eslint-disable-next-line
export const PageForm = ({data}: {data?: any}) => {
  const [formData, setFormData] = useState(data)
  const [errorMessage, setErrorMessage] = useState<null|string>(null);
  const [successMessage, setSuccessMessage] = useState<null|string>(null);
  const ref = useRef(null);

  const handleUpdate = async (submittedData: FormData) => {
    // eslint-disable-next-line
    submittedData.append('content',(ref?.current as any)?.getContent())
    const { error, success, data } = await upsertPage(submittedData);
      setFormData(data);

    if (error) {
      setErrorMessage(`${error}`);
    } else if (success) {
      setSuccessMessage(success);
    }
  }

  const handleDelete = async (submittedData: FormData) => {
    const { error } = await deletePage(submittedData);

    if (error) {
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    if (formData && formData?.content) {
      // eslint-disable-next-line
      (ref?.current as any)?.setContent(formData.content);
    }
  }, [formData]);

  return (
    <>
    <form className="w-full flex flex-col gap-4">
      {formData && (<input type="hidden" name="id" defaultValue={formData?.id} />)}
      
      <div className="flex flex-col">
        <label>Slug</label>
        <input name="slug" type="text" className="bg-purple/20 p-2 border border-purple" defaultValue={formData?.slug} pattern="[a-z\-]+" required />
      </div>
      
      <div className="flex flex-col">
        <label>Title</label>
        <input name="title" type="text" className="bg-purple/20 p-2 border border-purple" defaultValue={formData?.title} required />
      </div>
      
      <div className="flex flex-col">
        <label>Content</label>
        <RichTextEditor ref={ref} />
      </div>

      <fieldset className='grid grid-cols-1 gap-4 border border-purple p-4 pt-2'>
        <legend className="text-xl">SEO</legend>

        <div className="flex flex-col">
          <label>Title</label>
          <input name="seo_title" type="text" className="bg-purple/20 p-2 border border-purple" defaultValue={formData?.seo_title} required />
        </div>

        <div className="flex flex-col">
          <label>Description</label>
          <textarea name="seo_description" className="bg-purple/20 p-2 border border-purple" defaultValue={formData?.seo_description} required />
        </div>
      </fieldset>

      <div className='flex items-center justify-end gap-4'>
        <button type="submit" className='text-bright-purple mb-2 opacity-50 hover:opacity-100 cursor-pointer' formAction={handleDelete}>
          Delete
        </button>
        <button type="submit" className={buttonStyles.button} formAction={handleUpdate}>
          {data ? 'Update' : 'Create'}
        </button>
      </div>

    </form>
    
    {errorMessage && (
      <Toast message={errorMessage} variant="error" />
    )}

    {successMessage && (
      <Toast message={successMessage} variant="success" />
    )}
    </>
  )
}