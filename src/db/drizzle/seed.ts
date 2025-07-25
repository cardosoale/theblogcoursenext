import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();

  const posts = await jsonPostRepository.findAll();
  try {
    await drizzleDb.delete(postsTable); // REMOVE A BASE DE DADOS
    await drizzleDb.insert(postsTable).values(posts);
    console.log();
    console.log(`BD resetado e ${posts.length} posts foram salvos.`);
    console.log();
  } catch (e) {
    console.log();
    console.log('Ocorreu um erro...');
    console.log();
    console.log(e);
    console.log();
  }
})();
