export async function getLeftMenuData() {
  return [
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
      title: 'More',
      key: 'more',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
      url: '/dashboard/more',
    }, 
    {
      divider: true,
    },
// SUPPLIED CODE
    {
      title: 'Settings',
      key: 'settings',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
    },
    {
      divider: true,
    },
    {
      title: 'Ecommerce',
      key: 'ecommerce',
      icon: 'icmn icmn-cart',
      children: [
        {
          title: 'Dashboard',
          key: 'dashboard',
          url: '/ecommerce/dashboard',
          pro: true,
        },
        {
          title: 'Products Details',
          key: 'productsDetails',
          url: '/ecommerce/product-details',
          pro: true,
        },
      ],
    },
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
      title: 'More',
      key: 'more',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
      url: '/dashboard/more',
    }, 
    {
      divider: true,
    },
// SUPPLIED CODE BELOW
    {
      title: 'Settings',
      key: 'settings',
      icon: 'icmn icmn-cog utils__spin-delayed--pseudo-selector',
    },
    {
      title: 'Pages',
      key: 'pages',
      icon: 'icmn icmn-stack',
      children: [
        {
          title: 'Ecommerce',
          key: 'ecommerce',
          children: [
            {
              title: 'Dashboard',
              key: 'dashboard',
              url: '/ecommerce/dashboard',
              pro: true,
            },
            {
              title: 'Products Details',
              key: 'productsDetails',
              url: '/ecommerce/product-details',
              pro: true,
            },
          ],
        },
      ],
    },
  ]
}
