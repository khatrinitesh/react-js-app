import React from 'react';
import './timeline.css';

export default function VerticalTimeline() {
  return (
    <>
        <Header />
	    <Timeline />
    </>
  )
}

const Header = () => headerData.length > 0 && (
	<div className="header-container">
		{headerData.map((data, idx) => (
			<HeaderItem data={data} key={idx} />
		))}
	</div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
);

const timelineData = [
    {
        text: 'Started working on the app-ideas repository',
        date: 'February 25 2019',
        category: {
			tag: 'app-ideas',
			color: '#FFDB14'
		},
        link: {
            url: '#!',
            text: 'Check it out on GitHub'
        }
    },
    {
        text: 'Started the Weekly Coding Challenge program',
        date: 'March 04 2019',
        category: {
			tag: 'blog',
			color: '#e17b77'
		},
        link: {
            url: '#!',
            text: 'Check it out here'
        }
    },
    {
        text: 'Got 1.000 followers on Twitter',
        date: 'March 07 2019',
        category: {
			tag: 'twitter',
			color: '#1DA1F2'
		},
        link: {
            url: '#!',
            text: 'See profile'
        }
    },
    {
        text:
            'I published my first article in the FreeCodeCamp Medium Publication',
        date: 'March 18 2019',
        category: {
			tag: 'medium',
			color: '#018f69'
		},
        link: {
            url:
                '#!',
            text: 'Check it out here'
        }
    },
    {
        text: 'Over 12.000 views in a single day on my Medium posts',
        date: 'April 05 2019',
        category: {
			tag: 'medium',
			color: '#018f69'
		},
        link: {
            url: '#!',
            text: 'See profile'
        }
    }
]

const headerData = [
	{
		heading: 'React Timeline',
		subheading: 'Made with React.',
		author: 'Fred Siika',
		date: 'July 20 2020',
		category: {
			tag: 'Codepen',
			color: 'white',
			background: 'linear-gradient(45deg, #2989d8 0%, #7db9e8 100%);'
		},
		link: {
			url: 'https://codepen.io/fredsiika1/pen/EJvWBZ',
			text: `See more from Fred.`
		},
		social: {
			github: {
				name: 'GitHub',
				url: 'https://github.com/fredsiika',
			},
			codepen: {
				name: 'Codepen',
				url: 'https://codepen.io/fredsiika1'
			},
			linkedIn: {
				name: 'LinkedIn', 
				url: 'https://linkedin.com/in/fredsiika',
			},
			instagram: {
				name: 'Instagram', 
				url: 'https://instagram.com/fredsiika',
			},
			twitter: {
				name: 'Twitter',
				url: 'https://twitter.com/fredsiika',
			},
		}
	}
]

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

const HeaderItem = ({ data }) => (
	<div className="header-item">
		<div className="header-item-content">
			<nav>
				
				<p className="author" style={{ color: data.category.color}}>{data.author}</p>
			
				<ul class="social">
				<li>{data.link && (
				<a href={data.social.instagram.url}
					target="_blank"
					rel="noopener noreferrer">
					{data.social.instagram.name}
				</a>
			)}</li>
				<li>{data.link && (
				<a href={data.social.github.url}
					target="_blank"
					rel="noopener noreferrer">
					{data.social.github.name}
				</a>
					)}</li>
				<li>{data.link && (
				<a href={data.social.codepen.url}
					target="_blank"
					rel="noopener noreferrer">
					{data.social.codepen.name}
				</a>
					)}</li>
			</ul>
			</nav>
			<h1>{data.heading}</h1>
			<p className="sub">{data.subheading}</p>
		</div>
		
	</div>
);

