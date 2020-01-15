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
                  buildHookId: '5e1f6c75a8ff58b2dd879ff4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5tn44s6f',
                  apiId: '9381c0cc-e100-48d9-b7b4-c8fbdc3732c3'
                },
                {
                  buildHookId: '5e1f6c7529dd9442847e114d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ahqi9rgh',
                  apiId: '812ddda7-f5f3-4bf4-94cd-74abc3d8aef6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shookoftheroad/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ahqi9rgh.netlify.com', category: 'apps' }
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
