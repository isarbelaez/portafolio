import { z, defineCollection } from 'astro:content';

const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    niche: z.string(),
    desc: z.string(),
    fullDesc: z.string(),
    resultados: z.array(z.string()).default([]),
    gallery: z.array(
      z.object({
        src: z.string(),
        title: z.string().optional()
      })
    ).default([]),
    icon: z.string().optional(),
    link: z.string().url().optional(),
    proposalLink: z.string().url().optional(),
    embed: z.string().optional(),
  })
});

export const collections = {
  'proyectos': proyectosCollection,
};
