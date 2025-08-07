'use client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOADER_MAX_SIZE } from '@/lib/constants';
import { ImageUpIcon } from 'lucide-react';
import { useTransition, useRef } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChanche() {
    toast.dismiss();

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!fileInput) return;

    if (!file) return;

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE;
      toast.error(`Tamanho max da imagem ${readableMaxSize}KB.`);

      fileInput.value = '';
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = '';
        return;
      }

      toast.success(result.url);
    });

    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-2 py-4'>
      <Button onClick={handleChooseFile} type='button' className='self-start'>
        <ImageUpIcon />
        Enviar Imagem
      </Button>

      <input
        onChange={handleChanche}
        ref={fileInputRef}
        type='file'
        name='file'
        accept='image/*'
        className='hidden'
      />
    </div>
  );
}
