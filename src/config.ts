export const SITE = {
  title: 'My school exercises',
  description: 'A website for my school exercises.',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
    alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
  English: 'en',
  Danish: 'dk',
  Math: 'mt',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/3-141592653589793238462643383/school-docs/blob/master/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: '', header: true },
    { text: 'Info', header: true },
    { text: 'Overview', link: 'en/overview' },

    { text: 'Exercises', header: true },
    { text: 'Law And Order', link: 'en/2021/lawandorder' },

    { text: 'Other subjects', header: true },
    { text: 'Dansk', link: 'dk/overview' },
    { text: 'Matematik', link: 'mt/overview' },
  ],
  dk: [
    { text: '', header: true },
    { text: 'Info', header: true },
    { text: 'Oversigt', link: 'dk/overview'},

    { text: 'Opgaver', header: true },
    { text: 'Placeholder', link: 'dk/2021/placeholder' },

    { text: 'Andre fag', header: true },
    { text: 'English', link: 'en/overview' },
    { text: 'Matematik', link: 'mt/overview' },
  ],
  mt: [
    { text: '', header: true },
    { text: 'Info', header: true },
    { text: 'Oversigt', link: 'mt/overview'},

    { text: 'Opgaver', header: true },
    { text: 'Placeholder', link: 'mt/2021/placeholder' },

    { text: 'Andre fag', header: true },
    { text: 'English', link: 'en/overview' },
    { text: 'Dansk', link: 'dk/overview' },
  ],
};
