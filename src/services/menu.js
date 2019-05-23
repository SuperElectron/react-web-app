export async function getLeftMenuData() {
  return [
    {
      title: 'Home',
      key: 'home',
      icon: 'icmn icmn-home',
      url: '/dashboard/home',
    },
    {
      title: 'Rentals',
      key: 'rentals',
      icon: 'icmn icmn-books',
      url: '/dashboard/rentals',
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
      title: 'Default Pages',
      key: 'defaultPages',
      icon: 'icmn icmn-file-text',
      children: [
        {
          key: 'pricingTable',
          title: 'Pricing Tables',
          url: '/pages/pricing-table',
          pro: true,
        },
      ],
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
          title: 'Products Catalog',
          key: 'productsCatalog',
          url: '/ecommerce/products-catalog',
          pro: true,
        },
        {
          title: 'Products Details',
          key: 'productsDetails',
          url: '/ecommerce/product-details',
          pro: true,
        },
        {
          title: 'Products List',
          key: 'productsList',
          url: '/ecommerce/products-list',
          pro: true,
        },
      ],
    },
    {
      title: 'Blog',
      key: 'blog',
      icon: 'icmn icmn-wordpress',
      children: [
        {
          title: 'Feed',
          key: 'blogFeed',
          url: '/blog/feed',
          pro: true,
        },
        {
          title: 'Post',
          key: 'blogPost',
          url: '/blog/post',
          pro: true,
        },
        {
          title: 'Add Post',
          key: 'blogAddPost',
          url: '/blog/add-blog-post',
          pro: true,
        },
      ],
    },
    {
      title: 'YouTube',
      key: 'youtube',
      icon: 'icmn icmn-youtube',
      children: [
        {
          title: 'Feed',
          key: 'youtubeFeed',
          url: '/youtube/feed',
          pro: true,
        },
        {
          title: 'View',
          key: 'youtubeView',
          url: '/youtube/view',
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
          title: 'Default Pages',
          key: 'defaultPages',
          children: [
            {
              key: 'pricingTable',
              title: 'Pricing Tables',
              url: '/pages/pricing-table',
              pro: true,
            },
          ],
        },
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
              title: 'Products Catalog',
              key: 'productsCatalog',
              url: '/ecommerce/products-catalog',
              pro: true,
            },
            {
              title: 'Products Details',
              key: 'productsDetails',
              url: '/ecommerce/product-details',
              pro: true,
            },
            {
              title: 'Products List',
              key: 'productsList',
              url: '/ecommerce/products-list',
              pro: true,
            },
          ],
        },
        {
          title: 'Blog',
          key: 'blog',
          children: [
            {
              title: 'Feed',
              key: 'blogFeed',
              url: '/blog/feed',
              pro: true,
            },
            {
              title: 'Post',
              key: 'blogPost',
              url: '/blog/post',
              pro: true,
            },
            {
              title: 'Add Post',
              key: 'blogAddPost',
              url: '/blog/add-blog-post',
              pro: true,
            },
          ],
        },
        {
          title: 'YouTube',
          key: 'youtube',
          children: [
            {
              title: 'Feed',
              key: 'youtubeFeed',
              url: '/youtube/feed',
              pro: true,
            },
            {
              title: 'View',
              key: 'youtubeView',
              url: '/youtube/view',
              pro: true,
            },
          ],
        },
      ],
    },
  ]
}
