export const menuItems = [
    {
      title: 'Xe cũ',
      url: '/',
    },
    {
      title: 'Xe mới',
      url: '/services',
      submenu: [
        {
          title: 'web design',
          url: 'web-design',
        },
        {
          title: 'web development',
          url: 'web-dev',
          submenu: [
            {
              title: 'Frontend',
              url: 'frontend',
            },
            {
              title: 'Backend',
              submenu: [
                {
                  title: 'NodeJS',
                  url: 'node',
                },
                {
                  title: 'PHP',
                  url: 'php',
                },
              ],
            },
          ],
        },
        {
          title: 'SEO',
          url: 'seo',
        },
      ],
    },
    {
      title: 'Giá xe ô tô',
      url: '/about',
      submenu: [
        {
          title: 'Who we are',
          url: 'who-we-are',
        },
        {
          title: 'Our values',
          url: 'our-values',
        },
      ],
    },
    {
      title: 'Tin tức',
      url: '/about',
    },
    {
      title: 'Danh bạ',
      url: '/about',
      submenu: [
        {
          title: 'Who we are',
          url: 'who-we-are',
        },
        {
          title: 'Our values',
          url: 'our-values',
        },
      ],
    },
  ];