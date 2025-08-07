'use client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOADER_MAX_SIZE } from '@/lib/constants';
import { ImageUpIcon } from 'lucide-react';
import { useTransition, useRef, useState } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState('');

  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChanche() {
    toast.dismiss();

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!fileInput) {
      setImgUrl('');
      return;
    }

    if (!file) {
      setImgUrl('');
      return;
    }

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOADER_MAX_SIZE;
      toast.error(`Tamanho max da imagem ${readableMaxSize}KB.`);

      fileInput.value = '';
      setImgUrl('');
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

      setImgUrl(result.url);
      toast.success('Imagem enviada');
    });

    fileInput.value = '';
  }

  return (
    <div className='flex flex-col gap-4 py-4'>
      <Button
        onClick={handleChooseFile}
        type='button'
        className='self-start'
        disabled={isUploading}
      >
        <ImageUpIcon />
        Enviar Imagem
      </Button>
      {!!imgUrl && (
        <div>
          {/* eslint-disable-next-line */}
          <img src={imgUrl} className='rounded-lg' />

          <p>
            <b>URL: </b> {imgUrl}
          </p>
        </div>
      )}

      <input
        onChange={handleChanche}
        ref={fileInputRef}
        type='file'
        name='file'
        accept='image/*'
        className='hidden'
        disabled={isUploading}
      />
    </div>
  );
}
