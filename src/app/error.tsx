'use client';
import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type ErrorRootPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorRootPage({ error }: ErrorRootPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <ErrorMessage
      pageTitle='Internal Server Error'
      contentTitle='501'
      content='Ocorreu um erro do qual nossa aplicação não conseguiu ser recuperar. Tente novamente mais tarde.'
    />
  );
}
