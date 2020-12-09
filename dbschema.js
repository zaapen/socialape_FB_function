let db = {
  screams: [
    {
      userHandle: 'user',
      body: 'this is the scream body',
      createdAt: '2020-06-21T21:40:41.467Z',
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: 'user',
      screamId: 'kfdsajkfdlsajklfjkdsa',
      body: 'nice one mate!',
      createAt: '2020-08-27T05:18:09.879Z',
    },
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'john',
      read: 'true | false',
      screamId: 'MkkIHVZC7uVusZBKjomM',
      type: 'like | comment',
      createdAt: '2020-08-29T06:18:09.879Z',
    },
  ],
};

const userDetails = {
  // Redux data
  credentials: {
    userId: 'Gg0C3Cv59QR5ZZJVHYJBRAjrq542',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2020-08-26T05:17:09.879Z',
    bio: 'Hello, my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'Los Angeles, CA',
  },
  likes: [
    {
      userHandle: 'user',
      screamId: 'Gh0C3Cv59QR5ZZJVHYJBRAjrq543',
    },
    {
      userHandle: 'user2',
      screamId: 'Ga0C3Cv59QR5ZZJVHYJBRAjrq544',
    },
  ],
};
