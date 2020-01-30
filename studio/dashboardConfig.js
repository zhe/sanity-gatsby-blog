export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e32f15de5dc6ce12ad7466b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wdbgx78b',
                  apiId: '8af53066-91b3-45e3-9973-32e0d15ccaf9'
                },
                {
                  buildHookId: '5e32f15d5623e7f94cac9c04',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dic2fym4',
                  apiId: 'caa1bb3c-a8bb-4e45-9ee3-b84cb1149dd8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zhe/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dic2fym4.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
