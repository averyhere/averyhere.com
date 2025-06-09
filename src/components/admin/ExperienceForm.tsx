'use client'

import { upsertExperience, deleteExperience } from '@/lib/actions/admin-actions/experience'
import buttonStyles from "@/components/ui/Button/button.module.css"
import { useRef, useEffect } from 'react';
import { RichTextEditor } from '@/components/ui'
import { CustomToast } from "@/components/ui/Toast"
import { toast } from "react-toastify"

// eslint-disable-next-line
export const ExperienceForm = ({data}: {data?: any}) => {
  const ref = useRef(null);

  const handleUpdate = async (formData: FormData) => {
    // eslint-disable-next-line
    formData.append('overview',(ref?.current as any)?.getContent())
    const { error, success } = await upsertExperience(formData);

    if (error) {
      toast.error(CustomToast, {
        data: {
          message: error
        }
      })
    } else if (success) {
      toast.success(CustomToast, {
        data: {
          message: success
        }
      })
    }
  }

  const handleDelete = async (formData: FormData) => {
    const { error } = await deleteExperience(formData);

    if (error) {
      toast.error(CustomToast, {
        data: {
          message: error
        }
      })
    }
  }

  useEffect(() => {
    if (data && data?.overview) {
      // eslint-disable-next-line
      (ref?.current as any)?.setContent(data.overview);
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
        <input name="slug" type="text" className="bg-purple/20 p-2 border border-purple" defaultValue={data?.slug} pattern="[a-z\-]+" required />
      </div>
      
      <div className="flex flex-col">
        <label>Job Title / Position</label>
        <input name="title" type="text" className="bg-purple/20 p-2 border border-purple" defaultValue={data?.title} required />
      </div>
      
      <div className="flex flex-col">
        <label>Company Name</label>
        <input name="company_name" type="text" className="bg-purple/20 p-2 border border-purple" defaultValue={data?.company_name} required />
      </div>

      <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-4 border border-purple p-4 pt-2'>
        <legend className="text-xl">Timeframe</legend>

        <div className="flex flex-col">
          <label>Start Date</label>
          <input name="start_date" type="text" className="bg-purple/20 p-2 border border-purple" defaultValue={data?.start_date} required />
        </div>

        <div className="flex flex-col">
          <label>End Date</label>
          <input name="end_date" type="text" className="bg-purple/20 p-2 border border-purple" defaultValue={data?.end_date} required />
        </div>
      </fieldset>
      
      <div className="flex flex-col">
        <label>Overview</label>
        <RichTextEditor ref={ref} />
      </div>

      <div className='flex items-center justify-end gap-4'>
        <button type="submit" className='text-bright-purple mb-2 opacity-50 hover:opacity-100 cursor-pointer' formAction={handleDelete}>
          Delete
        </button>
        <button type="submit" className={buttonStyles.button} formAction={handleUpdate}>
          {data ? 'Update' : 'Create'}
        </button>
      </div>

    </form>
    </>
  )
}