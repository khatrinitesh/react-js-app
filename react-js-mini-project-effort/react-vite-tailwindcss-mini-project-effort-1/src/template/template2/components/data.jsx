
import Plug from '../images/plug.png';
import AboutImg1 from '../images/about-img1.jpg'
import AboutImg2 from '../images/about-img2.jpg'
import S1 from '../images/s1.png'
import S2 from '../images/s2.png'
import S3 from '../images/s3.png'
import S4 from '../images/s4.png'
import S5 from '../images/s5.png'
import Blog1 from '../images/blog1.jpg';
import Blog2 from '../images/blog2.jpg'


export const AboutData = {
    title:'About Us',
    icon:`${Plug}`,
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
    thumb1:`${AboutImg1}`,
    thumb2:`${AboutImg2}`
}

export const ServiceData = [
    {
    title:"Our Services",
    icon:`${Plug}`,
    groupdata:[
        {
            iconthumb:`${S1}`,
            subtitle:'Equipment installation',
            desc:'There are many variations of passages of Lorem Ipsum available,',
        },
        {
            iconthumb:`${S2}`,
            subtitle:'Equipment installation',
            desc:'There are many variations of passages of Lorem Ipsum available,',
        },
        {
            iconthumb:`${S3}`,
            subtitle:'Equipment installation',
            desc:'There are many variations of passages of Lorem Ipsum available,',
        },
        {
            iconthumb:`${S4}`,
            subtitle:'Equipment installation',
            desc:'There are many variations of passages of Lorem Ipsum available,',
        },
        {
            iconthumb:`${S5}`,
            subtitle:'Equipment installation',
            desc:'There are many variations of passages of Lorem Ipsum available,',
        },
    ]
    }
]

export const BlogData = [
    {
        title:"Blog",
        icon:`${Plug}`,
        groupdata:[
            {
                iconthumb:`${Blog1}`,
                subtitle:'Blog Title Goes Here',
                desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised',
            },
            {
                iconthumb:`${Blog2}`,
                subtitle:'Blog Title Goes Here',
                desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised',
            },
        ]

    }
]

export const ContactData = [
    {
        title:"Contact",
        icon:`${Plug}`,
    }
]