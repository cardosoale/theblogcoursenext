'use server';

import { IMAGE_UPLOADER_MAX_SIZE } from '@/lib/constants';

type uploadImageActionResult = {
  url: string;
  error: string;
};

export async function uploadImageAction(
  formdata: FormData,
): Promise<uploadImageActionResult> {
  const makeResult = ({ url = '', error = '' }) => {
    return {
      url,
      error,
    };
  };

  const file = formdata.get('file');

  if (!(file instanceof File)) {
    return makeResult({ error: 'Arquivo inválido' });
  }

  if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
    return makeResult({ error: 'Arquivo muito grande' });
  }

  if (file.type.startsWith('image/')) {
    return makeResult({ error: 'Imagem inválida' });
  }

  return makeResult({ url: 'URL' });
}
