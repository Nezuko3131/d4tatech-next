import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'solucion',
  title: 'Solución',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'icono',
      title: 'Icono',
      type: 'string',
      description: 'Nombre del icono (ej: code, database, cloud)',
    }),
  ],
})
