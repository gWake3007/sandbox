//!=================================== Example (fetch & then / catch promise & async || await) ============================
//?
// const fetchFriends = () => {
//     return fetch("my-api.com/me").then(token => {
//       console.log(token);
//     });
//   };
//?
// const fetchFriends = () => {
//     return fetch("my-api.com/me")
//       .then(token => {
//         return fetch(`my-api.com/profile?token=${token}`);
//       })
//       .then(user => {
//         console.log(user.id);
//       });
//   };
//?
// const fetchFriends = () => {
//     return fetch("my-api.com/me")
//       .then(token => {
//         return fetch(`my-api.com/profile?token=${token}`);
//       })
//       .then(user => {
//         return fetch(`my-api.com/users/${user.id}/friends`);
//       });
//   };
  
//   fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));
//?Теж саме але з використанням await & async.
const fetchFriends = async () => {
    const token = await fetch("my-api.com/me");
    const user = await fetch(`my-api.com/profile?token=${token}`);
    const friends = await fetch(`my-api.com/users/${user.id}/friends`);
    return friends;
  };
  
  fetchFriends()
    .then(friends => console.log(friends))
    .catch(error => console.error(error));

    