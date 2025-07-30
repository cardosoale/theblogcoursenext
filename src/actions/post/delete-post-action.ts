'use server';

export async function deletePostAction(formdata: FormData) {
  const id = formdata.get('id');

  console.log('' + id);
}
