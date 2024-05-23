import React from 'react'
import { motion } from 'framer-motion';
import './style.css';

const VerticalTimelineApp = () => {
    return (
        <>
            <VerticalTimeline />
        </>
    )
}

export default VerticalTimelineApp

const VerticalTimeline = () => {
    const events = [
        { id: 1, title: 'Event 1', date: '2022-01-01' },
        { id: 2, title: 'Event 2', date: '2022-02-15' },
        { id: 3, title: 'Event 3', date: '2022-04-05' },
        // Add more events as needed
    ];
    return (
        <>
            <div className='timelineContent'>
                {events.map((event) => {
                    return (
                        <>
                            <motion.div key={event.id} className="timeline-event" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
                                <h3>{event.title}</h3>
                                <p>{event.date}</p>
                            </motion.div>
                        </>
                    )
                })}
            </div>
        </>
    )
}
