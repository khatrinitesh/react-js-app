import React from 'react'

const ListGrpWithBadgesApp = () => {
    const [list, setList] = React.useState([
        { name: 'Avid', phone: '000-111-1111' },
        { name: 'Bvid', phone: '000-222-1111' },
        { name: 'Cvid', phone: '000-333-1111' },
        { name: 'Dvid', phone: '000-444-1111' },
        { name: 'Fvid', phone: '000-555-1111' }
    ])
    return (
        <>
            {list.map((val) => {
                const { name, phone } = val
                return (
                    <li>
                        {name} - {phone}
                    </li>
                )
            })}
        </>
    )
}

export default ListGrpWithBadgesApp
