'use client';
import { deletePostAction } from '@/actions/post/delete-post-action';
import { Dialog } from '@/components/Dialog';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { useState, useTransition } from 'react';

type DeletePostButtonProps = {
  title: string;
  id: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [showDialog, setShowDialog] = useState(false);

  function handleClick() {
    setShowDialog(true);
  }

  function handleConfirm() {
    startTransition(async () => {
      const result = await deletePostAction(id);
      setShowDialog(false);
      if (result.error) {
        alert(`Erro: ${result.error}`);
      }
    });
  }

  return (
    <>
      <button
        className={clsx(
          'text-red-500 cursor-pointer transition',
          'hover:scale-120 hover:text-red-700',
        )}
        aria-label={`Apagar post: ${title}`}
        title={`Apagar post: ${title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon size={20} />
      </button>
      {showDialog && (
        <Dialog
          isVisible={showDialog}
          title='Apagar post?'
          content={`Tem certeza que gostaria de deletar o post: ${title}`}
          onCancel={() => setShowDialog(false)}
          onConfirm={handleConfirm}
          disabled={isPending}
        />
      )}
    </>
  );
}
