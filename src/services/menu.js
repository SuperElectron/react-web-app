export async function getLeftMenuData() {
  return [
    {
      divider: true,
    },
    {
      title: 'Home',
      key: 'home',
      icon: 'icmn icmn-home',
      url: '/dashboard/home',
    },
    {
      title: 'Testimonials',
      key: 'testimonials',
      icon: 'icmn icmn-books',
      url: '/dashboard/testimonials',
    },
    {
      title: 'Resorts',
      key: 'resorts',
      icon: 'icmn icmn-menu',
      url: '/dashboard/resorts',
    },
    {
      title: 'Services',
      key: 'services',
      icon: 'icmn icmn-stack',
      url: '/dashboard/services',
    }, 
    {
      divider: true,
    },
    {
      title: 'Client View',
      key: 'client',
      icon: 'icmn icmn-cart',
      children: [
        {
          title: 'Dashboard',
          key: 'dashboard',
          url: '/client/dashboard',
          pro: true,
        },
      ],
    },
    {
      divider: true,
    },
    {
      title: 'More',
      key: 'more',
      icon: 'icmn icmn-light',
      url: '/dashboard/more',
    },
    {
      title: 'Settings',
      key: 'settings',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
    },
    {
      divider: true,
    }
  ]
}
export async function getTopMenuData() {
  return [
    {
      title: 'Home',
      key: 'home',
      icon: 'icmn icmn-books',
      url: '/dashboard/home',
    },
    {
      title: 'Rentals',
      key: 'rentals',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
      url: '/dashboard/rentals',
    },
    {
      title: 'Resorts',
      key: 'resorts',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
      url: '/dashboard/resorts',
    },
    {
      title: 'Services',
      key: 'services',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
      url: '/dashboard/services',
    }, 
    {
      title: 'Pages',
      key: 'pages',
      icon: 'icmn icmn-stack',
      children: [
        {
          title: 'Client View',
          key: 'client',
          children: [
            {
              title: 'Dashboard',
              key: 'dashboard',
              url: '/client/dashboard',
              pro: true,
            },
          ],
        },
      ],
    },
    {
      title: 'More',
      key: 'more',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
      url: '/dashboard/more',
    }, 
    {
      title: 'Settings',
      key: 'settings',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
    }
  ]
}
