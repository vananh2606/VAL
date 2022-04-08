import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/261838609_416903189922630_6774700619263594350_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oTOmL9l8SKwAX8096Zg&tn=uvm3ybOIslmVdjXg&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8e_TIzUps5hSlbK8TtNKHg4kxbe0WZcBS4XR4ZDAB9Bg&oe=624F7904',
        user: USERS[1].user,
        likes: 9999,
        caption: 'Mot ngay buon!',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'Nguyen Hoang Long',
                comment: 'Wow!'
            },
            {
                user: 'Le Van Minh',
                comment: 'The a!'
            },
            {
                user: 'Luong Duy Dat',
                comment: 'Sao vay!'
            }
        ]
    },
    {
        imageUrl: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/261838609_416903189922630_6774700619263594350_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oTOmL9l8SKwAX8096Zg&tn=uvm3ybOIslmVdjXg&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8e_TIzUps5hSlbK8TtNKHg4kxbe0WZcBS4XR4ZDAB9Bg&oe=624F7904',
        user: USERS[1].user,
        likes: 9999,
        caption: 'Mot ngay buon!',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'Nguyen Hoang Long',
                comment: 'Wow!'
            },
            {
                user: 'Le Van Minh',
                comment: 'The a!'
            },
            {
                user: 'Luong Duy Dat',
                comment: 'Sao vay!'
            }
        ]
    }
]

export const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png',
        active: 'https://cdn-icons-png.flaticon.com/128/833/833472.png'
    },
    {
        name: 'Comment',
        imageUrl: 'https://cdn-icons-png.flaticon.com/128/2462/2462719.png',
    },
    {
        name: 'Share',
        imageUrl: 'https://cdn-icons.flaticon.com/png/128/2550/premium/2550207.png?token=exp=1649129652~hmac=92591921abda2d842e45c6143a09e08e',
    },
    {
        name: 'Save',
        imageUrl: 'https://cdn-icons.flaticon.com/png/128/5662/premium/5662990.png?token=exp=1649129652~hmac=87705c7940f1af69d668e73e06b9c9ae',
    },
]